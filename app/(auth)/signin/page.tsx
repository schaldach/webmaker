'use client'

import React, { useState } from "react";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../lib/Firebase";
import { useRouter } from 'next/navigation'

function SigninPage({setUser}:any) {
  const [email, setEmail] = useState("gabimorgado0311@gmail.com");
  const [password, setPassword] = useState("be975310");
  const [passwordVisible, setVisible] = useState(false);

  const router = useRouter()

  async function Signin(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        router.push('/home')
      })
      .catch((error) => {
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
    </div>
  );
}

export default SigninPage;
