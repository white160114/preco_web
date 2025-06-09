import React from "react";
import logo from "../assets/logo.png";

const Logo: React.FC = () => {
    return (
        <img src={logo} alt="プレコ"
            className="h-8 sm:h-10 md: h-12 lg:h-16 w-auto"
        />
    );
};

export default Logo;

