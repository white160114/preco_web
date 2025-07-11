import React from "react";
import "../theme.css";

type Direction = 'straight' | 'right' | 'back' | 'left';

type CtrlButtonProps = {
    onClick: () => void;
    direction: Direction;
};

const getRotation = (direction: Direction): string => {
    switch (direction) {
        case 'straight':
            return 'rotate-45'
        case 'right':
            return 'rotate-[135deg]';
        case 'back':
            return 'rotate-[225deg]';
        case 'left':
            return 'rotate-[315deg]';
    }
};



const CtrlButton: React.FC<CtrlButtonProps> = ({ direction, onClick }) => {
    const rotation = getRotation(direction);

    return (
        <button
            onClick={onClick}
            className="w-32 h-32 rounded shadow-md flex items-center justify-center"
            style={{
                backgroundColor: "var(--color-blue)",
                boxShadow: "var(--shadow-custom)"
            }}
        >
            <div className={`w-10 h-10 border-t-[12px] border-l-[12px] border-white ${rotation}`} />
        </button>
    );
};

export default CtrlButton;