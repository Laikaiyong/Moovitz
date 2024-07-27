import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function ProjectPage() {
	return (
		<div className='flex flex-col items-center justify-center h-full'>
			<h1 className='text-3xl font-bold'>Projects</h1>
			<HoverEffect items={projects} />
		</div>
	);
}
export const projects = [
	{
		title: "Stripe",
		description: "A technology company that builds economic infrastructure for the internet.",
		link: "https://stripe.com",
		map: (
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15935.648316042638!2d101.67398099999998!3d3.11795795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc498f47c6e729%3A0x8bb7d7059cd7d8d4!2sKL%20Eco%20City%2C%2059200%20Kuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1722092243400!5m2!1sen!2smy'
				className='w-full'
				allowfullscreen='true'
				loading='lazy'
				referrerpolicy='no-referrer-when-downgrade'
			></iframe>
		),
	},
	{
		title: "Netflix",
		description:
			"A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
		link: "https://netflix.com",
		map: (
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15935.648316042638!2d101.67398099999998!3d3.11795795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc498f47c6e729%3A0x8bb7d7059cd7d8d4!2sKL%20Eco%20City%2C%2059200%20Kuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1722092243400!5m2!1sen!2smy'
				className='w-full'
				allowfullscreen='true'
				loading='lazy'
				referrerpolicy='no-referrer-when-downgrade'
			></iframe>
		),
	},
	{
		title: "Google",
		description:
			"A multinational technology company that specializes in Internet-related services and products.",
		link: "https://google.com",
		map: (
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15935.648316042638!2d101.67398099999998!3d3.11795795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc498f47c6e729%3A0x8bb7d7059cd7d8d4!2sKL%20Eco%20City%2C%2059200%20Kuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1722092243400!5m2!1sen!2smy'
				className='w-full'
				allowfullscreen='true'
				loading='lazy'
				referrerpolicy='no-referrer-when-downgrade'
			></iframe>
		),
	},
	{
		title: "Meta",
		description:
			"A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
		link: "https://meta.com",
		map: (
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15935.648316042638!2d101.67398099999998!3d3.11795795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc498f47c6e729%3A0x8bb7d7059cd7d8d4!2sKL%20Eco%20City%2C%2059200%20Kuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1722092243400!5m2!1sen!2smy'
				className='w-full'
				allowfullscreen='true'
				loading='lazy'
				referrerpolicy='no-referrer-when-downgrade'
			></iframe>
		),
	},
];
