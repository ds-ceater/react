/** @type {import('next').NextConfig} */

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const __dirname = new URL(import.meta.url).pathname;
const path = require('path')

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
};




export default nextConfig;
