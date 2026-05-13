export type WorkItem = {
  id: number | string;
  title: string;
  slug?: string;
  salary?: string;
  location?: string;
  type?: string;
  description?: string;
  email?: string;
};

const getText = (value: unknown) => (typeof value === "string" ? value.trim() : "");

const pickFirstText = (obj: Record<string, unknown>, keys: string[]) => {
  for (const key of keys) {
    const value = getText(obj[key]);
    if (value) return value;
  }
  return "";
};

const normalizeWork = (item: any): WorkItem => {
  const title = pickFirstText(item, ["title", "name", "job_title", "work_title"]);
  const slug = pickFirstText(item, ["slug"]);
  const salary = pickFirstText(item, ["salary", "amount", "price"]);
  const location = pickFirstText(item, ["location", "place", "city"]);
  const type = pickFirstText(item, ["type", "work_type", "employment_type"]);
  const description = pickFirstText(item, [
    "description",
    "content",
    "details",
    "about",
  ]);
  const email = pickFirstText(item, [
    "email",
    "contact_email",
    "apply_email",
    "careers_email",
  ]);

  return {
    id: item?.id ?? item?.work_id ?? `${title}-${Date.now()}`,
    title: title || "وظيفة متاحة",
    slug: slug || undefined,
    salary: salary || undefined,
    location: location || undefined,
    type: type || undefined,
    description: description || undefined,
    email: email || undefined,
  };
};

export const getWorksFromResponse = (response: any): WorkItem[] => {
  const payload = response?.data ?? response;
  const list =
    payload?.items ??
    payload?.data?.items ??
    payload?.data ??
    payload?.works ??
    payload?.jobs ??
    response?.items;

  if (!Array.isArray(list)) return [];
  return list.map(normalizeWork);
};

export const getWorkFromResponse = (response: any): WorkItem | null => {
  const payload = response?.data ?? response;
  const item =
    payload?.item ??
    payload?.work ??
    payload?.job ??
    payload?.data ??
    payload;

  if (!item || typeof item !== "object") return null;
  return normalizeWork(item);
};

export const stripHtml = (value: string) =>
  value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

