"use client";
import { authContext } from "@/utils/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Changed from next/router
import React, { useContext, useState, useEffect } from "react";

export default function Login() {
  const router = useRouter();
  const { token, handleToken } = useContext(authContext);
  const [fields, setFields] = useState({ username: "", password: "" });

  // Add useEffect for redirect
  useEffect(() => {
    if (token) {
      router.push('/');
    }
  }, [token, router]);

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSub = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fields),
      });
      const data = await res.json();
      handleToken(data.token);
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  if (token) {
    return 'loading ...'; // Or a loading spinner while redirect happens
  }

  return (
    <>
      <form onSubmit={handleSub}>
        <input name="username" onChange={handleChange} type="text" />
        <input name="password" onChange={handleChange} type="password" />
        <button type="submit">submit</button>
      </form>
      <button>
        <Link href='/'>Go Home</Link>
      </button>
    </>
  );
}