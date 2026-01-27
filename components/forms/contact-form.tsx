'use client';

import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { isValidEmail, isValidPhone } from '../../lib/utils';
import { FORM_VALIDATION } from '../../lib/constants';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  interest: 'product' | 'service' | 'general';
  productInterest: string;
  serviceInterest: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'general',
    productInterest: '',
    serviceInterest: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  // Handle interest change
  const handleInterestChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as 'product' | 'service' | 'general';
    setFormData(prev => ({
      ...prev,
      interest: value,
      productInterest: value === 'product' ? prev.productInterest : '',
      serviceInterest: value === 'service' ? prev.serviceInterest : '',
    }));
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < FORM_VALIDATION.MIN_NAME_LENGTH) {
      newErrors.name = `Name must be at least ${FORM_VALIDATION.MIN_NAME_LENGTH} characters`;
    } else if (formData.name.trim().length > FORM_VALIDATION.MAX_NAME_LENGTH) {
      newErrors.name = `Name must be no more than ${FORM_VALIDATION.MAX_NAME_LENGTH} characters`;
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Phone validation (optional but if provided, must be valid)
    if (formData.phone && !isValidPhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < FORM_VALIDATION.MIN_MESSAGE_LENGTH) {
      newErrors.message = `Message must be at least ${FORM_VALIDATION.MIN_MESSAGE_LENGTH} characters`;
    } else if (formData.message.trim().length > FORM_VALIDATION.MAX_MESSAGE_LENGTH) {
      newErrors.message = `Message must be no more than ${FORM_VALIDATION.MAX_MESSAGE_LENGTH} characters`;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // In a real application, this would be an API call
      // await fetch('/api/contact/submit', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        interest: 'general',
        productInterest: '',
        serviceInterest: '',
      });
    } catch (error) {
      setSubmitError('Failed to submit the form. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      {submitSuccess ? (
        <CardContent className="p-8 text-center">
          <div className="text-green-500 text-5xl mb-4">✓</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h3>
          <p className="text-gray-600">
            Your message has been received. Our team will get back to you shortly.
          </p>
          <Button 
            className="mt-6" 
            onClick={() => setSubmitSuccess(false)}
          >
            Send Another Message
          </Button>
        </CardContent>
      ) : (
        <form onSubmit={handleSubmit}>
          <CardContent className="p-6 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                  errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
                }`}
                placeholder="Enter your full name"
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                    errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                    errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
                  }`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                Interested In
              </label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleInterestChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 bg-white"
              >
                <option value="general">General Inquiry</option>
                <option value="product">Product</option>
                <option value="service">Service</option>
              </select>
            </div>

            {formData.interest === 'product' && (
              <div>
                <label htmlFor="productInterest" className="block text-sm font-medium text-gray-700 mb-2">
                  Product Interest
                </label>
                <select
                  id="productInterest"
                  name="productInterest"
                  value={formData.productInterest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 bg-white"
                >
                  <option value="">Select a product</option>
                  <option value="pos-system">POS System</option>
                  <option value="fbr-invoicing">FBR Invoicing</option>
                  <option value="erp-suite">ERP Suite</option>
                  <option value="hcm-system">Human Capital Management</option>
                  <option value="hmis">HMIS</option>
                  <option value="rems">REMS</option>
                </select>
              </div>
            )}

            {formData.interest === 'service' && (
              <div>
                <label htmlFor="serviceInterest" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interest
                </label>
                <select
                  id="serviceInterest"
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="seo">SEO Services</option>
                  <option value="hosting">Web Hosting</option>
                  <option value="smm">Social Media Marketing</option>
                </select>
              </div>
            )}

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors resize-none ${
                  errors.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
                }`}
                placeholder="Enter your message"
              ></textarea>
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
            </div>

            {submitError && (
              <div className="p-4 bg-red-50 text-red-700 rounded-lg" role="alert" aria-live="polite">
                {submitError}
              </div>
            )}

            <Button
              type="submit"
              className="w-full py-3 text-base relative"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting && (
                <span className="absolute left-4 flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </span>
              )}
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </CardContent>
        </form>
      )}
    </Card>
  );
};