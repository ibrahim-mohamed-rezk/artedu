import axios from "axios";

// Returns a user-facing error message. Prefers the backend-provided (localized)
// message; when none is present it returns `fallback`. Raw axios/JS error
// messages (e.g. "Network Error", "Request failed with status code 500") are
// intentionally NOT surfaced to users — log `error` at the call site instead.
export const getApiErrorMessage = (error: unknown, fallback = ""): string => {
  if (axios.isAxiosError(error)) {
    const responseMessage =
      error.response?.data?.msg ||
      error.response?.data?.message ||
      error.response?.data?.error;

    if (typeof responseMessage === "string" && responseMessage.trim()) {
      return responseMessage;
    }
  }

  return fallback;
};
