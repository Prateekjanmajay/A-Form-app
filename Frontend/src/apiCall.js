async function apiCall(url, method, body) {
  const data = await fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });

  return data;
}

export default apiCall;
