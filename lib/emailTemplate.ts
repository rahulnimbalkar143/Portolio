interface EmailParams {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function generateContactEmailHtml({
  name,
  email,
  subject,
  message,
}: EmailParams): string {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject || "New Portfolio Inquiry");
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");
  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "short",
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${safeSubject}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0b1120; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f1f5f9;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #0b1120; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #0f172a; border: 1px solid #1e293b; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);">
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #2563eb, #06b6d4); padding: 28px 32px; text-align: left;">
              <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 700; letter-spacing: -0.5px;">
                🚀 New Contact Inquiry
              </h1>
              <p style="margin: 6px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 13px;">
                Received from your portfolio website
              </p>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 32px;">
              <!-- Sender Details Card -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #1e293b; border-radius: 12px; margin-bottom: 24px; border: 1px solid #334155;">
                <tr>
                  <td style="padding: 18px 20px;">
                    <p style="margin: 0 0 8px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.8px; color: #94a3b8; font-weight: 700;">
                      Sender Information
                    </p>
                    <p style="margin: 0 0 6px 0; font-size: 15px; color: #ffffff; font-weight: 600;">
                      👤 Name: <span style="font-weight: 400; color: #f1f5f9;">${safeName}</span>
                    </p>
                    <p style="margin: 0 0 6px 0; font-size: 15px; color: #ffffff; font-weight: 600;">
                      ✉️ Email: <a href="mailto:${safeEmail}" style="color: #38bdf8; text-decoration: none; font-weight: 500;">${safeEmail}</a>
                    </p>
                    ${
                      subject
                        ? `<p style="margin: 0; font-size: 15px; color: #ffffff; font-weight: 600;">
                            📋 Subject: <span style="font-weight: 400; color: #e2e8f0;">${safeSubject}</span>
                           </p>`
                        : ""
                    }
                  </td>
                </tr>
              </table>

              <!-- Message Content -->
              <div style="margin-bottom: 24px;">
                <p style="margin: 0 0 8px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.8px; color: #94a3b8; font-weight: 700;">
                  Message Body
                </p>
                <div style="background-color: #0b1120; border: 1px solid #1e293b; border-left: 4px solid #06b6d4; border-radius: 8px; padding: 18px 20px; font-size: 14px; line-height: 1.6; color: #e2e8f0;">
                  ${safeMessage}
                </div>
              </div>

              <!-- Quick Reply Button -->
              <div style="text-align: center; margin: 28px 0 16px 0;">
                <a href="mailto:${safeEmail}?subject=Re: ${encodeURIComponent(safeSubject)}" style="display: inline-block; background: linear-gradient(135deg, #2563eb, #06b6d4); color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 8px; font-size: 14px; font-weight: 600;">
                  Reply Directly to ${safeName}
                </a>
              </div>

              <hr style="border: none; border-top: 1px solid #1e293b; margin: 24px 0 16px 0;" />

              <p style="margin: 0; font-size: 11px; color: #64748b; text-align: center;">
                Received on ${timestamp} (IST) • Delivered securely via Resend
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
