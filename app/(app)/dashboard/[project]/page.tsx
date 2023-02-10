interface Props {
    params: {
        project: string
    }
}

function Project({params}:Props) {
    return (
        <div>
            <h1>olá {params.project}</h1>
        </div>
    );
}

export default Project;