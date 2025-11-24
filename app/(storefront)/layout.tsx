export default function StorefrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header will go here */}
      <main className="flex-1">{children}</main>
      {/* Footer will go here */}
    </div>
  );
}
