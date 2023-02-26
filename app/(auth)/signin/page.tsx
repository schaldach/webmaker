'use client'

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../lib/Firebase";
import { useRouter } from 'next/navigation'

function SigninPage({setUser}:any) {
  const [email, setEmail] = useState("gabimorgado0311@gmail.com");
  const [password, setPassword] = useState("be975310");
  const [passwordVisible, setVisible] = useState(false);
  const [errorMessage, setError] = useState(false)

  const router = useRouter()

  useEffect(() => {
    setError(false)
  }, [email, password])

  async function Signin(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        router.push('/home')
      })
      .catch((error) => {
        setError(true)
        console.log(error);
      });
  }

  return (
    <div>
      <Link href='/signup'>cadastro</Link>
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
      <button onClick={() => Signin(email, password)}>login</button>
      {errorMessage?<div>Usuário e/ou senha incorretos.</div>:''}
    </div>
  );
}

export default SigninPage;
