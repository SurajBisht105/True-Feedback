import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
} from "@react-email/components";

interface VerificationEmailProps {
  username: string;
  verifyCode: string;
}

export default function VerificationEmail({
  username,
  verifyCode,
}: VerificationEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: "#f6f9fc", fontFamily: "sans-serif" }}>
        <Container style={{ padding: "40px", maxWidth: "600px" }}>
          <Section
            style={{
              backgroundColor: "#ffffff",
              padding: "30px",
              borderRadius: "8px",
            }}
          >
            <Heading style={{ color: "#333" }}>🔐 Verify Your Email</Heading>
            <Text style={{ fontSize: "16px", color: "#555" }}>
              Hello {username}!
            </Text>
            <Text style={{ fontSize: "16px", color: "#555" }}>
              Your verification code is:
            </Text>
            <Text
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                color: "#007bff",
                letterSpacing: "4px",
                textAlign: "center",
                padding: "20px",
                backgroundColor: "#f0f7ff",
                borderRadius: "8px",
              }}
            >
              {verifyCode}
            </Text>
            <Text style={{ fontSize: "14px", color: "#888" }}>
              This code expires in 10 minutes.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
