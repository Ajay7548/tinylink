"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function AddModal({ close, refresh }) {
  const [fullUrl, setFullUrl] = useState("");
  const [code, setCode] = useState("");

  const isValidUrl = (url) => {
    try { new URL(url); return true; }
    catch { return false; }
  };

  const createLink = async (e) => {
    e.preventDefault();

    if (!isValidUrl(fullUrl)) {
      toast.error("Invalid URL");
      return;
    }

    const res = await fetch("/api/links", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullUrl, code })
    });

    const data = await res.json();
    if (!res.ok) return toast.error(data.error);

    toast.success("Link created");
    refresh();
    close();
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center">
      <div className="bg-gray-900 p-6 rounded-xl w-full max-w-md space-y-4">
        <h2 className="text-xl font-bold text-white">Create Link</h2>

        <form onSubmit={createLink} className="space-y-4">
          <input
            type="text"
            placeholder="Full URL"
            value={fullUrl}
            onChange={(e) => setFullUrl(e.target.value)}
            className="w-full bg-gray-800 p-3 rounded text-gray-200"
          />

          <input
            type="text"
            placeholder="Custom Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full bg-gray-800 p-3 rounded text-gray-200"
          />

          <div className="flex justify-end gap-3">
            <button type="button" onClick={close} className="bg-gray-600 px-4 py-2 rounded text-white">
              Cancel
            </button>

            <button type="submit" className="bg-blue-600 px-4 py-2 rounded text-white">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
