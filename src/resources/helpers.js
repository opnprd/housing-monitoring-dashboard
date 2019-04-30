function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

function parseJson(response) {
  return response.json()
}

export async function getResource(query) {
  return fetch(query)
    .then(checkStatus)
    .then(parseJson);
}