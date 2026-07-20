import { NextResponse } from "next/server";

export async function GET(request: Request) {
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
  const take = searchParams.get("take") ?? "24";
  try {
    const url = `https://api.wasi.co/v1/property/search?id_company=${idCompany}&wasi_token=${wasiToken}&skip=${skip}&take=${take}&order_by=created_at&order=desc`;
    const response = await fetch(url, {
      next: { revalidate: 300 },
    });
    const data = await response.json();
    if (data.status && data.status !== "success") {
      return NextResponse.json(
        { status: "error", message: data.message || data.mensaje || "Error consultando Wasi." },
        { status: 502 }
      );
    }
    const properties = Object.keys(data)
      .filter((key) => /^\d+$/.test(key))
      .sort((a, b) => Number(a) - Number(b))
      .map((key) => data[key]);
    return NextResponse.json({
      status: "success",
      total: data.total ?? properties.length,
      properties,
    });
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: "No se pudo conectar con Wasi." },
      { status: 500 }
    );
  }
}