const configuredApiBase = process.env.NEXT_PUBLIC_API_BASE?.trim() || "";

function normalizeApiBase(value: string) {
  if (!value) return "";

  try {
    const url = new URL(value);
    const isLocal = ["localhost", "127.0.0.1", "::1"].includes(url.hostname);
    const usesAllowedProtocol = url.protocol === "https:" || (isLocal && url.protocol === "http:");

    if (!usesAllowedProtocol || url.username || url.password || url.search || url.hash) {
      return "";
    }

    return `${url.origin}${url.pathname.replace(/\/$/, "")}`;
  } catch {
    return "";
  }
}

const API_BASE = normalizeApiBase(configuredApiBase);

export async function postApi(path: string, body: Record<string, unknown>) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 15_000);

  try {
    const response = await fetch(`${API_BASE}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    const data = await response.json().catch(() => null);
    if (!response.ok || !data?.ok) {
      throw new Error(data?.error || "The request could not be completed.");
    }

    return data;
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new Error("The request timed out. Please try again.");
    }

    if (error instanceof TypeError) {
      throw new Error("Unable to reach the server. Please try again.");
    }

    throw error;
  } finally {
    window.clearTimeout(timeout);
  }
}
