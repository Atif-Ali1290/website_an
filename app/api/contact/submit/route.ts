import { NextRequest, NextResponse } from 'next/server';
import { isValidEmail, isValidPhone } from '../../../../lib/utils';
import { FORM_VALIDATION } from '../../../../lib/constants';
import { ContactFormSubmission } from '../../../../types';

// In-memory storage for demo purposes
// In a real application, this would be a database
let contactSubmissions: ContactFormSubmission[] = [];

// Sanitize input to prevent XSS
function sanitizeInput(input: string): string {
  if (typeof input !== 'string') {
    return '';
  }

  // Remove potentially dangerous characters
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '') // Remove iframe tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+="[^"]*"/gi, '') // Remove event handlers
    .trim();
}

export async function POST(request: NextRequest) {
  try {
    // Limit request body size to prevent abuse
    const contentLength = request.headers.get('content-length');
    if (contentLength && parseInt(contentLength, 10) > 1024 * 10) { // 10KB limit
      return NextResponse.json(
        {
          success: false,
          error: 'Request body too large'
        },
        { status: 413 }
      );
    }

    const body = await request.json();

    // Validate content type
    const contentType = request.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return NextResponse.json(
        {
          success: false,
          error: 'Content-Type must be application/json'
        },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedBody = {
      name: sanitizeInput(body.name || ''),
      email: sanitizeInput(body.email || ''),
      phone: sanitizeInput(body.phone || ''),
      message: sanitizeInput(body.message || ''),
      interest: sanitizeInput(body.interest || ''),
      productInterest: sanitizeInput(body.productInterest || ''),
      serviceInterest: sanitizeInput(body.serviceInterest || '')
    };

    // Validate required fields
    if (!sanitizedBody.name || !sanitizedBody.email || !sanitizedBody.message) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          details: [
            { field: 'name', message: sanitizedBody.name ? undefined : 'Name is required' },
            { field: 'email', message: sanitizedBody.email ? undefined : 'Email is required' },
            { field: 'message', message: sanitizedBody.message ? undefined : 'Message is required' }
          ].filter(error => error.message)
        },
        { status: 400 }
      );
    }

    // Additional validation
    const validationErrors = [];

    if (sanitizedBody.name.length < FORM_VALIDATION.MIN_NAME_LENGTH || sanitizedBody.name.length > FORM_VALIDATION.MAX_NAME_LENGTH) {
      validationErrors.push({
        field: 'name',
        message: `Name must be between ${FORM_VALIDATION.MIN_NAME_LENGTH} and ${FORM_VALIDATION.MAX_NAME_LENGTH} characters`
      });
    }

    if (!isValidEmail(sanitizedBody.email)) {
      validationErrors.push({ field: 'email', message: 'Invalid email format' });
    }

    if (sanitizedBody.phone && !isValidPhone(sanitizedBody.phone)) {
      validationErrors.push({ field: 'phone', message: 'Invalid phone format' });
    }

    if (sanitizedBody.message.length < FORM_VALIDATION.MIN_MESSAGE_LENGTH || sanitizedBody.message.length > FORM_VALIDATION.MAX_MESSAGE_LENGTH) {
      validationErrors.push({
        field: 'message',
        message: `Message must be between ${FORM_VALIDATION.MIN_MESSAGE_LENGTH} and ${FORM_VALIDATION.MAX_MESSAGE_LENGTH} characters`
      });
    }

    if (sanitizedBody.interest && !['product', 'service', 'general'].includes(sanitizedBody.interest)) {
      validationErrors.push({ field: 'interest', message: 'Invalid interest value' });
    }

    if (validationErrors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          details: validationErrors
        },
        { status: 400 }
      );
    }

    // Check rate limiting (max 5 submissions per hour from same IP)
    const clientIP = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '::1'; // Default to localhost for testing
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);

    // Count submissions by IP to prevent spam
    const recentSubmissionsByIP = contactSubmissions.filter(sub =>
      sub.submissionDate > oneHourAgo &&
      sub.email === sanitizedBody.email // Also check by email
    );

    if (recentSubmissionsByIP.length >= 5) {
      return NextResponse.json(
        {
          success: false,
          error: 'Rate limit exceeded. Please try again later.'
        },
        { status: 429 }
      );
    }

    // Create submission object
    const interestValue: 'product' | 'service' | 'general' =
      sanitizedBody.interest && ['product', 'service', 'general'].includes(sanitizedBody.interest)
        ? sanitizedBody.interest as 'product' | 'service' | 'general'
        : 'general';

    const newSubmission: ContactFormSubmission = {
      id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      name: sanitizedBody.name,
      email: sanitizedBody.email.toLowerCase(), // Normalize email
      phone: sanitizedBody.phone,
      message: sanitizedBody.message,
      interest: interestValue,
      productInterest: sanitizedBody.productInterest,
      serviceInterest: sanitizedBody.serviceInterest,
      submissionDate: new Date(),
      status: 'new'
    };

    // Save to "database"
    contactSubmissions.push(newSubmission);

    // In a real application, you would send an email notification here

    // Return success response without exposing internal details
    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      submissionId: newSubmission.id
    }, {
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block'
      }
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error. Please try again later.'
      },
      { status: 500 }
    );
  }
}