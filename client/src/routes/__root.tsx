import { Outlet, createRootRoute } from "@tanstack/react-router";
import Toast from "../components/toast";

export const Route = createRootRoute({
	component: Root,
});

function Root() {
	return (
		<>
			<Toast />
			<Outlet />
		</>
	);
}
