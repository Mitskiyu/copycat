interface CardProps {
	image: React.ReactNode;
	title: React.ReactNode;
	subtitle: React.ReactNode;
	content: React.ReactNode;
}

export default function Card({ image, title, subtitle, content }: CardProps) {
	return (
		<>
			<div className="w-80 sm:h-80 h-64 rounded-xl border-solid sm:border-3 border-2 border-primary sm:ring-3 ring-2 ring-white transition transform duration-300 ease-out hover:-translate-y-1 bg-gradient-to-t from-[#e0e5e9] to-[#fcfcfb] drop-shadow-lg">
				<div className="flex flex-row justify-start gap-x-2">
					{image}
					<div className="flex flex-col">
						{title}
						{subtitle}
					</div>
				</div>
				<div className="flex justify-center items-center">{content}</div>
			</div>
		</>
	);
}

export function Image({ url, alt }: { url: string; alt: string }) {
	return (
		<img className="sm:w-15 sm:h-15 w-12 h-12 mt-0 ml-1" src={url} alt={alt} />
	);
}

export function Title({ title }: { title: string }) {
	return <h1 className="sm:text-3xl text-xl font-koden text-black">{title}</h1>;
}

export function Subtitle({ subtitle }: { subtitle: string }) {
	return (
		<h2 className="sm:text-2xl text-lg font-koden text-secondary">
			{subtitle}
		</h2>
	);
}

export function Content({ url, alt }: { url: string; alt: string }) {
	return <img className="sm:w-72 sm:h-36 w-48 h-32" src={url} alt={alt} />;
}
