import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { SiLinkedin } from "react-icons/si";

export default function Social() {
    return (
        <div className="flex gap-2 items-center -ml-1 bg-secondary rounded-full p-2 w-fit">
            <Link href="https://github.com/raaf17" className="hover:text-primary"><GitHubLogoIcon className="h-4 w-4" /></Link>
            <Link href="https://instagram.com/raafvi_" className="hover:text-primary"><InstagramLogoIcon className="h-4 w-4" /></Link>
            <Link href="https://linkedin.com/in/muhammad-raafii/" className="hover:text-primary"><SiLinkedin className="h-4 w-4" /></Link>
        </div>
    )
}