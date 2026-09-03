import { Resend } from 'resend';

let resend: Resend | null = null;

function getResendClient() {
  if (!resend) {
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      resend = new Resend(apiKey);
    }
  }
  return resend;
}

export interface OrderEmailData {
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  customerEmail?: string;
  items: Array<{
    name: string;
    capacity?: number;
    color?: string;
    price: number;
    quantity: number;
  }>;
  totalAmount: number;
}

export async function sendOrderEmail(orderData: OrderEmailData) {
  try {
    const client = getResendClient();
    if (!client) {
      console.warn('Resend clientNot initialized - email sending skipped');
      return { success: false, error: 'Resend client not initialized' };
    }

    const { customerName, customerPhone, customerAddress, customerEmail, items, totalAmount } = orderData;

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
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #063B78; color: white; padding: 20px; text-align: center; }
          .header h1 { margin: 0; }
          .content { padding: 20px; background: #f9fafb; }
          .section { margin-bottom: 20px; }
          .section h2 { color: #063B78; border-bottom: 2px solid #063B78; padding-bottom: 10px; margin-top: 0; }
          table { width: 100%; border-collapse: collapse; margin-top: 10px; }
          th { background: #063B78; color: white; padding: 12px; text-align: left; }
          th:last-child, td:last-child { text-align: right; }
          th:nth-child(3), td:nth-child(3) { text-align: center; }
          .total { text-align: right; font-size: 18px; font-weight: bold; color: #063B78; margin-top: 20px; }
          .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Order - TopTank Kenya</h1>
          </div>
          <div class="content">
            <div class="section">
              <h2>Customer Information</h2>
              <p><strong>Name:</strong> ${customerName}</p>
              <p><strong>Phone:</strong> ${customerPhone}</p>
              <p><strong>Address:</strong> ${customerAddress}</p>
              ${customerEmail ? `<p><strong>Email:</strong> ${customerEmail}</p>` : ''}
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
              <div class="total">
                Total: KSh ${totalAmount.toLocaleString()}
              </div>
            </div>
          </div>
          <div class="footer">
            <p>This order was placed via TopTank Kenya website</p>
            <p>Contact: +254731957540</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const { data, error } = await client.emails.send({
      from: 'onboarding@resend.dev',
      to: 'toptank662@gmail.com',
      subject: `New Order from ${customerName} - TopTank Kenya`,
      html: html,
    });

    if (error) {
      console.error('Error sending email:', error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error in sendOrderEmail:', error);
    return { success: false, error };
  }
}
