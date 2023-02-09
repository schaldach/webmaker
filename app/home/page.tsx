import React from "react";
import Link from "next/link";

function Home({user}:any) {
    return (
        <div>
            <Link href='/profile'>meu perfil</Link>
        </div>
    );
}

export default Home;