import React from "react";
import logo from "../assets/logo.png";

const Logo: React.FC = () => {
    return (
        <img src={logo} alt="プレコ"
            className="h-32 md:h-48 lg:h-56 w-auto mx-auto"
        />
    );
};

export default Logo;

