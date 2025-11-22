"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function DeleteModal({ close, refresh }) {
  const [code, setCode] = useState("");

  const deleteLink = async () => {
    const res = await fetch(`/api/links/${code}`, { method: "DELETE" });

    if (res.ok) {
      toast.success("Link Deleted");
      refresh();
      close();
    } else {
      toast.error("Invalid code or failed");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center">
      <div className="bg-gray-900 p-6 rounded-xl w-full max-w-md space-y-4">
        <h2 className="text-xl font-bold text-white">Delete Link</h2>

        <input
          type="text"
          placeholder="Enter code to delete"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full bg-gray-800 p-3 rounded text-gray-200"
        />

        <div className="flex justify-end gap-3">
          <button onClick={close} className="bg-gray-600 px-4 py-2 rounded text-white">
            Cancel
          </button>

          <button onClick={deleteLink} className="bg-red-600 px-4 py-2 rounded text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
