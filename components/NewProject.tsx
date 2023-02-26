'use client'

import { useState } from "react";

interface Props {
    createProject: (arg:string) => any
    visibility: boolean
    setVisible: any
}

function NewProjectBox({createProject, visibility, setVisible}:Props) {
    const [projectName, setName] = useState('')
    
    return (
        <div className={visibility?'':'hidden'}>
            <input onChange={e => setName(e.target.value)} value={projectName}></input>
            <button onClick={() => createProject(projectName)}>criar projeto</button>
            <button onClick={() => setVisible(!visibility)}>x</button>
        </div>
    );
}

export default NewProjectBox;