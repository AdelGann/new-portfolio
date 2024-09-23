import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { ModeToggle } from "./toggle-button";
import Link from "next/link";

export const NavBarComponent = () => {
	return (
		<div className="flex fixed w-full p-3 flex-wrap justify-between  bg-neutral-100 text-black dark:bg-black dark:text-white mb-10">
			<NavigationMenu className="flex justify-between gap-10 w-full m-2 rounded-lg">
				<NavigationMenuList>
					<NavigationMenuItem className="w-full ">
						<Link href={"#home"} legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
						</Link>
						<Link href={"#About"} legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								About
							</NavigationMenuLink>
						</Link>
						<Link href={"#Experience"} legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Experience
							</NavigationMenuLink>
						</Link>
						<Link href={"#Projects"} legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Projects
							</NavigationMenuLink>
						</Link>
						<Link href={"#Contact"} legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Contact
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
			<NavigationMenu className="flex justify-between gap-10 w-full m-2 rounded-lg">
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuLink>
							<ModeToggle />
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
};
