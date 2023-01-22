"use client";
import { auth } from "@/constants/firebase";

const logout = () => {
  auth.signOut();
};

export default function Profile() {
  return (
    <div className="flex gap-10 h-full w-screen px-10">
      <div className="flex flex-col container w-2/6 p-10">
        <h1 className="text-4xl font-bold mb-5">Profile</h1>
        <h3 className="text-2xl mb-5">{auth.currentUser?.displayName}</h3>
        <div className="reg_button" onClick={logout}>Logout</div>
      </div>
    </div>
  );
}
