
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBefWwz2AkHPUUfU2xWm-9t1BJzcQHrJQo",
    authDomain: "recipe-here-fire-base.firebaseapp.com" ,
    projectId: "recipe-here-fire-base" ,
    storageBucket: "recipe-here-fire-base.appspot.com",
    messagingSenderId: "604321729116",
    appId: "1:604321729116:web:18264af99e59d60705b499",
};

const app = initializeApp(firebaseConfig);

export default app;