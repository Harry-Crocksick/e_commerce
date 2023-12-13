export default function Footer() {
  return (
    <footer className="bg-neutral-700 py-4">
      <section className="responsive-container flex items-center justify-between">
        <p className="text-white font-medium">
          Copyright &copy;{new Date().getFullYear()} MMSIT
        </p>
        <a href="#top" className="p-1 border border-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </a>
      </section>
    </footer>
  );
}
