"use client";

import { usePathname } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";

export default function FooterWrapper() {
  const pathname = usePathname();
  return <SiteFooter page={pathname === "/book" ? "book" : undefined} />;
}