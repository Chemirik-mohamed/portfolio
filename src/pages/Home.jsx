import { About } from "./About";
import { CTA } from "../sections/CTA/CTA";
import { Hero } from "../sections/Hero/Hero";
import { Process } from "../sections/Process/Process";
import { Projects } from "../sections/Projects/Projects";
import { Signature } from "../sections/Signature/Signature";
import { Testimonial } from "../sections/Testimonial/Testimonial";

export function Home() {
	return (
		<main id="home">
			<Hero />
			<Signature />
			<About />
			<Projects />
			<Process />
			<Testimonial />
			<CTA />
		</main>
	);
}
