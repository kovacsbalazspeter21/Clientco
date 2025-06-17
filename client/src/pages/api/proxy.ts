import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy from 'http-proxy';

const API_URL = process.env.BACKEND_URL || 'http://localhost:8000';

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

const proxy = httpProxy.createProxyServer();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  proxy.web(req, res, { target: API_URL, changeOrigin: true });
}