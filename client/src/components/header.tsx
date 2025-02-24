import { Link, useLocation } from "@tanstack/react-router";
import nukoCamera from "../assets/gifs/nukoCamera.gif";

const hoverStyle =
	"cursor-pointer transform transition duration-300 ease-out hover:-translate-y-1";

export default function Header() {
	const pathname = useLocation().pathname;
	const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		const features = document.getElementById("features");
		if (features) {
			features.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<>
			<header className="flex flex-row justify-between w-full font-koden">
				<div className="flex flex-col gap-2">
					<h1 className="sm:text-8xl text-5xl text-primary">Copycat</h1>
					<div className="flex flex-row mt-1">
						<h2
							lang="ja"
							className="sm:text-5xl text-xl text-secondary tracking-[-0.065em]"
						>
							コピキャット
						</h2>
						<img
							className="sm:-ml-1 sm:-mt-4 ml-2 -mt-3 sm:w-16 sm:h-16 w-10 h-10"
							src={nukoCamera}
							alt="nukoCamera"
						/>
					</div>
				</div>
				<ul className="flex flex-col justify-start text-right sm:text-5xl text-xl sm:mt-2 mt-0 gap-y-0.5 text-secondary">
					<li
						className={`${pathname === "/" ? "text-primary" : "text-secondary"} ${hoverStyle}`}
					>
						<Link to="/">home</Link>
					</li>
					<li
						className={`${pathname === "/about" ? "text-primary" : "text-secondary"} ${hoverStyle}`}
					>
						<Link to="/about">about</Link>
					</li>
					<li className={`${hoverStyle}`}>
						{pathname === "/about" ? (
							<Link to="/" hash="features">
								features
							</Link>
						) : (
							<button
								onClick={(e) => {
									handleScroll(e);
								}}
								className="cursor-pointer"
							>
								features
							</button>
						)}
					</li>
				</ul>
			</header>
		</>
	);
}
