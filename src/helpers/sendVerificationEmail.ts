import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev", // Use your verified domain in production
      to: email,
      subject: "Anonymous Feedback Verification Code",
      react: VerificationEmail({ BASE_URL, username, otp: verifyCode }),
    });

    if (error) {
      console.error("Resend API error:", error);
      return { success: false, message: error.message || "Failed to send verification email" };
    }

    console.log("Email sent successfully via Resend! ID:", data?.id);
    return { success: true, message: "Verification email sent successfully" };

  } catch (emailError) {
    console.error("Error sending verification email:", emailError);
    
    if (emailError instanceof Error) {
      return { success: false, message: emailError.message };
    }
    
    return { success: false, message: "Failed to send verification email" };
  }
}
