"use client";

import React, { useState } from "react";

export default function RootLayout({ children }: any) {
  const [user, setUser] = useState(null);
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {React.cloneElement(children, { 'user': user, 'setUser': setUser })}
      </body>
    </html>
  );
}
