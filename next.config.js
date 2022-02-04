const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

/** @type {import('next').NextConfig} */
const nextConfig = (phase, { defaultConfig }) => {
  return {
    basePath: phase === PHASE_DEVELOPMENT_SERVER ? '' : '/blog',
    serverRuntimeConfig: {
      // Will only be available on the server side
      mySecret: 'secret',
      secondSecret: process.env.SECOND_SECRET, // Pass through env variables
    },
    publicRuntimeConfig: {
      rootFolder: phase === PHASE_DEVELOPMENT_SERVER ? '' : '/blog', // Will be available on both server and client
    },
  }
}

module.exports = nextConfig;
