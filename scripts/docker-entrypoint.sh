#!/bin/sh
set -e

echo "Starting Next.js..."
node_modules/.bin/next start &

echo "Starting Nginx..."
exec nginx -g "daemon off;"
