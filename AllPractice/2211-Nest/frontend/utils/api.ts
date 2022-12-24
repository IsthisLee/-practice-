const apiHost = process.env.NEXT_PUBLIC_API_HOST || "http://localhost:8080";

export default {
  cats: `${apiHost}/cats`
};
