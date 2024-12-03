import React from "react";

import NavBar from "@/components/ui/navigation/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <NavBar />
      {children}
    </main>
  );
}
