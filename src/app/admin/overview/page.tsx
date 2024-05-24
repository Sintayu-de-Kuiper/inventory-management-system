import Head from "next/head";
import Link from "next/link";

export default function main() {
  return (
    <div>
      <Head>
        <title>scan items</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-gray-200 to-gray-100">
        <h1 className="text-3xl font-bold">Welcome to the scan items Page!</h1>

        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="inline-block min-w-full p-1.5 align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500"
                      >
                        Naam
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500"
                      >
                        Uitleen Periode
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500"
                      >
                        Notitie
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-xs font-medium uppercase text-gray-500"
                      >
                        Aantal
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-xs font-medium uppercase text-gray-500"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-100">
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        Arduino
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                        17/05/2024 - 24/05.2024
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                        n.v.t
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                        7
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-end text-sm font-medium">
                        <button type="button">
                          <svg
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <line
                              x1="14.92"
                              y1="1.70711"
                              x2="0.777862"
                              y2="15.8492"
                              stroke="black"
                              strokeWidth="2"
                            />
                            <line
                              x1="0.707107"
                              y1="1.2216"
                              x2="14.8492"
                              y2="15.3637"
                              stroke="black"
                              strokeWidth="2"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        Arduino
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                        17/05/2024 - 24/05.2024
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                        n.v.t
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                        7
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-end text-sm font-medium">
                        <button type="button">
                          <svg
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <line
                              x1="14.92"
                              y1="1.70711"
                              x2="0.777862"
                              y2="15.8492"
                              stroke="black"
                              strokeWidth="2"
                            />
                            <line
                              x1="0.707107"
                              y1="1.2216"
                              x2="14.8492"
                              y2="15.3637"
                              stroke="black"
                              strokeWidth="2"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        Arduino
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                        17/05/2024 - 24/05.2024
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                        n.v.t
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                        7
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-end text-sm font-medium">
                        <button type="button">
                          <svg
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <line
                              x1="14.92"
                              y1="1.70711"
                              x2="0.777862"
                              y2="15.8492"
                              stroke="black"
                              strokeWidth="2"
                            />
                            <line
                              x1="0.707107"
                              y1="1.2216"
                              x2="14.8492"
                              y2="15.3637"
                              stroke="black"
                              strokeWidth="2"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        Arduino
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                        17/05/2024 - 24/05.2024
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                        n.v.t
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                        7
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-end text-sm font-medium">
                        <button type="button">
                          <svg
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <line
                              x1="14.92"
                              y1="1.70711"
                              x2="0.777862"
                              y2="15.8492"
                              stroke="black"
                              strokeWidth="2"
                            />
                            <line
                              x1="0.707107"
                              y1="1.2216"
                              x2="14.8492"
                              y2="15.3637"
                              stroke="black"
                              strokeWidth="2"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        Arduino
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                        17/05/2024 - 24/05.2024
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                        n.v.t
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                        7
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-end text-sm font-medium">
                        <button type="button">
                          <svg
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <line
                              x1="14.92"
                              y1="1.70711"
                              x2="0.777862"
                              y2="15.8492"
                              stroke="black"
                              strokeWidth="2"
                            />
                            <line
                              x1="0.707107"
                              y1="1.2216"
                              x2="14.8492"
                              y2="15.3637"
                              stroke="black"
                              strokeWidth="2"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
          <Link href={"/admin"}>ga terug</Link>
      </main>
    </div>
  );
}
