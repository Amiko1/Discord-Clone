"use client";
import CreateServerModal from "@/components/modals/create-server-modal";
import { useEffect, useState } from "react";
import InviteModal from "@/components/modals/invite-modal";

export default function ModalProvider() {
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
  }, []);
  if (!isMounted) {
    return;
  }
  return (
    <>
      <CreateServerModal />
      <InviteModal />
    </>
  );
}
