'use client'

import { useState } from "react";

interface Props {
    createProject: (arg:string) => any
}

function NewProjectBox({createProject}:Props) {
    const [projectName, setName] = useState('')
    
    return (
        <div>
            <input onChange={e => setName(e.target.value)} value={projectName}></input>
            <button onClick={createProject(projectName)}>criar projeto</button>
        </div>
    );
}

export default NewProjectBox;