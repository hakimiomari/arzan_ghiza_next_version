const { NextResponse } = require("next/server");

export const middleware = async (request) => {
  const user = true;
  if (!user) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: "/dashboard",
};
