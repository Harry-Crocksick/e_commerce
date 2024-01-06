export default function Container({ children }) {
	return (
		<section className="responsive-container flex-1 grid gap-x-5 gap-y-28 grid-cols-2 md:grid-cols-4 lg:grid-cols-8 mt-56 mb-20">
			{children}
		</section>
	);
}