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

export async function getResource(query, options = {}) {
  return fetch(query, options)
    .then(checkStatus)
    .then(parseJson);
}