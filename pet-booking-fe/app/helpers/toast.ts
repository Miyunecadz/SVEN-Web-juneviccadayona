import Toastify from "toastify-js";

/**
 * Show a PrelineCSS Toastify toast.
 * @param {string} message - The message to show (can be HTML, e.g. for validation error).
 * @param {object} [options] - Optional Toastify options (duration, type, etc.)
 */
export function showToast(
  message: string,
  options: { duration: number } = { duration: 3000 }
) {
  Toastify({
    text: message,
    className:
      "hs-toastify-on:opacity-100 opacity-0 fixed -top-37.5 right-5 z-90 transition-all duration-300 w-80 bg-white text-sm text-gray-700 border border-gray-200 rounded-xl shadow-lg [&>.toast-close]:hidden dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400",
    close: true,
    escapeMarkup: false,
    ...options,
  }).showToast();
}
