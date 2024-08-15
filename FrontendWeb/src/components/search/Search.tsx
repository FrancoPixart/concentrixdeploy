import React, { useState } from "react"

interface SearchInputProps {
    onSearch: (value: string) => void
    className?: string
    placeholder: string
}

export const SearchInput: React.FC<SearchInputProps> = ({ onSearch, className, placeholder }) => {
    const [search, setSearch] = useState("")

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setSearch(value)
        onSearch(value)
    }

    return (
        <input
            type="text"
            placeholder={placeholder}
            value={search}
            onChange={handleSearch}
            className={className}
        />
    )
}