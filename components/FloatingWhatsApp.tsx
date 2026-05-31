import { MessageCircle } from "lucide-react";
import { wa } from "@/lib/constants";
import type { Translations } from "@/lib/types";

export function FloatingWhatsApp({ L }: { L: Translations }) {
  return (
    <a
      href={wa(L.floatMsg)}
      target="_blank"
      rel="noreferrer"
      className="float-wa flex items-center justify-center"
      data-desktop
      style={{
        position: "fixed",
        bottom: 20,
        insetInlineEnd: 20,
        zIndex: 60,
        width: 52,
        height: 52,
        borderRadius: "50%",
        background: "var(--green)",
        boxShadow: "0 4px 16px rgba(45, 184, 114, 0.28)",
      }}
      aria-label="WhatsApp"
    >
      <MessageCircle size={26} color="#fff" strokeWidth={1.75} />
    </a>
  );
}
