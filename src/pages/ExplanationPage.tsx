import React from "react";
import Logo from "../components/Logo";
import Button from "../components/Button";
import tablet from "../assets/tablet.png"
import upIcon from "../assets/upIcon.png";
import downIcon from "../assets/downIcon.png";
import leftIcon from "../assets/leftIcon.png";
import rightIcon from "../assets/rightIcon.png";
import "../theme.css";

const ExplanationPage: React.FC = () => {
    return (
        <div
            className="w-screen h-screen flex flex-col items-center justify-start px-4 pt-12"
            style={{ backgroundColor: "var(--color-beige)" }}
        >
            <div className="mb-10 mt-4 flex justify-center items-center">
                <Logo />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center text-center gap-6 mt-12 mb-8">
                <img src={tablet} alt="タブレット操作" className="w-[360px]" />
                <div
                    className="w-[420px] h-[321px] flex flex-col justify-center items-center leading-relaxed shadow-md text-center px-8 py-10 mt-8"
                    style={{
                        backgroundColor: "var(--color-white)",
                        border: "var(--border-width) var(--border-style) var(--color-green)",
                        borderRadius: "var(--border-radius-md)",
                        fontFamily: "var(--font-family)",
                        color: "var(--color-black)",
                        fontSize: "var(--font-size-base)",
                        lineHeight: "3.5rem",
                    }}
                >

                    <div className="flex items-center gap-3 mb-3">
                        <img src={upIcon} className="w-[35px] h-[35px]" />
                        <span>まえにすすむ</span>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                        <img src={downIcon} className="w-[35px] h-[35px]" />
                        <span>うしろにさがる</span>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                        <img src={leftIcon} className="w-[35px] h-[35px]" />
                        <span>ひだりにまわる</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <img src={rightIcon} className="w-[35px] h-[35px]" />
                        <span>みぎにまわる</span>
                    </div>
                </div>

            </div>



            <div className="mt-25">
                <Button
                    label="あつめる"
                    direction="forward"
                    to="/OperationPage"
                    className="w-[220px] h-[64px] text-lg rounded-md"
                />
            </div>
        </div>
    )
}

export default ExplanationPage;