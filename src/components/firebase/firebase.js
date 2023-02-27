import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { setDoc, getDoc, doc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDralqYjaSu18fgAYHs_s93IFdofkrmQdY",
  authDomain: "fashion-hut-dd16c.firebaseapp.com",
  projectId: "fashion-hut-dd16c",
  storageBucket: "fashion-hut-dd16c.appspot.com",
  messagingSenderId: "388121048955",
  appId: "1:388121048955:web:49dfb94f4f3256f5996fde",
  measurementId: "G-D7EK45T72X"
};

export const createUserProfileDoc = async (userAuth) => {
  if (userAuth == null) return;

  const docRef = doc(db, "users", userAuth.uid);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(doc(db, "users", userAuth.uid), {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return docRef;
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);
