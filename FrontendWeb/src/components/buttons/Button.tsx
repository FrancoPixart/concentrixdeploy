import React from "react"

interface ButtonProps {
    onClick?: () => void
    label: string
    disabled?: boolean
    className?: string
}

export const Button: React.FC<ButtonProps> = ({ onClick, label, disabled, className }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={className}
        >
            {label}
        </button>
    )
}
