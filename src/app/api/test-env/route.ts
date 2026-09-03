import { NextResponse } from 'next/server';

export async function GET() {
  const resendApiKey = process.env.RESEND_API_KEY;
  
  let keyPrefix = 'none';
  let keyFormat = 'invalid';
  
  if (resendApiKey) {
    const trimmed = resendApiKey.trim();
    keyPrefix = trimmed.substring(0, 7) + '...';
    keyFormat = trimmed.startsWith('re_') ? 'valid' : 'invalid (should start with re_)';
  }
  
  return NextResponse.json({
    resendApiKeyPresent: !!resendApiKey,
    resendApiKeyLength: resendApiKey?.length || 0,
    resendApiKeyPrefix: keyPrefix,
    resendApiKeyFormat: keyFormat,
    timestamp: new Date().toISOString(),
  });
}
