#!/usr/bin/env python3
"""
Prompt Quest Development Server
A simple HTTP server for local development
"""

import http.server
import socketserver
import webbrowser
import threading
import time
import os
import socket

PORT = 8000
MAX_PORT_ATTEMPTS = 10

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def is_port_available(port):
    """Check if a port is available"""
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            s.bind(('', port))
            return True
    except OSError:
        return False

def find_available_port(start_port):
    """Find the next available port starting from start_port"""
    for port in range(start_port, start_port + MAX_PORT_ATTEMPTS):
        if is_port_available(port):
            return port
    return None

def start_server():
    """Start the HTTP server"""
    port = find_available_port(PORT)

    if port is None:
        print(f"❌ Could not find an available port between {PORT} and {PORT + MAX_PORT_ATTEMPTS - 1}")
        return None

    if port != PORT:
        print(f"⚠️  Port {PORT} is busy, using port {port} instead")

    with socketserver.TCPServer(("", port), MyHTTPRequestHandler) as httpd:
        print(f"🚀 Development server running at http://localhost:{port}")
        print(f"📁 Serving files from: {os.getcwd()}")
        print("📝 Press Ctrl+C to stop the server")
        httpd.serve_forever()

    return port

def open_browser():
    """Open browser after a short delay"""
    time.sleep(1.5)
    port = find_available_port(PORT)
    if port:
        webbrowser.open(f'http://localhost:{port}')

if __name__ == "__main__":
    # Change to the script directory
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    # Start browser in a separate thread
    browser_thread = threading.Thread(target=open_browser)
    browser_thread.daemon = True
    browser_thread.start()
    
    try:
        start_server()
    except KeyboardInterrupt:
        print("\n🛑 Server stopped by user")
    except Exception as e:
        print(f"❌ Error starting server: {e}")