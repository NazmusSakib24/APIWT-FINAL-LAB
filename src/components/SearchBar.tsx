interface SearchBarProps {
    query: string,
    setQuery: (query: string) => void
}

export default function SearchBar(search: SearchBarProps) {
    return (
        <>
            <input
                type="text"
                placeholder="Search students..."
                value={search.query}
                onChange={(event) => search.setQuery(event.target.value)}
            />
        </>
    )
}