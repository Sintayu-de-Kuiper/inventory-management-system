import Head from "next/head";

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
                        <button
                          type="button"
                          className="inline-flex items-center gap-x-2 rounded-lg border border-transparent text-sm font-semibold text-blue-600 hover:text-blue-800 disabled:pointer-events-none disabled:opacity-50"
                        >
                          Delete
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
                        <button
                          type="button"
                          className="inline-flex items-center gap-x-2 rounded-lg border border-transparent text-sm font-semibold text-blue-600 hover:text-blue-800 disabled:pointer-events-none disabled:opacity-50"
                        >
                          Delete
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
                        <button
                          type="button"
                          className="inline-flex items-center gap-x-2 rounded-lg border border-transparent text-sm font-semibold text-blue-600 hover:text-blue-800 disabled:pointer-events-none disabled:opacity-50"
                        >
                          Delete
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
                        <button
                          type="button"
                          className="inline-flex items-center gap-x-2 rounded-lg border border-transparent text-sm font-semibold text-blue-600 hover:text-blue-800 disabled:pointer-events-none disabled:opacity-50"
                        >
                          Delete
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
                        <button
                          type="button"
                          className="inline-flex items-center gap-x-2 rounded-lg border border-transparent text-sm font-semibold text-blue-600 hover:text-blue-800 disabled:pointer-events-none disabled:opacity-50"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
