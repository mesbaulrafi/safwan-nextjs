import Button from "@/components/Button";
import Container from "@/components/Container";
import React from "react";

const Banner = () => {
  return (
    <>
      <section>
        <div className="bg-[url('../public/bannerImg.png')] bg-no-repeat bg-center bg-cover py-52.5 ">
          <Container>
            <div className="">
                <h2 className='lg:text-[100px] text-[50px] text-center lg:text-left font-bold font-vollkorn text-white leading-27.75'>Hello!</h2>
                    <h1 className='lg:text-[100px] text-[50px] text-center lg:text-left font-bold font-vollkorn text-white leading-27.75'>I’m Zarror Nibors</h1>
                    <p className='pt-3.5 text-[20px] font-jost lg:w-167.5 text-white/50 text-center lg:text-left'>I’am freelance <span className='text-white'>UI/UX Designer</span> based in Indonesia who loves to craft attractive design experiences for the web.</p>
                    <div className="mt-12.5  cursor-pointer w-fit mx-auto lg:mx-0">
                        <Button btnText={'Contact Me'}/>
                    </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Banner;
