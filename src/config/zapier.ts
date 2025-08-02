export const zapierWebhookConfig = {
  url: process.env.ZAPIER_WEBHOOK_URL || '',
  headers: {
    'Content-Type': 'application/json',
   
  },
};
