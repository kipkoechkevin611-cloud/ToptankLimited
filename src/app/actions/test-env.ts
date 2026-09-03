"use server";

export async function testEnvironmentVariables() {
  const resendApiKey = process.env.RESEND_API_KEY;
  
  return {
    resendApiKeyPresent: !!resendApiKey,
    resendApiKeyLength: resendApiKey?.length || 0,
    resendApiKeyPrefix: resendApiKey ? resendApiKey.substring(0, 7) : 'none',
  };
}
