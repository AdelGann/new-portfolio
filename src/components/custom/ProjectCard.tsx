import React from "react";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import Image from "next/image";

interface contractType {
	id: number;
	technologies: string;
	previuw: string;
	deploy?: string;
}
interface props {
	title: string;
	description: string;
	project: contractType[];
}

export const ProjectCard = ({ title, description, project }: props) => {
	return (
		<div>
			<Card className="p-5 m-2 flex flex-col gap-2 dark:bg-neutral-700">
				<div className="flex gap-2 flex-col gap-1">
					<h2 className="text-xl lg:text-2xl font-bold">{title}</h2>
					<p className="italic text-lg">{description}</p>
				</div>

				<div>
					<Separator className="bg-neutral-400 dark:bg-neutral-200" />
					<div className="pt-2 m-1">
						{project.map((row, index) => (
							<div key={`${row.id}-${index}`}>
								<div className="flex pt-4 flex-col gap-1 lg:flex-row lg:gap-10">
									<Separator orientation="vertical" />
									<Image src={row.previuw} alt="An Image of a project" width={200} height={200} />
									<h5 className="italic text-sm w-[140px] text-[13px]">{row.technologies}</h5>
								</div>
								<div className="flex flex-col justify-between items-center">
									<a
										href={row.deploy}
										download
										className="p-4 bg-stone-200 dark:bg-stone-600 shadow-lg rounded-sm font-bold border-sm border-1 border-neutral-200"
									>
										See Deploy
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</Card>
		</div>
	);
};
