"use server";

import { Resend } from 'resend';
import { revalidatePath } from 'next/cache';

export interface OrderEmailData {
  orderNumber: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  county: string;
  town: string;
  deliveryAddress: string;
  additionalInstructions?: string;
  items: Array<{
    name: string;
    capacity?: number;
    color?: string;
    price: number;
    quantity: number;
  }>;
  subtotal: number;
  deliveryFee: number;
  totalAmount: number;
  paymentMethod?: string;
  paymentStatus?: string;
}

export async function sendOrderEmailAction(orderData: OrderEmailData) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return { 
        success: false, 
        error: 'Email service is not configured. Please contact support.' 
      };
    }

    const resend = new Resend(apiKey);

    const {
      orderNumber,
      customerName,
      customerPhone,
      customerEmail,
      county,
      town,
      deliveryAddress,
      additionalInstructions,
      items,
      subtotal,
      deliveryFee,
      totalAmount,
      paymentMethod = 'Pending',
      paymentStatus = 'Pending',
    } = orderData;

    // Generate order date/time
    const orderDate = new Date().toLocaleString('en-KE', {
      timeZone: 'Africa/Nairobi',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    // Generate items list HTML
    const itemsHtml = items.map(item => `
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">
          ${item.name}
          ${item.capacity ? `<br><small style="color: #6b7280;">${item.capacity.toLocaleString()}L</small>` : ''}
          ${item.color ? `<br><small style="color: #6b7280;">Color: ${item.color}</small>` : ''}
        </td>
        <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: center;">${item.quantity}</td>
        <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right;">KSh ${item.price.toLocaleString()}</td>
        <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right; font-weight: bold;">KSh ${(item.price * item.quantity).toLocaleString()}</td>
      </tr>
    `).join('');

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #063B78; color: white; padding: 30px 20px; text-align: center; }
          .header h1 { margin: 0; font-size: 24px; }
          .header .order-number { font-size: 18px; margin-top: 10px; opacity: 0.9; }
          .content { padding: 20px; background: #f9fafb; }
          .section { margin-bottom: 24px; padding: 20px; background: white; border-radius: 8px; border: 1px solid #e5e7eb; }
          .section h2 { color: #063B78; border-bottom: 2px solid #063B78; padding-bottom: 10px; margin-top: 0; font-size: 18px; }
          .info-row { display: flex; margin-bottom: 8px; }
          .info-label { font-weight: bold; color: #374151; min-width: 120px; }
          .info-value { color: #6b7280; }
          table { width: 100%; border-collapse: collapse; margin-top: 10px; }
          th { background: #063B78; color: white; padding: 12px; text-align: left; font-size: 14px; }
          td { padding: 12px; border-bottom: 1px solid #e5e7eb; }
          th:last-child, td:last-child { text-align: right; }
          th:nth-child(3), td:nth-child(3) { text-align: center; }
          .total-row { display: flex; justify-content: space-between; padding: 12px 0; border-top: 2px solid #063B78; margin-top: 10px; }
          .total-label { font-size: 18px; font-weight: bold; color: #063B78; }
          .total-amount { font-size: 18px; font-weight: bold; color: #063B78; }
          .payment-status { display: inline-block; padding: 4px 12px; border-radius: 4px; font-size: 12px; font-weight: bold; }
          .payment-pending { background: #fef3c7; color: #92400e; }
          .payment-paid { background: #d1fae5; color: #065f46; }
          .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; background: #f9fafb; }
          .notes { background: #fffbeb; border-left: 4px solid #f59e0b; padding: 12px; margin-top: 10px; }
          @media only screen and (max-width: 600px) {
            .container { padding: 10px; }
            .section { padding: 15px; }
            .info-row { flex-direction: column; }
            .info-label { min-width: auto; margin-bottom: 4px; }
            table { font-size: 12px; }
            th, td { padding: 8px 4px; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New TopTank Order</h1>
            <div class="order-number">#${orderNumber}</div>
          </div>
          <div class="content">
            <div class="section">
              <h2>Order Details</h2>
              <div class="info-row">
                <span class="info-label">Order Number:</span>
                <span class="info-value">#${orderNumber}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Date & Time:</span>
                <span class="info-value">${orderDate}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Payment Method:</span>
                <span class="info-value">${paymentMethod}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Payment Status:</span>
                <span class="info-value">
                  <span class="payment-status ${paymentStatus === 'Paid' ? 'payment-paid' : 'payment-pending'}">${paymentStatus}</span>
                </span>
              </div>
            </div>

            <div class="section">
              <h2>Customer Information</h2>
              <div class="info-row">
                <span class="info-label">Name:</span>
                <span class="info-value">${customerName}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Phone:</span>
                <span class="info-value">${customerPhone}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Email:</span>
                <span class="info-value">${customerEmail}</span>
              </div>
              <div class="info-row">
                <span class="info-label">County:</span>
                <span class="info-value">${county}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Town/Area:</span>
                <span class="info-value">${town}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Delivery Address:</span>
                <span class="info-value">${deliveryAddress}</span>
              </div>
              ${additionalInstructions ? `
              <div class="notes">
                <strong>Customer Notes:</strong><br>
                ${additionalInstructions}
              </div>
              ` : ''}
            </div>

            <div class="section">
              <h2>Order Items</h2>
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  ${itemsHtml}
                </tbody>
              </table>
              <div class="total-row">
                <span class="total-label">Subtotal:</span>
                <span class="total-amount">KSh ${subtotal.toLocaleString()}</span>
              </div>
              <div class="total-row" style="border-top: none; margin-top: 0;">
                <span class="total-label" style="font-size: 16px;">Delivery Fee:</span>
                <span class="total-amount" style="font-size: 16px;">${deliveryFee === 0 ? 'FREE' : `KSh ${deliveryFee.toLocaleString()}`}</span>
              </div>
              <div class="total-row">
                <span class="total-label">Total:</span>
                <span class="total-amount">KSh ${totalAmount.toLocaleString()}</span>
              </div>
            </div>
          </div>
          <div class="footer">
            <p>This order was placed via TopTank Kenya website</p>
            <p>Contact: +254 731 957 540</p>
            <p>Email: toptank662@gmail.com</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'toptank662@gmail.com',
      subject: `New TopTank Order — #${orderNumber}`,
      html: html,
    });

    if (error) {
      console.error('Error sending email:', error);
      return { success: false, error: error.message || 'Failed to send email' };
    }

    revalidatePath('/checkout');
    
    return { 
      success: true, 
      data,
      orderNumber 
    };
  } catch (error) {
    console.error('Error in sendOrderEmailAction:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An unexpected error occurred' 
    };
  }
}
