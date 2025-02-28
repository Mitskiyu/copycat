export async function handleUpload(file: File) {
	const uploadURL = "http://localhost:8080";
	const formData = new FormData();
	formData.append("image", file);

	await fetch(uploadURL + "/upload", {
		method: "POST",
		body: formData,
	})
		.then((res) => res.json())
		.then((data) => console.log("Success:", data))
		.catch((err) => console.log("Error:", err));
}
