import React from "react";
import { useNavigate } from "react-router-dom";

type ButtonProps = {
    label: string;
    to?: string; // 遷移先のパスを指定
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    // 進むボタンか戻るボタンか
    direction: "forward" | "backward";
}

const Button: React.FC<ButtonProps> = ({
    label,
    to,
    onClick,
    className = '',
    direction,
    disabled = false
}) => {
    const navigate = useNavigate();

    const buttonClass = disabled
        ? "bg-lightgray hover:bg-lightgray text-white opacity-50 cursor-not-allowed"
        : direction === "forward"
            ? "bg-blue hover:bg-blue text-white"
            : "bg-gray hover:bg-lightgray text-white"

    const handleClick = () => {
        if (disabled) return;
        if (onClick) onClick;
        if (to) navigate(to);
    }

    return (
        <button
            onClick={handleClick}
            disabled={disabled}
            className={`w-[175px] h-[48px] text-sm rounded-sm border-xs border-white text-white focus:outline-none shadow-custom ${buttonClass} ${className}`}
        >
            {label}
        </button>
    );
}

export default Button;

