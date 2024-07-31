


export default function Button({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <button className="border-[2px] border-[#ffffff40] rounded-lg px-3 py-2 flex items-center gap-2">
      {children}
    </button>
  );
}
