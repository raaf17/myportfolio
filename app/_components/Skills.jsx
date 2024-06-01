import { SiBootstrap, SiCodeigniter, SiFigma, SiJavascript, SiLaravel, SiMysql, SiPhp } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";

export default function Skills() {
    return (
        <div className="py-10 -mt-5 mb-10 px-5">
            <div className="flex gap-3 flex-wrap items-center justify-center rounded-md max-w-3xl mx-auto">
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"><FaHtml5 className="h-10 w-10" /></div>
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"><IoLogoCss3 className="h-10 w-10" /></div>
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"><SiJavascript className="h-10 w-10" /></div>
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"><SiBootstrap className="h-10 w-10" /></div>
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"><SiTailwindcss className="h-10 w-10" /></div>
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"><SiPhp className="h-10 w-10" /></div>
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"><SiMysql className="h-10 w-10" /></div>
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"><SiCodeigniter className="h-10 w-10" /></div>
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"><SiLaravel className="h-10 w-10" /></div>
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"><SiFigma className="h-10 w-10" /></div>
            </div>
        </div>
    )
}
