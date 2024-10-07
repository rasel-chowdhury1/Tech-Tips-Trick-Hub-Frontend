import { jwtDecode } from "jwt-decode";

export const verifyToken = (token: string) => {
  return jwtDecode(token);
};

interface DecodedToken {
  email: string;
  role: string;
  id: string;
  status: string;
  iat: number;
  exp: number;
}

export const isTokenExpired = (token: string): boolean => {
  try {
    const decodedToken = jwtDecode<DecodedToken>(token);
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
    return decodedToken.exp < currentTime;
  } catch (error) {
    // If there's an error decoding the token, consider it expired
    console.error("Invalid token:", error);
    return true;
  }
};
