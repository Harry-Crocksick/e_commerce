const navLinks = [
  { name: "All", href: "" },
  { name: "Electronics", href: "category/electronics" },
  { name: "Jewelery", href: "category/jewelery" },
  { name: "Men's Clothing", href: "category/men's clothing" },
  { name: "Women's Clothing", href: "category/women's clothing" },
];

export default function Pagination({ setCategory, activeTag, setActiveTag }) {
  return (
    <ul className="responsive-container flex items-center gap-4 justify-between pt-2 pb-4 mt-2 overflow-x-auto">
      {navLinks.map((link) => (
        <li
          key={link.name}
          className={`shrink-0 basis-[160px] ${
            activeTag === link.name
              ? "bg-neutral-700 text-white"
              : "bg-white text-black"
          } border border-black text-center py-1 font-semibold cursor-pointer`}
          onClick={() => {
            console.log(link.name);
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
