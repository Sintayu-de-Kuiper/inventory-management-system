import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-gray-200 to-gray-100">
<div className="relative w-full max-w-[180px] p-4">
        <label htmlFor="name" className="form__label text-gray-500">
          Voornaam
        </label>
        <input
          type="input"
          className="form__field block w-full border-b-2 border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          placeholder="Name"
          required
        ></input>
      </div>
      <div className="relative w-full max-w-[180px] p-4">
        <label htmlFor="name" className="form__label text-gray-500">
          Achternaam
        </label>
        <input
          type="input"
          className="form__field block w-full border-b-2 border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          placeholder="Name"
          required
        ></input>
      </div>
      <div className="relative w-full max-w-[180px] p-4">
        <label htmlFor="name" className="form__label text-gray-500">
          Studentnummer
        </label>
        <input
          type="input"
          className="form__field block w-full border-b-2 border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          placeholder="Name"
          required
        ></input>
      </div>
      <div className="relative w-full max-w-[180px] p-4">
        <label htmlFor="name" className="form__label text-gray-500">
          Klasnaam
        </label>
        <input
          type="input"
          className="form__field block w-full border-b-2 border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          placeholder="Name"
          required
        ></input>
      </div>
    </main>
  );
}
