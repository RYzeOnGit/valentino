#!/bin/bash

# Simple development server for Valentine's website
# Opens in browser automatically

PORT=8000

echo "🐱💕 Starting Valentine's dev server..."
echo "📱 Optimized for iPhone 16"
echo ""
echo "Server running at: http://localhost:$PORT"
echo "Press Ctrl+C to stop"
echo ""

# Start Python HTTP server
python3 -m http.server $PORT

