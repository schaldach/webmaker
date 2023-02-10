'use client'

import { useRouter } from "next/navigation";

function App({ children }: any) {
  const router = useRouter();
  return (
    <div>
      <button type="button" onClick={() => router.back()}>
        Voltar
      </button>
      {children}
    </div>
  );
}

export default App;
