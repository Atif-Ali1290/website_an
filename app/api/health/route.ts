import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // In a real application, you might check database connectivity,
    // external service availability, etc.
    // For this example, we'll just return a simple health status
    
    const healthStatus = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      version: '1.0.0',
      uptime: process.uptime ? process.uptime() : 'N/A'
    };

    return NextResponse.json(healthStatus);
  } catch (error) {
    console.error('Health check error:', error);
    
    return NextResponse.json(
      { 
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: 'Health check failed'
      },
      { status: 500 }
    );
  }
}