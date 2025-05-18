import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';

{/*FIREBASE CONFIGURATION*/}
    const firebaseConfig = {
    apiKey: "AIzaSyBzjBNvqFG5N5DZAhvFfZ2eFgbau-sSYaQ",
    authDomain: "formulario-de-portafolio.firebaseapp.com",
    databaseURL: "https://formulario-de-portafolio-default-rtdb.firebaseio.com",
    projectId: "formulario-de-portafolio",
    storageBucket: "formulario-de-portafolio.firebasestorage.app",
    messagingSenderId: "599812925599",
    appId: "1:599812925599:web:b75df248513a72a3359aaa"
};


const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
export const messagesRef = ref(database, 'messages');