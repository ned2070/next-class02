import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-600 font-mono">
      <h2>
        This website is about me. The first thing to know is that I'm a lazy,
        lazy man.
      </h2>
      <Link href="/about"> About </Link>
      <Link href="/example"> Example </Link>
      <Link href="/newLayout"> New Layout</Link>
      <Link href="/more"> More </Link>
      <Link href="/extra"> Extra </Link>
    </main>
  );
}
