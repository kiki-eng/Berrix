import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, phone, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Get your email from environment variable
    const recipientEmail = process.env.CONSULTATION_EMAIL || "your-email@example.com";
    
    // Log configuration (for debugging - remove sensitive data in production)
    console.log("Email configuration:", {
      hasResendKey: !!process.env.RESEND_API_KEY,
      recipientEmail: recipientEmail,
      fromEmail: process.env.RESEND_FROM_EMAIL || "Berrix <onboarding@resend.dev>",
    });
    
    // Email subject
    const subject = `New Consultation Request from ${name} - ${company || "No Company"}`;

    // Email body (HTML format)
    const emailBody = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #22c55e 0%, #10b981 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #10b981; }
            .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 3px solid #22c55e; }
            .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Consultation Request</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Company:</div>
                <div class="value">${company || "Not provided"}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${phone || "Not provided"}</div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${message.replace(/\n/g, "<br>")}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the Berrix Software Solutions consultation form.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Using Resend API (recommended)
    if (process.env.RESEND_API_KEY) {
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || "Berrix <onboarding@resend.dev>",
          to: recipientEmail,
          replyTo: email,
          subject: subject,
          html: emailBody,
        }),
      });

      const resendData = await resendResponse.json();

      if (!resendResponse.ok) {
        console.error("Resend API error:", {
          status: resendResponse.status,
          statusText: resendResponse.statusText,
          error: resendData,
          recipientEmail: recipientEmail,
          fromEmail: process.env.RESEND_FROM_EMAIL,
        });
        throw new Error(`Failed to send email via Resend: ${JSON.stringify(resendData)}`);
      }

      console.log("Email sent successfully:", {
        emailId: resendData.id,
        to: recipientEmail,
        from: process.env.RESEND_FROM_EMAIL,
      });

      return NextResponse.json(
        { message: "Consultation request submitted successfully" },
        { status: 200 }
      );
    }

    // Fallback: Using Nodemailer (if you prefer)
    // You'll need to install nodemailer: npm install nodemailer
    // Uncomment and configure this section if not using Resend

    // For now, log the data (you'll receive emails once you set up Resend)
    console.log("Consultation Request:", {
      name,
      company,
      phone,
      email,
      message,
    });

    return NextResponse.json(
      { message: "Consultation request received (email setup required)" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing consultation request:", error);
    return NextResponse.json(
      { error: "Failed to process consultation request" },
      { status: 500 }
    );
  }
}

