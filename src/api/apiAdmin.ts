const apiUrl = import.meta.env.VITE_APP_API_ADMIN_URL;

if (!apiUrl) {
  throw new Error("VITE_APP_API_ADMIN_URL no está definido en las variables de entorno del navegador.");
}

export const apiAdmin = apiUrl;