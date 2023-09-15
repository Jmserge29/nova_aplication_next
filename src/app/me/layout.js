"use client";
import SideBarTailwind from "@/components/Sidebar/SideBarTailwind";
import { useSession } from "next-auth/react";


export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  const { data: session, status } = useSession();
  console.log(session);

  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className="flex">
        <SideBarTailwind />
      </div>

      {children}
    </section>
  );
}
