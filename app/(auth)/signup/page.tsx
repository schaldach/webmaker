import React, { useState } from "react";
import Link from "next/link";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
async function Singin(email: string, password: string) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      console.log(error);
    });
}

function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setVisible] = useState(false);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type={passwordVisible ? "text" : "password"}
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => setVisible(!passwordVisible)}></button>
      </div>
      <button onClick={() => Singin(email, password)}></button>
    </div>
  );
}

export default SigninPage;
