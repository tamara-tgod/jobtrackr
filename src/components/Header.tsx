import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="mx-auto flex items-center justify-between px-4 md:px-6 lg:px-8 h-16 max-w-6xl ">
        <div className="logo flex items-center gap-1 text-primary ">
            <span className="material-symbols-outlined text-2xl">work_history</span>
            <Link href={"/"} className="text-2xl">JobTrackr</Link>
        </div>
      </div>
    </header>
  );
}
