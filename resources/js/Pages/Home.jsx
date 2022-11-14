import React from 'react'
import { ReactComponent as Logo } from '../../images/LogoPellegrini.svg';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdOutgoingMail } from "react-icons/md";
import { FaLaravel, FaPhp, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiCss3, SiExpo, SiHtml5, SiTailwindcss, SiTypescript } from "react-icons/si";
import Popper from '@/Components/Popper';

function Home() {


    return (
        <div className="bg-cinza-400 w-screen h-screen flex flex-col gap-y-14 justify-center items-center p-16 bgWeb">
            <Logo/>
            <p className="uppercase text-cinza-100 text-xl text-center ">
                Work in progress
            </p>
            <div className="flex flex-row gap-x-5 justify-center items-center -mt-10">
                <a href="https://www.linkedin.com/in/pellegrini-coelho/" target="_blank">
                    <AiFillLinkedin
                        className="text-cinza-200 cursor-pointer hover:text-cinza-100 transition-all"
                        size={30}
                    />
                </a>
                <a href="https://github.com/PellegriniGuilherme" target="_blank">
                    <AiFillGithub
                        className="text-cinza-200 cursor-pointer hover:text-cinza-100 transition-all"
                        size={30}
                    />
                </a>
                <a href="mailto:contato@guilhermepellegrini.com.br" target="_blank">
                    <MdOutgoingMail
                        className="text-cinza-200 cursor-pointer hover:text-cinza-100 transition-all"
                        size={34}
                    />
                </a>
            </div>
            <p className="uppercase text-cinza-100 text-lg font-bold">
                Stacks
            </p>
            <div className="flex flex-row flex-wrap gap-x-6 gap-y-3 md:gap-y-6 md:gap-x-16 justify-center items-center -mt-10">
                <Popper text="HTML5">
                    <SiHtml5 className="text-[#DD4B25]" size={26}/>
                </Popper>
                <Popper text="CSS3">
                    <SiCss3 className="text-[#016AB1]" size={26}/>
                </Popper>
                <Popper text="PHP">
                    <FaPhp className="text-[#7A86B8]" size={32}/>
                </Popper>
                <Popper text="JavaScript">
                    <IoLogoJavascript className="text-[#EFD81F]" size={26}/>
                </Popper>
                <Popper text="Laravel">
                    <FaLaravel className="text-[#FF2D20]" size={26} />
                </Popper>
                <Popper text="TypeScript">
                    <SiTypescript className="text-[#2F74C0]" size={26}/>
                </Popper>
                <Popper text="React">
                    <FaReact className="text-[#61DAFB]" size={26}/>
                </Popper>
                <Popper text="Expo">
                    <SiExpo className="text-[#BCC3CD]" size={26}/>
                </Popper>
                <Popper text="TailwindCss">
                    <SiTailwindcss className="text-[#38BDF8]" size={26}/>
                </Popper>
            </div>
        </div>
    )
}

export default Home
