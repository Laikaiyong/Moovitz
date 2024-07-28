import { HoverEffect } from "@/components/ui/card-hover-effect";
import Sidebar from "@/components/custom/Sidebar";
import Image from "next/image";

export default function ProjectPage() {
	return (
		<>
			<Sidebar />
			<div className='flex flex-col items-center justify-center h-full'>
				<h1 className='text-3xl font-bold'>Projects</h1>
				<HoverEffect items={projects} />
			</div>
		</>
	);
}
export const projects = [
	{
		title: "Kuala Terengganu Station",
		description: "New Station in Terengganu State",
		link: "https://stripe.com",
		map: (
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63558.29586065016!2d103.1023526!3d5.3567764!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6582bd580d37785%3A0x3f4b7eaf940e873c!2sHomestay%20Camelia%20Kuala%20Terengganu%202%20-%20Orkid%20House!5e0!3m2!1sen!2smy!4v1722136183217!5m2!1sen!2smy"className="w-full"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
		),
	},
	{
		title: "Sports Heroes Station",
		description:
			"Station maintenance due to spoilt train lane.",
		link: "https://netflix.com",
		map: (
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.7459906366216!2d101.56687621113974!3d3.1615047530620517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4fa873016ccf%3A0x4534c17c3e7649ac!2sSport%20Heroes!5e0!3m2!1sen!2smy!4v1722136079247!5m2!1sen!2smy"  className="w-full" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
		),
	},
	{
		title: "XsollaCurine - Mont Kiara Line",
		description:
			"New Bus Line",
		link: "https://google.com",
		map: (
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.909164083067!2d101.67139551113965!3d3.1187274533245617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49a6a540b63f%3A0xad61234d5d53d7f4!2sXsolla%20Curine%20Academy!5e0!3m2!1sen!2smy!4v1722136053426!5m2!1sen!2smy"  className="w-full"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
		),
	},
	{
		title: "Lata Damak Station",
		description:
			"New bus station",
		link: "https://meta.com",
		map: (
			<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1017363.1131501616!2d100.7666834!3d5.0916299!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31b549904332275f%3A0x603638f5fd208313!2sLata%20Damak!5e0!3m2!1sen!2smy!4v1722135934254!5m2!1sen!2smy"  className="w-full"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
		),
	},
];
