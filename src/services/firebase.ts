import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAoC67REfZVTf-0_ijbkbBOryLpts-Tnzs",
  authDomain: "educacao-com-tecnoligia.firebaseapp.com",
  databaseURL: "https://educacao-com-tecnoligia-default-rtdb.firebaseio.com",
  projectId: "educacao-com-tecnoligia",
  storageBucket: "educacao-com-tecnoligia.appspot.com",
  messagingSenderId: "390038468733",
  appId: "1:390038468733:web:f880e33bcd15f0feb a5914",
};

const app = initializeApp(firebaseConfig);

export function writeUserData(
  uid: string,
  typeOfData: string,
  email: string,
  text: string
) {
  const db = getDatabase();
  set(ref(db, `${typeOfData}/` + uid), {
    email: email,
    text: text,
  });
}
