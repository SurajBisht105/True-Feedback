export interface WebhookConfig {
  url: string;
  headers: Record<string, string>;
}

export interface ZapierEmailPayload {
  email: string;
  username: string;
  verifyCode: string;
  subject?: string;
  template?: string;
}

export const webhookConfig: WebhookConfig = {
  url: process.env.ZAPIER_WEBHOOK_URL || '',
  headers: {
    'Content-Type': 'application/json',
  },
};

