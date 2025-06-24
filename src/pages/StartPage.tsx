import React from "react";
import Logo from "../components/Logo";
import Button from "../components/Button";
import "../theme.css";

const StartPage: React.FC = () => {
    return (
        <div
            className="w-screen h-screen flex flex-col items-center justify-start px-4 pt-12"
            style={{ backgroundColor: "var(--color-beige)" }}
        >
            {/* ロゴ */}
            <div className="mb-10 mt-4 flex justify-center items-center">
                <Logo />
            </div>

            {/* カード*/}
            <div
                className="w-full max-w-[691px] h-[400px]  leading-relaxed shadow-md text-center px-8 py-10 mt-13"
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
                <ol className="space-y-4">
                    <li>1. じぶんのタブレットとラジコンをつなげよう</li>
                    <li>
                        2. つながったらラジコンをうごかして<br />
                        小さなプラスチックをあつめよう
                    </li>
                    <li>
                        3. 時間になったら集めたプラスチックで<br />
                        アクセサリーを作ろう
                    </li>
                </ol>
            </div>

            {/* ボタン*/}
            <div className="mt-25">
                <Button
                    label="つなげる"
                    direction="forward"
                    to="/Connect"
                    className="w-[220px] h-[64px] text-lg rounded-md"
                />
            </div>
        </div>
    );
};

export default StartPage;
