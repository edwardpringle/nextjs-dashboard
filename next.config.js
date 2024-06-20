const { config } = require('dotenv');

/** @type {import('next').NextConfig} */
const nextConfig = { path: `${process.env.ENVIRONMENT}`};

module.exports = nextConfig;