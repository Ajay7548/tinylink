export function GET() {
  return Response.json(
    {
      ok: true,
      version: "1.0",

      system: {
        platform: process.platform,  // win32, linux, darwin
        arch: process.arch,          // x64, arm64
        node: process.version        // Node.js version
      },

      uptime: process.uptime(),      // seconds

      message: "Service is healthy and running smoothly."
    },
    { status: 200 }
  );
}
