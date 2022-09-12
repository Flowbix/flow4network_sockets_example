const { io } = require('socket.io-client');
const axios = require('axios');

const username = 'meu_usuario';
const password = 'minha_senha';

const baseURL = 'https://flowbix.minhainternet.net';
const socketBaseURL = 'http://51.81.210.140:8096';

// id obtido via login
async function login(base, data) {
  const url = `${base}/clients/login`;
  
  return await axios.post(url, data)
    .then((data) => {
      // console.log(data.data);
      return data.data;
    })
    .catch((err) => {
      console.log(err);
      return undefined
    });
}

const socket = io(socketBaseURL, {
  transports: ['websocket']
});

(async () => {
  socket.on('connect', async () => {
    console.log('connected to socket');
  });
  
  const information = await login(baseURL, {
    username: username,
    password: password,
  });
  
  if (information) {
    console.log('Client logged!');

    const clientID = information.id;
    const connectON = `${clientID}-recent-tests`;

    // console.log(connectON, !!socket);
    socket.on(connectON, (data) => {
      console.log('received data');
      console.log(data);

      console.log('test id:', data.testCode);
    });
  }
})()


