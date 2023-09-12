import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white border sticky top-0 w-full shadow h-16 flex items-center z-[1000]">
      <nav className="container px-4 flex items-center">
        <Link href="/" className="text-lg text-slate-900 font-bold">
          {"<Logo/>"}
        </Link>
        <ul className="ml-auto flex items-center">
          <li>
            <Link href="/career" className="text-sm text-slate-700 font-semibold leading-6">
              Career
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
