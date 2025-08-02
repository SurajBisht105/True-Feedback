export const getVerificationEmailHTML = (username: string, verifyCode: string): string => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Verify Your Email</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .container {
            background-color: #f4f4f4;
            padding: 30px;
            border-radius: 10px;
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
          }
          .code-box {
            background-color: #007bff;
            color: white;
            font-size: 32px;
            font-weight: bold;
            text-align: center;
            padding: 20px;
            border-radius: 5px;
            letter-spacing: 5px;
            margin: 20px 0;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            font-size: 12px;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Email Verification</h1>
          </div>
          <p>Hello ${username},</p>
          <p>Thank you for registering with Anonymous Feedback. Please use the verification code below to complete your registration:</p>
          <div class="code-box">${verifyCode}</div>
          <p>This code will expire in 10 minutes.</p>
          <p>If you didn't request this verification, please ignore this email.</p>
          <div class="footer">
            <p>&copy; 2024 Anonymous Feedback. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;
};
