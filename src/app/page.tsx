"use client";
import { useState } from 'react';
import axios, { AxiosError } from 'axios';

export default function Home() {
  const [id, setId] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/login', {
        id: parseInt(id),
      });

      if (response.status === 200) {
        console.log('User logged in:', response.data);
      } else {
        console.log('Error:', response.data.message);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log('Error:', error.message);
      } else {
        console.log('Unexpected error:', error);
      }
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-gray-200 to-gray-100">
      <form onSubmit={handleSubmit}>
        <div className="relative w-full max-w-[180px] p-4">
          <label htmlFor="id" className="form__label text-gray-500">
            ID
          </label>
          <input
            type="number"
            className="form__field block w-full border-b-2 border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
            placeholder="ID"
            required
            id="id"
            value={id}
            onChange={(event) => setId(event.target.value)}
          />
        </div>
        <button type="submit">Log in</button>
      </form>
    </main>
  );
}