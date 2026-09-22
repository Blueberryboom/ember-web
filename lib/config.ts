const clientId = process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID || 'YOUR_BOT_ID';
export const siteConfig = {
  name: 'Ember',
  description: 'A modern Discord moderation and utility bot.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://emberbot.dev',
  inviteUrl: `https://discord.com/oauth2/authorize?client_id=${clientId}&scope=bot%20applications.commands`,
  dashboardUrl: 'https://dash.emberbot.dev',
  githubUrl: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/emberbot',
  supportUrl: 'mailto:support@emberbot.dev',
};
export const placeholderStats = { servers: '1,234', users: '123,456', uptime: '99.9%', responseTime: '120ms' };
// Placeholder pricing: replace the £X values once plans are finalised.
export const pricingPlans = [
  { name: 'Free', price: '£0', description: 'For smaller communities getting started with Ember.', featured: false },
  { name: 'Pro', price: '£X', description: 'For communities that need additional functionality and customisation.', featured: true },
  { name: 'Unlimited', price: '£X', description: 'For larger communities requiring the highest limits.', featured: false },
];
