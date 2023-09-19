/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    }
    // , compiler: {
    //   jsx: {
    //     target: "es5"
    //   }
    // }
    , typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
}

module.exports = nextConfig
