import { SignJWT } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const body = await request.json();
  const secret = new TextEncoder().encode(process.env.jwt_secret);
  const alg = "HS256";

  const jwt = await new SignJWT(body)
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(secret);

  // Set jwt in the cookie
  cookies().set({
    name: "jwt-token",
    value: `Bearer ${jwt}`,
    secure: true,
    httpOnly: true,
  });
  console.log("jwt secret key", jwt);

  return NextResponse.json({ message: "Toke Created" });
};
