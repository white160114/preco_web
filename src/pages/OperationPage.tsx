import React from "react";
import "../theme.css";
import Button from "../components/Button";
import Logo from "../components/Logo";
import CtrlButton from "../components/CtrlButton";

const OperationPage: React.FC = () => {
    return (
        <div
            className="w-screen h-screen flex flex-col items-center justify-start px-4 pt-12"
            style={{ backgroundColor: "var(--color-beige)" }}
        >

            <div className="mt-25">
                <Button
                    label="おわる"
                    direction="forward"
                    to="/"
                    className="w-[220px] h-[64px] text-lg rounded-md"
                />
            </div>

        </div>
    )
}
export default OperationPage;