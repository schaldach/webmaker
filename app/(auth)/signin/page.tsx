'use client'

import React, { useState } from "react";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../lib/Firebase";
import { useRouter } from 'next/router'

const router = useRouter()

async function Signin(email: string, password: string, setUser:Function) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setUser(user)
      router.push('/home')
    })
    .catch((error) => {
      console.log(error);
    });
}

function SigninPage({setUser}:any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setVisible] = useState(false);

  return (
    <div>
      <Link href='/signup'>cadastro</Link>
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
      <button onClick={() => Signin(email, password, setUser)}>login</button>
    </div>
  );
}

export default SigninPage;
