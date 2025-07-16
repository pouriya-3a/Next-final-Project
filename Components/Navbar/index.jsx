"use client";
import { authContext } from "@/utils/AuthContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

export default function Navbar() {
  const { token, handleToken } = useContext(authContext);
  const path = usePathname();
  if (path == "/login") {
    return "";
  } else {
    return (
      <div>
        <ul className="flex justify-center bg-black text-white gap-5 py-5">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            {!token ? (
              <Link href="/login">Login</Link>
            ) : (
              <button onClick={() => handleToken(null)}>LogOut</button>
            )}
          </li>
          <li>
            <Link href="/users">Users</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
        </ul>
      </div>
    );
  }
}
