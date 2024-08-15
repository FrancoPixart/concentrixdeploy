import React from "react"

interface SelectOptionProps {
    options: string[]
    onSelect: (value: string) => void
    className?: string
    optionSelected?: string
}

export const SelectOption: React.FC<SelectOptionProps> = ({ options, onSelect, className, optionSelected }) => {
    const handleSelect = ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) => {
        // console.log({ value });
        onSelect(value)
    }

    return (
        <select
            value={optionSelected}
            onChange={handleSelect}
            className={className}
        >
            {options?.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    )
}
