import { prisma } from "@/lib/db.js";

export async function GET(req, context) {
  const { code } = await context.params;

  const link = await prisma.link.findUnique({
    where: { code }
  });

  if (!link) {
    return new Response("Not found", { status: 404 });
  }

  // Update stats
  await prisma.link.update({
    where: { code },
    data: {
      clicks: { increment: 1 },
      lastClickedAt: new Date()
    }
  });

  return new Response(null, {
    status: 302,
    headers: { Location: link.fullUrl }
  });
}
