import NavBar from "@/components/navbar";

export default function BrowseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <div className="flex h-full pt-20">{children}</div>
    </>
  );
}
