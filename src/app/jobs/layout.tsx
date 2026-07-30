import type { ReactNode } from "react"
import Link from "next/link";

type JobsLayoutProps = {
    children: ReactNode;
};

export default function JobLayout({children}: JobsLayoutProps) {
    return (
        <main>
            <header className="text-primary">
                <div className="flex gap-2">
                    <span className="material-symbols-outlined ">work_history</span>
                    <h1 className="text-xl">Job Trackr</h1>
                </div>
                 <div>
        <Link href={"/"} className="flex text-gray-400">
          <span className="material-symbols-outlined">arrow_left_alt</span>
          Back to Board
        </Link>
      </div>
            </header>
            <div>
                {children}
            </div>
        </main>
    )
}

