import Image from "next/image";
import github from "@/assets/icons/github.png"
import linkedin from "@/assets/icons/linkedin.png"
import mail from "@/assets/icons/mail.png"
export const FooterComponent = () => {
	return (
		<div className="flex justify-center flex-col items-center bg-neutral-100 text-black dark:bg-black dark:text-white ">
			<div className="inline-flex gap-5 pt-2 px-5 justify-center text-black">
				<a href="https://www.linkedin.com/in/adel-gannem/" target="_blank">
					<Image src={linkedin} alt="Github logo" width={25} />
				</a>
				<a href="https://github.com/AdelGann" target="_blank">
					<Image src={github} alt="Github logo" width={25} />
				</a>
				<a href="mailto:imadelg14@gmail.com" target="_blank">
					<Image src={mail} alt="Mail Logo" width={25} />
				</a>
			</div>
			<div className="p-2 text-sm">
				<h4>© 2024 September - Adel Gannem Fullstack Developer</h4>
			</div>
		</div>
	);
};
