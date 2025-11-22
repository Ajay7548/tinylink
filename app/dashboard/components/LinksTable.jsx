import React from 'react'

const LinksTable = ({links}) => {
  return (
    <div className="w-full md:px-[8%]  overflow-x-auto shadow-lg rounded-lg">
      <table className="w-full border-separate border-spacing-y-3">
        <thead>
          <tr className="bg-gray-900 text-gray-300">
            <th className="p-3 text-left">Short Code</th>
            <th className="p-3 text-left">Target URL</th>
            <th className="p-3 text-left">Clicks</th>
            <th className="p-3 text-left">Last Clicked</th>
          </tr>
        </thead>

        <tbody>
          {links.length === 0 ? (
            <tr>
              <td colSpan={4} className="text-center p-4 text-gray-500">
                No links found.
              </td>
            </tr>
          ) : (
            links.map((l, i) => (
              <tr
                key={l.code}
                className={`${i % 2 === 0 ? "bg-gray-800" : "bg-gray-700"} text-gray-200`}
              >
                <td className="p-3">{l.code}</td>
                <td className="p-3 max-w-[280px] wrap-break-word">{l.fullUrl}</td>
                <td className="p-3">{l.clicks}</td>
                <td className="p-3">{l.lastClickedAt || "Never"}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default LinksTable