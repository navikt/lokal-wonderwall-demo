import { NextRequest } from "next/server";
import { _exchangeToken } from "@/app/api/_exchangeToken";

export async function GET(req: NextRequest) {
  const exchangeResult = await _exchangeToken(req);
  if (exchangeResult.error) {
    return new Response(JSON.stringify(exchangeResult.error), {
      status: exchangeResult.error.code,
    });
  }
  return new Response(JSON.stringify({ status: "ok", ok: true }));
}
