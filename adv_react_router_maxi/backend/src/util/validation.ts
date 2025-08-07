export function isValidText(value: unknown): boolean {
  return typeof value === "string" && value.trim().length > 0;
}

export function isValidDate(value: unknown): boolean {
  if (typeof value !== "string") return false;

  const date = new Date(value);
  return !isNaN(date.getTime());
}

export function isValidImageUrl(value: unknown): boolean {
  return typeof value === "string" && value.startsWith("http");
}
