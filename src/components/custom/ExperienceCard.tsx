import React from "react";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
interface contractType {
	id: number;
	date: string;
	role: string;
	type: string;
}
interface props {
	title: string;
	date: string;
    imagen?: string
	contract: contractType[];
}

export const ExperienceCard = ({ title, imagen, date, contract }: props) => {
	return (
		<div>
			<Card className="p-5 m-2 flex flex-col gap-2 dark:bg-neutral-700">
				<div className="flex gap-4 flex-col lg:flex-row">
					<div className="flex gap-2 flex-col gap-1">
						<h2 className="text-xl lg:text-2xl font-bold">{title}</h2>
						<h2 className="italic text-2lg lg:text-xl">{date}</h2>
					</div>
				</div>

				<div>
					<Separator className="bg-neutral-400 dark:bg-neutral-200" />
					<div className="pt-2 m-1">
						{contract.map((row, index) => (
							<div
								className="flex pt-4 flex-col gap-1 lg:flex-row lg:gap-10"
								key={`${row.id}-${index}`}
							>
								<Separator orientation="vertical" />
								<h3 className="italic text-sm w-[140px]">{row.date}</h3>
								<div>
									<h4 className="font-bold">{row.role}</h4>
									<p>{row.type}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</Card>
		</div>
	);
};
