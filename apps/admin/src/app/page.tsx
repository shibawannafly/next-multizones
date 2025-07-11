"use client";

import { XButton } from "@repo/ui";
import { UserList } from "./components";
import { ReactQueryProvider } from "@repo/react-query-config/common";

export default function Home() {
  return (
    <ReactQueryProvider>
      <div className="w-full h-screen flex flex-col items-center justify-center gap-4">
        <h1>This is Admin</h1>
        <a href="/">
          <XButton>Go to Web</XButton>
        </a>
        <UserList />
      </div>
    </ReactQueryProvider>
  );
}
