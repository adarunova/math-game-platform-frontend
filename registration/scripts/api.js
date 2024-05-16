const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-10',
    headers: {
      authorization: '1b672ea5-50fb-43e7-92f6-8a26aeae5f47',
      'Content-Type': 'application/json'
    }
}
  
const handleResponse = (res) => {
    if (res.ok) {
        return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

// USER
  
const userInfo = () => { 
    return fetch(`${config.baseUrl}/api/v1/user`,  {
        headers: config.headers
    })
    .then(handleResponse);
}
  
const UpdatePassword = (updateProfile) => { 
    return fetch(`${config.baseUrl}/api/v1/user`,  {
        method: 'PUT',
        headers: config.headers,
        body: updateProfile
    })
    .then(handleResponse);
}

const UpdateProfile = (newPassword) => { 
    return fetch(`${config.baseUrl}/api/v1/user/restore-password`,  {
        method: 'POST',
        headers: config.headers,
        body: newPassword
    })
    .then(handleResponse);
}

const RegistrateProfile = (newProfile) => { 
    return fetch(`${config.baseUrl}/api/v1/user/registration`,  {
        method: 'POST',
        headers: config.headers,
        body: newProfile
    })
    .then(handleResponse);
}

const LoginProfile = (profile) => { 
    return fetch(`${config.baseUrl}/api/login`,  {
        method: 'POST',
        headers: config.headers,
        body: profile
    })
    .then(handleResponse);
}

// EVENT

const UpdateEvent = (eventID) => { 
    return fetch(`${config.baseUrl}/api/v1/game-event/{eventID}`,  {
        method: 'PUT',
        headers: config.headers,
        body: eventID
    })
    .then(handleResponse);
}

const DeleteEvent = (eventID) => { 
    return fetch(`${config.baseUrl}/api/v1/game-event/{eventID}`,  {
        method: 'DELETE',
        headers: config.headers
    })
    .then(handleResponse);
}

const GetAllEvent = () => { 
    return fetch(`${config.baseUrl}/api/v1/game-event`,  {
        method: 'GET',
        headers: config.headers
    })
    .then(handleResponse);
}

const CreateEvent = (newEvent) => { 
    return fetch(`${config.baseUrl}/api/v1/game-event`,  {
        method: 'POST',
        headers: config.headers,
        body: newEvent
    })
    .then(handleResponse);
}

export { userInfo, UpdatePassword, UpdateProfile, RegistrateProfile, 
    UpdateEvent, DeleteEvent, GetAllEvent, CreateEvent }