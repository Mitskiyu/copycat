import nukoCamera from "../assets/gifs/nukoCamera.gif";

export default function Header() {
	return (
		<>
			<header className="flex flex-row justify-center font-koden">
				<div className="flex flex-col gap-2">
					<h1 className="sm:text-8xl text-7xl text-primary">Copycat</h1>
					<div className="flex flex-row mt-1">
						<h2
							lang="ja"
							className="sm:text-5xl text-4xl text-secondary tracking-[-0.065em]"
						>
							コピキャット
						</h2>
						<img
							className="sm:-ml-1 sm:-mt-4 ml-0 -mt-3 sm:w-16 sm:h-16 w-12 h-12"
							src={nukoCamera}
							alt="nukoCamera"
						/>
					</div>
				</div>
			</header>
		</>
	);
}
