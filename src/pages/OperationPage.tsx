import React from "react";
import "../theme.css";
import Button from "../components/Button";
import Logo from "../components/Logo";
import CtrlButton from "../components/CtrlButton";
import { useNavigate } from "react-router-dom";
import { sendDirection, disconnectDevice } from "../bluetooth";

const OperationPage: React.FC = () => {

    const navigate = useNavigate();

    const handleDirection = (direction: "forward" | "backward" | "left" | "right") => {
        sendDirection(direction);
    };

    const handleEnd = () => {
        disconnectDevice();
        navigate("/")
    };

    return (
        <div
            className="w-screen h-screen flex flex-col px-4 pt-12"
            style={{ backgroundColor: "var(--color-beige)" }}
        >

            <div className="flex justify-between items-center px-6 py-2">
                <Logo />
                <Button
                    label="おわる"
                    direction="forward"
                    onClick={handleEnd}
                    className="w-[80px] h-[28px] text-lg rounded-md"
                />
            </div>


            <div className="absolute bottom-16 left-24 flex flex-col gap-8">
                <div></div>
                <CtrlButton direction="straight" onClick={() => handleDirection("forward")} />
                <div></div>

                <div></div>
                <CtrlButton direction="back" onClick={() => handleDirection("backward")} />
                <div></div>
            </div>
            <div className="absolute bottom-50 right-20 flex flex-row gap-12">
                <CtrlButton direction="left" onClick={() => handleDirection("left")} />
                <CtrlButton direction="right" onClick={() => handleDirection("right")} />
            </div>
        </div>
    )
}
export default OperationPage;