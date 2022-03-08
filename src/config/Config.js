const API_SERVER_URL = process.env.REACT_APP_API_SERVER_URL;
const TIMEOUT = process.env.REACT_APP_API_TIMEOUT;

if (!API_SERVER_URL) {
  throw new Error(
    ".env is missing the definitions for REACT_APP_API_SERVER_URL environment variable"
  );
}

if (!TIMEOUT) {
  throw new Error(
    ".env is missing the definitions for REACT_APP_API_TIMEOUT environment variable"
  );
}

export { API_SERVER_URL, TIMEOUT };
