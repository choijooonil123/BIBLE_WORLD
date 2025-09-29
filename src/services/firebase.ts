import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyD69ziT9DIBol_WYc_gbUmNf1gUoz0ix7k",
  authDomain: "bible-listen.firebaseapp.com",
  projectId: "bible-listen",

  // ✅ 보통은 {projectId}.appspot.com 형식이 맞습니다.
  // 콘솔 > Storage > 버킷 이름을 확인해서 정확히 넣어주세요.
  storageBucket: "bible-listen.appspot.com",

  messagingSenderId: "22812607084",
  appId: "1:22812607084:web:790e8be5a45bc374b04e49",
  measurementId: "G-YJG6CVEDKX"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
