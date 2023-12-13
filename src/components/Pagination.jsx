const navLinks = [
  { name: "All", href: "" },
  { name: "Electronics", href: "category/electronics" },
  { name: "Jewelery", href: "category/jewelery" },
  { name: "Men's Clothing", href: "category/men's clothing" },
  { name: "Women's Clothing", href: "category/women's clothing" },
];

export default function Pagination({ setCategory, activeTag, setActiveTag }) {
  return (
    <ul className="fixed top-[73px] left-0 right-0 bg-white z-40 responsive-container flex items-center gap-4 justify-between p-3 overflow-x-auto">
      {navLinks.map((link) => (
        <li
          key={link.name}
          className={`shrink-0 basis-[160px] ${
            activeTag === link.name
              ? "bg-neutral-700 text-white"
              : "bg-white text-black"
          } border border-black text-center py-1 font-semibold cursor-pointer`}
          onClick={() => {
            setActiveTag(link.name);
            setCategory(link.href);
          }}
        >
          {link.name}
        </li>
      ))}
    </ul>
  );
}
