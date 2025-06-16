# True-Feedback

An application that allows users to receive anonymous feedback and messages from anyone using a unique URL. The platform employs **Open AI** to suggest relevant messages and feedback based on user input. Built with **Next.js** and **MongoDB**, this project also ensures user security with email OTP verification, password encryption, and user login through **NextAuth**.

---

## Features

- **Anonymous Feedback**: Users can receive feedback or messages anonymously via a unique, shareable URL.
- **Open AI Suggestions**: The app uses **Open AI** to intelligently suggest relevant feedback based on user interaction.
- **Secure Login**: Users can securely log in using their credentials, which are verified through **NextAuth**.
- **Email OTP Verification**: Upon registration, users verify their email via OTP for added security.
- **Password Encryption**: Passwords are securely encrypted to protect user data.
- **MongoDB Integration**: The project uses MongoDB to store user and feedback data.
- **Unique User URL**: After registration and verification, users receive a unique URL they can share publicly to allow others to send them feedback.

---

## Tech Stack

- **Frontend**: Next.js
- **Backend**: Node.js
- **Database**: MongoDB
- **Authentication**: NextAuth.js
- **AI**: Open AI

---

## Setup Instructions

### 1. Clone the repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/SurajBisht105/true-feedback.git
cd true-feedback
```

### 2. Install dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

### 3. Set up environment variables

You’ll need to set up a `.env.local` file with the following variables:

```bash
NEXT_PUBLIC_MONGODB_URI=<Your MongoDB URI>
NEXTAUTH_SECRET=<Your NextAuth Secret>
NEXTAUTH_URL=http://localhost:3000
RESEND_API_KEY=<Your Resend API Key>
OPENAI_API_KEY=<Your OpenAi API Key>
```

Replace `<Your MongoDB URI>`,`<Your OpenAi API Key>`, `<Your NextAuth Secret>`, and `<Your Resend API Key>` with your actual values.

### 4. Run the application

After setting up the environment variables, you can start the development server:

```bash
npm run dev
```

The application should now be live at `http://localhost:3000`.

---

## How to Use

1. **Registration & Login**: Users must first register with an email and password. After registration, they will receive an OTP via email for verification. Once verified, they can log in with their credentials.
2. **Get Your Unique URL**: Upon successful login and verification, each user is assigned a unique URL. This URL can be shared publicly so that anyone can send them anonymous feedback.
3. **Receiving Feedback**: Once a user shares their unique URL, others can send messages or feedback through it. Gemini AI suggests relevant responses for better user engagement.

---

## Future Features

- **Better UI/UX**: We plan to improve the user interface and experience for easier navigation and a more engaging design.
- **Group Feature**: A feature to allow users to share feedback in a group setting will be added in the future.

---

## Acknowledgments

- **Resend Email Service**: For the email OTP functionality.
- **ShadCN**: For UI component library used.
- **Next.js**: For the framework and API routes.
