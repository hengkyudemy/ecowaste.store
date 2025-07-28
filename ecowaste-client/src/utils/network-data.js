const BASE_URL = 'https://api.ecowaste.store/v1';

function getAccessToken() {
  return localStorage.getItem('accessToken');
}

function putAccessToken(accessToken) {
  return localStorage.setItem('accessToken', accessToken);
}

// MOCK login
async function login({ email, password }) {
  if (email === 'test@email.com' && password === '123456') {
    putAccessToken('fake-token');
    return {
      error: false,
      data: {
        accessToken: 'fake-token',
        user: { name: 'Test User', email },
      },
    };
  }
  return { error: true, data: null, message: 'Login gagal' };
}

// MOCK register
async function register({ name, email, password }) {
  // Simulasikan sukses
  return { error: false };
}

// MOCK getUserLogged
async function getUserLogged() {
  return {
    error: false,
    data: {
      name: 'Test User',
      email: 'test@email.com',
    },
  };
}

// MOCK getUserPoints
async function getUserPoints() {
  return {
    error: false,
    data: {
      points: 100,
    },
  };
}

// MOCK submitTrashCollection
async function submitTrashCollection({ type, weight, location }) {
  return { error: false };
}

export {
  getAccessToken,
  putAccessToken,
  login,
  register,
  getUserLogged,
  getUserPoints,
  submitTrashCollection,
};