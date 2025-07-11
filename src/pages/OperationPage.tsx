import React from "react";
import "../theme.css";
import Button from "../components/Button";
import Logo from "../components/Logo";
import CtrlButton from "../components/CtrlButton";

const OperationPage: React.FC = () => {
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
                    to="/"
                    className="w-[80px] h-[28px] text-lg rounded-md"
                />
            </div>


            <div className="absolute bottom-16 left-24 flex flex-col gap-8">
                <div></div>
                <CtrlButton direction="straight" onClick={() => console.log("↑")} />
                <div></div>

                <div></div>
                <CtrlButton direction="back" onClick={() => console.log("↓")} />
                <div></div>
            </div>
            <div className="absolute bottom-50 right-20 flex flex-row gap-12">
                <CtrlButton direction="left" onClick={() => console.log("←")} />
                <CtrlButton direction="right" onClick={() => console.log("→")} />
            </div>
        </div>
    )
}
export default OperationPage;