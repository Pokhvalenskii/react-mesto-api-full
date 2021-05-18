export const BASE_URL = 'http://localhost:2999' ; //change   'https://api.lenskii.yandex15.nomoredomains.icu'

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(
      {
        "email" : email,
        "password" : password,
      },
    )
  })
    .then(res => {
      return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
    })
}

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      // "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(
      {
        "email" : email,
        "password" : password,
      },
    )
  })
    .then(res => {
      return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
    })
}

export const validityJWT = (jwt) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${jwt}`
    }
  })
    .then(res => {
      return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
    })
}