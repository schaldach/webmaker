'use client'

import React, { useState } from "react";
import { auth } from "@/lib/Firebase";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/Firebase";
import NewProjectBox from "@/components/NewProject";
import Link from "next/link";

async function Dashboard() {
    const [currentProject, setProject] = useState('')
    const [newProjectVisible, setVisible] = useState(false)

    const allUserProjects = fetch('/api/project')

    async function createProject(name: string) {
        const user = auth.currentUser;
        if (user) {
          setDoc(doc(db, "websites"), {
            tree: [],
            name: "",
            images: [],
            user_id: user.uid,
          });
        }
      }

    return (
        <div>
            <input value={currentProject} onChange={e => setProject(e.target.value)}></input>
            <Link href={`/dashboard/${currentProject}`}>navegar</Link>
            <button onClick={() => setVisible(true)}>novo projeto</button>
            <NewProjectBox createProject={(arg:string) => createProject(arg)}/>
        </div>
    );
}

export default Dashboard;