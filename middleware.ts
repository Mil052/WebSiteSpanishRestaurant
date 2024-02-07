import { NextResponse, NextRequest } from 'next/server';

const validUser = process.env.BASIC_AUTH_USER;
const validPassword = process.env.BASIC_AUTH_PASSWORD;

// Step 1. HTTP Basic Auth Middleware for Challenge
export function middleware(req: NextRequest) {
  if (!isAuthenticated(req)) {
    return new NextResponse('Authentication required', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic' },
    });
  }

  return NextResponse.next();
}

// Step 2. Check HTTP Basic Auth header if present
function isAuthenticated(req: NextRequest) {
  const authHeader = req.headers.get('authorization') || req.headers.get('Authorization');

  if (!authHeader) {
    return false;
  }

  const authCredentials = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
  const user = authCredentials[0];
  const password = authCredentials[1];

  if (user == validUser && password == validPassword) {
    return true;
  } else {
    return false;
  }
}

// Step 3. Configure "Matching Paths" below to protect routes with HTTP Basic Auth
export const config = {
  matcher: ['/admin', '/api/events']
};

