import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    const response = await resend.emails.send({
      from: "Mystery Message <noreply@surajbisht.me>",
      to: email,
      subject: "🔐 Mystery Message - Verification Code",
      react: VerificationEmail({ username, verifyCode }), // React component!
    });

    // Type-safe runtime check: ensure response contains an id (success case)
    if (!("id" in response) || !response.id) {
      return { success: false, message: "Failed to send verification email." };
    }

    return { success: true, message: "Verification email sent successfully." };
  } catch (emailError: any) {
    return { success: false, message: "Failed to send verification email." };
  }
}
