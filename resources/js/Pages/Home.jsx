import React from 'react'
import { ReactComponent as Logo } from '../../images/LogoPellegrini.svg';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdOutgoingMail } from "react-icons/md";
import { FaLaravel, FaPhp, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpo, SiTailwindcss, SiTypescript } from "react-icons/si";
import Popper from '@/Components/Popper';

function Home() {


    return (
        <div className="bg-cinza-400 w-screen h-screen flex flex-col gap-y-10 justify-center items-center p-16 bgWeb">
            <Logo/>
            <p className="uppercase text-cinza-100 text-xl text-center">
                Working in progress
            </p>
            <div className="flex flex-row gap-x-5 justify-center items-center">
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
            <div className="flex flex-row gap-x-6 md:gap-x-16 justify-center items-center">
                <Popper text="Laravel">
                    <FaLaravel className="text-[#ff2d20] transition-all" size={26} />
                </Popper>
                <Popper text="PHP">
                    <FaPhp className="text-[#7a86b8] transition-all" size={32}/>
                </Popper>
                <Popper text="JavaScript">
                    <IoLogoJavascript className="text-[#efd81d] transition-all" size={26}/>
                </Popper>
                <Popper text="React">
                    <FaReact className="text-[#61dafb] transition-all" size={26}/>
                </Popper>
                <Popper text="Expo">
                    <SiExpo className="text-[#bcc3cd] transition-all" size={26}/>
                </Popper>
                <Popper text="TypeScript">
                    <SiTypescript className="text-[#2f74c0] transition-all" size={26}/>
                </Popper>
                <Popper text="TailwindCss">
                    <SiTailwindcss className="text-[#38bdf8] transition-all" size={26}/>
                </Popper>
            </div>
        </div>
    )
}

export default Home
