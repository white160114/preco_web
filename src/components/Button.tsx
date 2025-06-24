import React from "react";
import { useNavigate } from "react-router-dom";
import "../theme.css";

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

    const backgroundColor = disabled
        ? "bg-lightgray hover:bg-lightgray text-white opacity-50 cursor-not-allowed"
        : direction === "forward"
            ? "var(--color-blue)"
            : "var(--color-gray)"

    const handleClick = () => {
        if (disabled) return;
        if (onClick) onClick();
        if (to) navigate(to);
    }

    return (
        <button
            onClick={handleClick}
            disabled={disabled}
            className={`w-[430px] h-[144px] text-white flex items-center justify-center focus:outline-none ${className}`}
            style={{
                backgroundColor,
                fontFamily: "var(--font-family)",
                fontSize: "var(--font-size-lg)",
                borderRadius: "var(--border-radius-md)",
                border: "var(--border-width) var(--border-style) var(--color-white)",
                boxShadow: "var(--shadow-custom)",
                opacity: disabled ? 0.5 : 1,
                cursor: disabled ? "not-allowed" : "pointer",
                textShadow: "var(--shadow-custom)"
            }}
        >
            {label}
        </button>
    );
}

export default Button;

