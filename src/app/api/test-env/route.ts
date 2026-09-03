import { NextResponse } from 'next/server';

export async function GET() {
  const resendApiKey = process.env.RESEND_API_KEY;
  
  return NextResponse.json({
    resendApiKeyPresent: !!resendApiKey,
    resendApiKeyLength: resendApiKey?.length || 0,
    resendApiKeyPrefix: resendApiKey ? resendApiKey.substring(0, 7) + '...' : 'none',
    timestamp: new Date().toISOString(),
  });
}
