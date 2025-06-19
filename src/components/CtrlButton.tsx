import React from "react";

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
            className="w-20 h-20 bg-sky-400 rounded shadow-md flex item-center justify-center"
        >
            <div className={`w-8 h-8 border-t-8 border-l-8 border-white ${rotation}`} />
        </button>
    );
};

export default CtrlButton;