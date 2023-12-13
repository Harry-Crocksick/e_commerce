const navLinks = [
  "All",
  "Electronics",
  "Jewelery",
  "Men's Clothing",
  "Women's Clothing",
];

export default function Pagination({ activeTag, setActiveTag }) {
  return (
    <ul className="responsive-container flex items-center gap-4 justify-between pt-2 pb-4 mt-2 overflow-x-auto">
      {navLinks.map((link) => (
        <li
          key={link}
          className={`shrink-0 basis-[160px] ${
            activeTag === link
              ? "bg-neutral-700 text-white"
              : "bg-white text-black"
          } border border-black text-center py-1 font-semibold cursor-pointer`}
          onClick={() => setActiveTag(link)}
        >
          {link}
        </li>
      ))}
    </ul>
  );
}
