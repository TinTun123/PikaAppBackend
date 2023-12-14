
const Table = ({columns, children}) => {

    return (
        <table className="w-full whitespace-no-wrap">
            <thead>
            <tr
                className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b "
            >
                {
                    columns && columns.map((c)=> (
                        <th key={c.field}  className={"px-4 py-3 text-[11px] " + c.className}>{c.field}</th>
                    ))
                }
            </tr>
            </thead>
            <tbody
                className="bg-white divide-y divide-gray-200"
            >
            {children}
            </tbody>
        </table>
    );
};

export default Table;
