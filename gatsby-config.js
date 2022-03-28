const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

module.exports = {
    siteMetadata: {
        title: `HTAFC Stats site`,
        siteUrl: `https://www.yourdomain.tld`,
        description: 'Stats',
    },
    plugins: [
        'gatsby-plugin-postcss',
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: 'gatsby-source-sanity',
            options: {
                projectId: '836o25zq',
                dataset: 'production',
                watchMode: true,
                token: process.env.SANITY_TOKEN,
            },
        },
    ],
};
