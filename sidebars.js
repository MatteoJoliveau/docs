module.exports = {
  someSidebar: {
    "Welcome": ['introduction'],
    "Get Started": ['register-account', 'add-website',
                    {
        type: 'category',
        label: 'How to add the script to your website',
        items: ['plausible-script', 'javascript-snippet', 'wordpress-integration', 'squarespace-integration', 'wix-integration', 'docusaurus-integration', 'spa-support', 'hash-based-routing'],
      },
                   'verify-integration'],
    "Website Settings": ['website-settings', 'general', 'visibility', 'shared-links', 'goal-conversions', 'google-search-console-integration', 'email-reports', 'custom-domain', 'export-stats', 'reset-site-data', 'delete-site-data', 'excluding'],
    "Dashboard": ['guided-tour',
    {
        type: 'category',
        label: 'Top Sources',
        items: ['top-referrers', 'manual-link-tagging', 'twitter'],
      },
                  'top-pages', 'countries', 'devices', 'metrics-definitions'],
    "Goal Conversions": ['pageview-goals', 'custom-event-goals'],
    "Account Settings": ['trial-to-paid', 'change-email', 'reset-password', 'change-plan', 'cancel-subscription', 'delete-account'],
    "Self-hosting": ['self-hosting', 'self-hosting-configuration'],
    "Contribute": ['contribute', 'community-integrations', 'plausible-analytics-reviews', 'plausible-analytics-self-hosted-guides', 'authors'],
  },
};
