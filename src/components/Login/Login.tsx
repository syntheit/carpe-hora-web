import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/constants/firebase";

const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (!credential) return;
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

export default function Login() {
  return (
    <div className="flex justify-center items-center gap-10 h-full w-screen px-10">
      <button
        className="reg_button"
        onClick={loginWithGoogle}
      >
        Login with Google
      </button>
    </div>
  );
}
