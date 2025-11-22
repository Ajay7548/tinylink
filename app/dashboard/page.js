"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import LinksTable from "./components/LinksTable";
import AddModal from "./components/AddModal";
import DeleteModal from "./components/DeleteModal";

export default function Dashboard() {
  const [links, setLinks] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const fetchLinks = async () => {
  const res = await fetch("/api/links", { cache: "no-store" });
  const data = await res.json();

  console.log("API RESULT →", data);

  setLinks(Array.isArray(data) ? data : data.links || []);
};

  
  useEffect(() => {
    fetchLinks();
  }, []);

  return (
    <div className="p-6 w-full pt-20 flex flex-col items-center gap-8">
      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => setAddModal(true)}
          className="bg-blue-600 px-5 py-3 rounded text-white font-semibold"
        >
          Add Link
        </button>

        <button
          onClick={() => setDeleteModal(true)}
          className="bg-red-600 px-5 py-3 rounded text-white font-semibold"
        >
          Delete Link
        </button>
      </div>

      {/* Table */}
      <LinksTable links={links} />

      {/* Modals */}
      {addModal && (
        <AddModal
          close={() => setAddModal(false)}
          refresh={fetchLinks}
        />
      )}

      {deleteModal && (
        <DeleteModal
          close={() => setDeleteModal(false)}
          refresh={fetchLinks}
        />
      )}
    </div>
  );
}
