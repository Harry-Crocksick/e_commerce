import no_data from "../../assets/no_data.svg";

export default function NotFound() {
  return (
    <section className="flex-1 grid place-content-center">
      <div>
        <p className="text-gray-500 font-semibold text-2xl mb-8">
          Data Not Found!
        </p>
        <img
          src={no_data}
          alt="Data Not Found"
          className="w-48 h-48 object-center"
        />
      </div>
    </section>
  );
}
