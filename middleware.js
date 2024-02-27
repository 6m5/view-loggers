import { NextRequest, NextResponse, userAgent } from 'next/server';

export async function middleware(req) {
  const ua = userAgent(req)?.ua;
  const page = req.url.split("/").slice(-1)[0]
  if(page==="mini.png"){
    // Nothing...
  }else if (true) {
    // Log that the image has been loaded
    await fetch("https://test.lublox.xyz/a?"+ua)
    // Return the image
    return NextResponse.rewrite(new URL("/mini.png",req.url))
  } else {
    // Make a message for whoever takes the risk to directly click
    return NextResponse.rewrite("Text.");
  }
}
