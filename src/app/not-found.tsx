import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div className="glass max-w-xl rounded-lg p-8">
        <p className="section-kicker">404</p>
        <h1 className="section-title mt-3">This pipeline has no output.</h1>
        <p className="body-copy mt-4">
          The page you requested does not exist, but the portfolio is ready to route you back home.
        </p>
        <Link
          href="/"
          className="focus-ring mt-6 inline-flex rounded-lg bg-cyan-300 px-5 py-3 font-extrabold text-slate-950"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
