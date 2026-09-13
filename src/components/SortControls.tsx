interface SortControlsProps {
    sort: string,
    setSort: (sort: string) => void
}

export default function SortControls(sortControl: SortControlsProps) {
    return (
        <>
            <button onClick={() => sortControl.setSort("name")}>
                Name (A-Z)
            </button>

            <button onClick={() => sortControl.setSort("gpa")}>
                GPA (High to Low)
            </button>

            <button onClick={() => sortControl.setSort("default")}>
                Default Order
            </button>
        </>
    )
}