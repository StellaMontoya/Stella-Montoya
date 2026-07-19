import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const idCompany = process.env.WASI_ID_COMPANY;
  const wasiToken = process.env.WASI_TOKEN;

  if (!idCompany || !wasiToken) {
    return NextResponse.json(
      { status: "error", message: "Faltan credenciales de Wasi en el servidor." },
      { status: 500 }
    );
  }

  const { searchParams } = new URL(request.url);
  const skip = searchParams.get("skip") ?? "0";
  const take = searchParams.get("take") ?? "9";

  try {
    const url = `https://api.wasi.co/v1/property/search?id_company=${idCompany}&wasi_token=${wasiToken}&skip=${skip}&take=${take}&order_by=max_price&order=desc`;

    const response = await fetch(url, { cache: "no-store" });
    const data = await response.json();

    if (data.status !== "success") {
      return NextResponse.json(
        { status: "error", message: data.message || "Error consultando Wasi." },
        { status: 502 }
      );
    }

    const entries = Object.entries(data).filter(
      ([key]) => key !== "status" && key !== "total"
    ) as [string, any][];

    const featured = entries.filter(
      ([, p]) => p.status_on_page_label === "Outstanding"
    );
    const rest = entries.filter(
      ([, p]) => p.status_on_page_label !== "Outstanding"
    );
    const ordered = [...featured, ...rest].map(([, p]) => p);

    return NextResponse.json({
      status: "success",
      total: data.total,
      properties: ordered,
    });
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: "No se pudo conectar con Wasi." },
      { status: 500 }
    );
  }
}