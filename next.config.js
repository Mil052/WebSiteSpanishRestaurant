/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        unoptimized: true,
    },
    // Static export for GitHub Pages:
    // images: {
    //     loader: 'custom',
    //     loaderFile: './gitHubPagesImageLoader.js',
    // },

    // output: 'export',
    // distDir: 'docs',
    // basePath: '/WebSiteSpanishRestaurant'
}

module.exports = nextConfig