/** @type {import('next').NextConfig} */
//https://stackoverflow.com/questions/66137368/next-js-environment-variables-are-undefined-next-js-10-0-5
const nextConfig = {
  env: {
    app_id: process.env.app_id,
    key: process.env.key,
    secret: process.env.secret,
    cluster: process.env.cluster,
  }
}

module.exports = nextConfig;
