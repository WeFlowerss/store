export function decodeQueryString(queryString) {
  const params = new URLSearchParams(queryString);
  const userString = decodeURIComponent(params.get("user"));
  const user = JSON.parse(userString);

  return {
    query_id: params.get("query_id"),
    user,
    auth_date: params.get("auth_date"),
    hash: params.get("hash"),
  };
}
