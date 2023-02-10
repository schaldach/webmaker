'use client'

import { useState } from "react";
import Link from "next/link";

function Dashboard() {
    const [currentProject, setProject] = useState('')
    
    return (
        <div>
            <input value={currentProject} onChange={e => setProject(e.target.value)}></input>
            <Link href={`/dashboard/${currentProject}`}>navegar</Link>
        </div>
    );
}

export default Dashboard;