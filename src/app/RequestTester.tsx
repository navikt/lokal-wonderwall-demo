"use client";
import React from "react";
import useSWR from "swr";

export default function RequestTester() {
  const swrResponse = useSWR<{ status: string; ok?: boolean }>(
    `/api/eksempelRequest`,
    async (url: string) => {
      const res = await fetch(url, {
        method: "GET",
      });
      if (!res.ok) {
        throw new Error(`Kunne ikke laste eksempelrequest`);
      }
      return res.json();
    }
  );
  console.log("swrResponse :>> ", swrResponse);
  if (swrResponse.isLoading) {
    return <div>Laster...</div>;
  }
  return swrResponse?.data?.ok ? (
    <div>Fake token fungerer!</div>
  ) : (
    <div>Fake token feiler!</div>
  );
}
