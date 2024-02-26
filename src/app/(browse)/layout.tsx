import Container from "@/components/container";
import NavBar from "@/components/navbar";
import { Sidebar, SidebarSkeleton } from "@/components/sidebar";
import { Suspense } from "react";

export default function BrowseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <div className="flex h-full pt-20">
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar />
        </Suspense>
        <Container>{children}</Container>
      </div>
    </>
  );
}
