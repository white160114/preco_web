import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import Button from "../components/Button";
import phone from "../assets/phone.png";
import caterpillar from "../assets/caterpillar.png";
import "../theme.css";
import "../bluetooth";
import { useLocation } from "react-router-dom";
import { connectBluetooth } from "../bluetooth";

const ConnectPage: React.FC = () => {
    const location = useLocation();
    const shouldConnect = location.state?.shouldConnect;

    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        const connect = async () => {
            if (shouldConnect) {
                console.log("接続開始！");
                try {
                    await connectBluetooth();
                    setIsConnected(true); // 接続成功したら状態を更新
                } catch (error) {
                    console.error("接続失敗:", error);
                    setIsConnected(false);
                }
            }
        };
        connect();
    }, [shouldConnect]);


    return (
        <div
            className="w-screen h-screen flex flex-col items-center justify-start px-4 pt-12"
            style={{ backgroundColor: "var(--color-beige)" }}
        >
            <div className="mb-10 mt-4 flex justify-center items-center">
                <Logo />
            </div>

            <div className="flex items-center justify-center gap-6  mt-6 my-10">
                <img src={phone} alt="phone" className="w-[240px] md:w-[240px]" />
                <div className="text-[100px] md:text-[120px]"
                    style={{ color: "var(--color-blue)" }}
                >
                    ))) (((
                </div>
                <img src={caterpillar} alt="キャタピラ" className="w-[240px] md:w-[240px]" />
            </div>

            <p
                className="text-center  mt-8 mb-12"
                style={{
                    fontFamily: "var(--font-family)",
                    fontSize: "var(--font-size-base)",
                    color: "var(--color-black)"
                }}
            >
                {isConnected ? "せつぞくできたよ！" : "せつぞくしているよ・・・"}
            </p>

            <div className="mt-25">
                <Button
                    label="つぎへ"
                    direction="forward"
                    to="/ExplanationPage"
                    className="w-[220px] h-[64px] text-lg rounded-md"
                />
            </div>

        </div>
    )
}

export default ConnectPage;