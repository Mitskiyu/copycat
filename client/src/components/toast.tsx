import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import nukoSurprised from "../assets/gifs/nukoSurprised.gif";
import nukoExcited from "../assets/gifs/nukoExcited.gif";

export default function Toast() {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 640);
		};
		handleResize();

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<Toaster
			position={isMobile ? "top-center" : "top-right"}
			toastOptions={{
				error: {
					style: {
						color: "red",
					},
					icon: (
						<img
							src={nukoSurprised}
							alt="nukoSurprised"
							style={{ width: 30, height: 30 }}
						/>
					),
				},
				success: {
					style: {
						color: "#00ff40",
					},
					icon: (
						<img
							src={nukoExcited}
							alt="nukoSurprised"
							style={{ width: 30, height: 30 }}
						/>
					),
				},
				style: {
					fontFamily: "Kodenmachou, sans-serif",
				},
			}}
		/>
	);
}
