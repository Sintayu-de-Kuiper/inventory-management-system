import Head from "next/head";

export default function main() {  
    return (
      <div>
        <Head>
          <title>Home Page</title>
        </Head>
        <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-gray-200 to-gray-100">
          <h1 className="text-3xl font-bold">Welcome to the Home Page!</h1>
          <p className="text-lg">You have successfully logged in.</p>
        </main>
      </div>
    );
  }
