class Api {
  constructor(date){
    this._urlApi = date.urlApi;
    // this._token = date.token;
    // this._token = date.token; // 8675e632-7ad1-4f28-9202-69cb55994239
    // this._groupId = date.groupId; // cohort-19
  }

  _checkRes(res){
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

// запрос на получение карточек
  getInitialCards(token) {
    console.log('return getInitialCards');
    return fetch(`${this._urlApi}/cards`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
      }
    })
      .then(this._checkRes).catch(error => console.log(`${error}`));
  }

  getInitialUser(token) {
    console.log('return getInitialUser');
    return fetch(`${this._urlApi}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
      }
    })
      .then(this._checkRes).catch(error => console.log(`${error}`));
  }

  editProfile(name, status, token) {
    return fetch(`${this._urlApi}/users/me`, {
      method: 'PATCH',
      headers: {
        "Authorization" : `Bearer ${token}`, //8675e632-7ad1-4f28-9202-69cb55994239
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: status
      })
    })
      .then(this._checkRes).catch(error => console.log(`${error}`));
  }

  addCard(name, link, token) {
    return fetch(`${this._urlApi}/cards`, {
      method: 'POST',
      headers: {
        "Authorization" : `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        link: link,
      })
    })
      .then(this._checkRes).catch(error => console.log(`${error}`));
  }

  deleteCard(cardId, token) {
    return fetch(`${this._urlApi}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        "Authorization" : `Bearer ${token}`
      }
    })
      .then(this._checkRes).catch(error => console.log(`${error}`));
  }

  like(cardId, token) {
    return fetch(`${this._urlApi}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
      }
    })
      .then(this._checkRes).catch(error => console.log(`${error}`));
  }

  removeLike(cardId, token) {
    return fetch(`${this._urlApi}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        // "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
      }
    })
      .then(this._checkRes).catch(error => console.log(`${error}`));
  }

  editAvatar(linkAvatar, token) {
    return fetch(`${this._urlApi}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        "Authorization" : `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: linkAvatar,
      })
    })
      .then(this._checkRes).catch(error => console.log(`${error}`));
  }
}

const api = new Api({
  urlApi: 'http://localhost:2999', // http://api.lenskii.yandex15.nomoredomains.icu
  // token: localStorage.getItem('jwt'),
})

export default api;






