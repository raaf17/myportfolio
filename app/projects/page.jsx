import Link from "next/link";
import ProjectsSnip from "../_components/ProjectsSnip";

export const metadata = {
    title: "Projects",
    description: "I am interested in learning programming because my dream is to become a programmer",
};

export default function Page() {
    return (
        <div className="py-20">
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold">My Projects<span className="text-primary">.</span></h1>
                <p className="text-xs">
                    Some independent and group projects that I have made, click see all
                    for all projects.<span className="text-primary">.</span></p>
            </div>
            <ProjectsSnip />
        </div>
    )
}