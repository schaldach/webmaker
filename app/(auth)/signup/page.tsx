"use client";

import React, { useState } from "react";
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../lib/Firebase";
import { useRouter } from 'next/router'

const router = useRouter()

async function Signup(email: string, password: string, setUser:Function) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setUser(user)
      router.push('/home')
    })
    .catch((error) => {
      console.log(error);
    });
}

function SignupPage({setUser}:any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setVisible] = useState(false);

  return (
    <div>
      <Link href="/signin">login</Link>
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
        <button onClick={() => setVisible(!passwordVisible)}>mostrar senha</button>
      </div>
      <button onClick={() => Signup(email, password, setUser)}>cadastro</button>
    </div>
  );
}

export default SignupPage;
