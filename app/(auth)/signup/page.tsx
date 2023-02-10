"use client";

import React, { useState } from "react";
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../lib/Firebase";
import { useRouter } from 'next/navigation'
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../lib/Firebase";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setVisible] = useState(false);

  const router = useRouter()

  async function Signup(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        setDoc(doc(db, "users", user.uid), {email: user.email, avatar_url: '', uid: user.uid});
        router.push('/home')
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <Link href="/signin">login</Link>
      <div>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type={passwordVisible ? "text" : "password"}
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => setVisible(!passwordVisible)}>mostrar senha</button>
      </div>
      <button onClick={() => Signup(email, password)}>cadastro</button>
    </div>
  );
}

export default SignupPage;
