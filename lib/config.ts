const DISCORD_CLIENT_ID = '1533481148410495256';
export const siteConfig = {
  name: 'Ember',
  description: 'A modern Discord moderation and utility bot.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://emberbot.dev',
  inviteUrl: `https://discord.com/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&scope=bot%20applications.commands`,
  dashboardUrl: 'https://dash.emberbot.dev',
  statusUrl: 'https://status.emberbot.dev',
  supportUrl: 'mailto:support@emberbot.dev',
};
export const placeholderStats = { servers: '1,234', users: '123,456', uptime: '99.9%', responseTime: '120ms', commands: '50+' };
// Placeholder pricing: replace the £X values once plans are finalised.
export const pricingPlans = [
  { name: 'Free', price: '£0', description: 'For smaller communities getting started with Ember.', featured: false },
  { name: 'Pro', price: '£X', description: 'For communities that need additional functionality and customisation.', featured: true },
  { name: 'Unlimited', price: '£X', description: 'For larger communities requiring the highest limits.', featured: false },
];
