import Image from "next/image";
import Logo from "../public/logo.png";
import React from "react";
import Container from "@/components/Container";
import Button from "@/components/Button";

const Header = () => {
  return (
    <>
      <header className="py-2.5 ">
        <Container>
          {/* Logo & Menu */}
          <div className="flex justify-between items-center flex-col lg:flex-row gap-y-10">
            {/* Logo */}
            <div className="">
              <Image src={Logo} />
            </div>
            {/* Menu */}
            <nav className="">
              <ul className="flex flex-col lg:flex-row lg:gap-x-10.75 gap-y-10 items-center font-jost">
                <li className="cursor-pointer text-[18px] hover:text-primary text-secondary duration-300">Home</li>
                <li className="cursor-pointer text-[18px] hover:text-primary text-secondary duration-300">Pages</li>
                <li className="cursor-pointer text-[18px] hover:text-primary text-secondary duration-300">Services</li>
                <li className="cursor-pointer text-[18px] hover:text-primary text-secondary duration-300">Blog</li>
                <li className="cursor-pointer text-[18px] hover:text-primary text-secondary duration-300">Contact</li>
              </ul>
            </nav>
            {/* Nav Button */}
            <div className="">
              <Button btnText={'Download CV'}/>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
