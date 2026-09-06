"use server";

import { Resend } from 'resend';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export async function sendContactEmailAction(formData: ContactFormData) {
  console.log('[CONTACT EMAIL] Server action called');
  console.log('[CONTACT EMAIL] Name:', formData.name);
  console.log('[CONTACT EMAIL] Email:', formData.email);
  console.log('[CONTACT EMAIL] Subject:', formData.subject);
  
  try {
    const apiKey = process.env.RESEND_API_KEY;
    
    console.log('[CONTACT EMAIL] RESEND_API_KEY present:', !!apiKey);
    console.log('[CONTACT EMAIL] RESEND_API_KEY length:', apiKey?.length || 0);
    
    if (!apiKey) {
      console.error('[CONTACT EMAIL] ERROR: RESEND_API_KEY is not configured');
      return { 
        success: false, 
        error: 'Email service is not configured. Please contact support.' 
      };
    }

    console.log('[CONTACT EMAIL] Initializing Resend client...');
    const resend = new Resend(apiKey);

    const subjectLabels: Record<string, string> = {
      'product-inquiry': 'Product Inquiry',
      'order': 'Place an Order',
      'delivery': 'Delivery Information',
      'support': 'Technical Support',
      'other': 'Other'
    };

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #063B78; color: white; padding: 20px; text-align: center; }
          .header h1 { margin: 0; }
          .content { padding: 20px; background: #f9fafb; }
          .section { margin-bottom: 20px; }
          .section h2 { color: #063B78; border-bottom: 2px solid #063B78; padding-bottom: 10px; margin-top: 0; }
          .field { margin-bottom: 10px; }
          .label { font-weight: bold; color: #063B78; }
          .value { color: #333; }
          .message-box { background: white; padding: 15px; border-left: 4px solid #063B78; margin-top: 15px; }
          .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Form Submission - TopTank Kenya</h1>
          </div>
          <div class="content">
            <div class="section">
              <h2>Contact Information</h2>
              <div class="field">
                <span class="label">Name:</span>
                <span class="value"> ${formData.name}</span>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <span class="value"> ${formData.email}</span>
              </div>
              <div class="field">
                <span class="label">Phone:</span>
                <span class="value"> ${formData.phone}</span>
              </div>
              <div class="field">
                <span class="label">Subject:</span>
                <span class="value"> ${subjectLabels[formData.subject] || formData.subject}</span>
              </div>
            </div>

            <div class="section">
              <h2>Message</h2>
              <div class="message-box">
                ${formData.message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
          <div class="footer">
            <p>This message was sent via TopTank Kenya website contact form</p>
            <p>Contact: +254 100 198 769</p>
            <p>Email: toptank662@gmail.com</p>
          </div>
        </div>
      </body>
      </html>
    `;

    console.log('[CONTACT EMAIL] HTML email generated, length:', html.length);
    console.log('[CONTACT EMAIL] Sending email to: toptank662@gmail.com');
    console.log('[CONTACT EMAIL] From: onboarding@resend.dev');
    console.log('[CONTACT EMAIL] Subject: New Contact Form - ' + formData.name);
    
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'toptank662@gmail.com',
      subject: `New Contact Form - ${formData.name} - ${subjectLabels[formData.subject] || formData.subject}`,
      html: html,
    });

    console.log('[CONTACT EMAIL] Resend response received');
    console.log('[CONTACT EMAIL] Error present:', !!error);
    console.log('[CONTACT EMAIL] Data present:', !!data);
    
    if (error) {
      console.error('[CONTACT EMAIL] ERROR sending email:', JSON.stringify(error, null, 2));
      return { success: false, error: error.message || 'Failed to send email' };
    }

    console.log('[CONTACT EMAIL] SUCCESS: Email sent with ID:', data?.id);
    console.log('[CONTACT EMAIL] Email delivered to: toptank662@gmail.com');
    
    return { success: true, data };
  } catch (error) {
    console.error('[CONTACT EMAIL] CATCH ERROR:', error);
    console.error('[CONTACT EMAIL] Error details:', error instanceof Error ? error.message : String(error));
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An unexpected error occurred' 
    };
  }
}
