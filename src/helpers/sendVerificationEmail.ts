// import { resend } from "@/lib/resend";
import { webhookConfig } from "@/config/zapier";
// import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";
import { getVerificationEmailHTML } from "@/templates/verificationEmailTemplate";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  // try {
  //   // Try Resend first
  //   await resend.emails.send({
  //     from: "onboarding@resend.dev",
  //     to: email,
  //     subject: "Anonymous Feedback Verification Code",
  //     react: VerificationEmail({ username, otp: verifyCode }),
  //   });

  //   console.log("Email sent successfully via Resend!");
  //   return { success: true, message: "Verification email sent successfully" };
  // } catch (resendError) {
  //   console.error("Resend email failed, trying Zapier webhook...", resendError);
  // return { success: false, message: "Failed to send verification email" };

    try {
      // Fallback to Zapier webhook
      const emailHTML = getVerificationEmailHTML(username, verifyCode);
      
      const response = await fetch(webhookConfig.url, {
        method: "POST",
        headers: webhookConfig.headers,
        body: JSON.stringify({
          to: email,
          subject: "Anonymous Feedback Verification Code",
          username,
          verifyCode,
          htmlBody: emailHTML,
          // You can also send plain text version
          textBody: `Hello ${username}, Your verification code is: ${verifyCode}. This code will expire in 10 minutes.`,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Zapier webhook failed: ${response.status} - ${errorText}`);
      }

      const result = await response.json();
      console.log("Email sent successfully via Zapier!", result);
      
      return { success: true, message: "Verification email sent successfully" };
    } catch (zapierError) {
      console.error("Both email services failed", zapierError);
      return { success: false, message: "Failed to send verification email" };
    }
  }
// }
