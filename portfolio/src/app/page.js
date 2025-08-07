import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl bg-white shadow-md rounded-full px-6 py-3 flex justify-between items-center z-50">
        <h1 className="text-lg font-bold gabarito-medium">Hello World</h1>
        <button className="bg-black cursor-pointer text-white rounded-full px-4 py-2 text-sm hover:bg-gray-800 transition">
          Action
        </button>
      </nav>

      {/* Content Sections */}
      <main className="pt-24 px-4 sm:px-20 space-y-24">
        <section className="w-full flex flex-col items-center gap-8 mt-20">
          <h1 className="text-8xl gabarito-semibold">Hi, I'm Rao</h1>
        </section>

        <section className="w-full">
          <h2 className="text-2xl font-semibold text-center sm:text-left">More Content Coming</h2>
          <p className="text-gray-600 text-center sm:text-left mt-2">
            Just add new &lt;section&gt; tags here.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 flex flex-wrap gap-6 justify-center items-center py-10 border-t border-gray-200">
        <a
          className="flex items-center gap-2 hover:underline"
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/file.svg" alt="File icon" width={16} height={16} />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline"
          href="https://vercel.com/templates?framework=next.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/window.svg" alt="Window icon" width={16} height={16} />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/globe.svg" alt="Globe icon" width={16} height={16} />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
