"use client";
import { useState } from "react";
import Button from "@/components/Button";
import Link from "next/link";
import BackButton from "@/components/BackButton";

const ReturnPage = () => {
  const [amount, setAmount] = useState(3);

  const handleDecrease = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  const handleIncrease = () => {
    setAmount(amount + 1);
  };

  return (
    <div className="bg-gray-100 flex min-h-screen items-center justify-center">
      <div className="bg-white flex w-full max-w-md flex-col rounded-lg p-8 text-center">
        <h1 className="mb-28 text-2xl font-bold">Inleveren: Arduino</h1>
        <div className="mb-8">
          <label htmlFor="amount" className="text-gray-700 mb-2 block">
            Aantal
          </label>
          <div className="relative clear-both my-4 flex items-center justify-center">
            <button
              onClick={handleDecrease}
              className="bg-gray-200 rounded-l-lg border-gray-200 hover:bg-gray-300 h-10 w-10 border p-0 font-bold transition-all duration-300 ease-in-out focus:outline-none"
            >
              -
            </button>
            <input
              id="amount"
              type="text"
              value={amount}
              readOnly
              className="border-gray-200 mx-0  box-border h-10 border p-2 text-center outline-none "
            />
            <button
              onClick={handleIncrease}
              className="bg-gray-200 rounded-r-lg border-gray-200 hover:bg-gray-300 -left-2 h-10 w-10 border p-0 font-bold transition-all duration-300 ease-in-out focus:outline-none"
            >
              +
            </button>
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="note" className="text-gray-700 mb-2 block">
            Notitie
          </label>
          <textarea
            id="note"
            rows={3}
            className=" w-full rounded-lg  p-2 focus:outline-none"
            placeholder="Lorem ipsum dolor sit amet, consectetur etc..."
          ></textarea>
        </div>
        <Button className={"mx-auto mt-4 w-fit"}>Inleveren</Button>

        <BackButton>
          <Link href={"/home"}>Klaar</Link>
        </BackButton>
      </div>
    </div>
  );
};

export default ReturnPage;