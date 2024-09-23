import { ExperienceCard } from "@/components/custom/ExperienceCard";
import { ProjectCard } from "@/components/custom/ProjectCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";


export default function Home() {
	return (
		<section>
			<div className="flex flex-col xl:flex-row pt-16" id="home">
				<div className="bg-neutral-200 dark:bg-neutral-700 p-20 text-black dark:text-white min-h-screen w-full place-content-center">
					<div className="flex justify-center flex-col m-2 ">
						<h3 className="text-xl font-bold">Hi everyone 👋!</h3>
						<div className="flex gap-2">
							<h1 className="text-4xl font-bold">My name is</h1>
							<h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
								Adel Gannem.
							</h1>
						</div>
					</div>

					<div className="p-3 m-5">
						<h2 className="text-xl font-[100]">Ready to take your project to the next level!</h2>
						<p> My skills span a range of technologies, to develop everything you'll need. 😃</p>
					</div>
					<Separator className="bg-neutral-400 dark:bg-neutral-200" />
					<div className="flex justify-center pt-5 items-end">
						<div className="flex flex-col justify-between items-center">
							<a
								href="/CV-Gann.pdf"
								download
								className="p-4 bg-stone-200 dark:bg-stone-600 shadow-lg rounded-sm font-bold border-sm border-1 border-neutral-200"
							>
								Download CV
							</a>
						</div>
					</div>
				</div>
				<div className="w-full px-4 block sm:px-16 gap-5 bg-[url('/dev-background.jpg')] bg-no-repeat bg-center bg-cover bg-blend-multiply bg-slate-200 dark:bg-slate-500 min-h-screen ">
					<div className="flex place-content-center p-10 text-xl lg:text-4xl italic font-bold">
						<h2>&rsquo;You can dream it, maybe I can develop it&rsquo;</h2>
					</div>
				</div>
			</div>
			<div className="" id="About">
				<div className="bg-slate-100 dark:bg-stone-600 p-20 text-black dark:text-white w-full ">
					<div className="flex justify-center flex-col m-2 ">
						<h3 className="text-2xl font-bold">About me</h3>
						<h1 className="text-3xl font-bold">FullStack Developer Junior.</h1>
						<h1 className="text-xl font-bold">React.js | Typescript | Java | NodeJS</h1>
					</div>
					<Separator className="bg-neutral-400 dark:bg-neutral-200" />
					<div className="p-3 m-5">
						<h2 className="text-xl font-[100]">Ready to take your project to the next level!</h2>
						<div className="flex flex-col gap-10 pt-3 text-lg lg:text-2lg font-light justify-center">
							<p>
								Fullstack developer Junior specialized in web development and efficient systems. My
								skills span a range of technologies: React, TypeScript and JavaScript. Designing
								intuitive and functional interfaces, I&apos;m ready to take your projects to the
								next level.😃
							</p>
							<p>
								I&apos;ve experience developing UI components and interactive pages using React and
								TailwindCSS, my latest projects includes forms, administrative systems, and
								contabilities systems. Always being easy to use and intuitve. Also I builded servers
								with Nodejs and Express or java springboot, I&apos;m proficient in creating RESTful
								APIs. My last project using NodeJS was an interactive system for an education system
								that collects data from its students and develops effective teaching methods.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="" id="Experience">
				<div className="bg-slate-50 dark:bg-stone-700  p-20 text-black dark:text-white w-full ">
					<div className="flex justify-center flex-col m-2 ">
						<h3 className="text-2xl font-bold">Experience</h3>
						<h1 className="text-3xl font-bold">My path over time.</h1>
					</div>
					<Separator className="bg-neutral-400 dark:bg-neutral-200" />
					<div>
						<ExperienceCard
							title="Sempiterno Group"
							imagen="/sempiternoProfile.jfif"
							date="May 2024 - October 2024"
							contract={contract}
						/>
					</div>
				</div>
			</div>
			<div className="" id="Projects">
				<div className="bg-stone-50 dark:bg-stone-700  p-20 text-black dark:text-white w-full ">
					<div className="flex justify-center flex-col m-2 ">
						<h3 className="text-2xl font-bold">Projects</h3>
						<h1 className="text-3xl font-bold">My best projects.</h1>
					</div>
					<Separator className="bg-neutral-400 dark:bg-neutral-200" />
					<div>
						<ProjectCard title="Soon" description="Soon" project={[]} />
					</div>
				</div>
			</div>
			<div className="" id="Contact">
				<div className="bg-neutral-100 dark:bg-stone-600 p-10 text-black dark:text-white w-full ">
					<div className="flex justify-center flex-col m-2 ">
						<h3 className="text-2xl font-bold">Contact me!</h3>
						<h1 className="text-xl font-bold">I&apos;m open to new proposals! 😉</h1>
					</div>
					<Separator className="bg-neutral-400 dark:bg-neutral-200" />
					<Card className="p-5 m-2 flex flex-col gap-2 dark:bg-stone-500 shadow-lg">
						<form>
							<div className="p-2 pb-4">
								<p className="italic text-[14px]">Please fill this form in a decent manner.</p>
							</div>
							<div className="flex flex-col gap-4">
								<div>
									<Input placeholder="Email" />
									<Label className="italic font-[12px] p-2">Example@example.com</Label>
								</div>
								<Textarea placeholder="Message" />
							</div>
							<div className="flex justify-center p-2">
								<Button
									className="bg-stone-50 hover:bg-stone-100 dark:hover:bg-stone-600 text-dark dark:bg-stone-500 dark:text-white"
									type="submit"
								>
									Submit!
								</Button>
							</div>
						</form>
					</Card>
				</div>
			</div>
		</section>
	);
}
const contract = [
	{
		id: 1,
		date: "May 2024 - June 2024",
		role: "Frontend Developer | React & Typescript",
		type: "Intership Contract",
	},
	{
		id: 2,
		date: "July 2024 - October 2024",
		role: "Frontend Developer | React & Typescript",
		type: "Training Contract",
	},
];

const projects = [
	{
		id: 1,
		technologies: "NextJS | TypeScript | TailwindCSS",
		previuw: "/Templade/Templade.png",
		deploy: "https://templade.vercel.app",
	},
];
