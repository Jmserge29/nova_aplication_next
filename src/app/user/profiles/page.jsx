"use client";
import { getsAllUsers } from "../../api/request";
import { useState } from "react";

export default function Page() {
  const [listsUsers, setListUsers] = useState();
  
  const getUSers = async () => {
    const response = await getsAllUsers();
    setListUsers(response.data.data)
    console.log(response.data.data)
  };
  
  return (
    <>
      <main className="flex  flex-col items-center justify-between p-24">
      </main>
    </>
  );
}
