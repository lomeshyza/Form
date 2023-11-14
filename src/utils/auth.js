export const baseUrl = "http://localhost:3000";

function handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

//signin
export function login( email, password ) {
  console.log(email)
  return fetch(`${ baseUrl }/signin`, {
    method: "POST",
    headers:{'Accept': 'application/json',
    'Content-Type': 'application/json',
  },  
    body: JSON.stringify({email, password}),
  }).then(handleResponse);
}

