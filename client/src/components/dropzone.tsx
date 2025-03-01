import { useCallback } from "react";
import { useDropzone, FileRejection } from "react-dropzone";
import { handleUpload } from "../lib/handle-upload";
import toast from "react-hot-toast";
import nukoPeekTop from "../assets/gifs/nukoPeekTop.gif";

interface DropzoneProps {
	title: string;
	subtitle: string;
}

export default function Dropzone({ title, subtitle }: DropzoneProps) {
	const onDrop = useCallback((acceptedFiles: File[]) => {
		const file = acceptedFiles[0];
		if (file) {
			try {
				handleUpload(file);
			} catch {
				toast.error("something went wrong");
			}
		}
	}, []);

	const onDropRejected = useCallback((fileRejections: FileRejection[]) => {
		fileRejections.forEach(({ errors }) => {
			errors.forEach((error) => {
				switch (error.code) {
					case "file-invalid-type":
						toast.error("i can only accept jpg, png and gif files!");
						break;
					case "file-too-large":
						toast.error("i can only accept files smaller than 10MB!");
						break;
					case "too-many-files":
						toast.error("i can only process one file at a time!");
						break;
					default:
						toast.error("something went wrong");
				}
			});
		});
	}, []);

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		onDropRejected,
		accept: {
			"image/jpeg": [".jpg", ".jpeg", ".jfif", ".pjpeg", ".pjp"],
			"image/png": [".png"],
			"image/gif": [".gif"],
		},
		maxSize: 10485760,
		maxFiles: 1,
	});

	return (
		<>
			<div
				{...(getRootProps() as React.HTMLAttributes<HTMLDivElement>)}
				className="rounded-lg mx-auto max-w-2xl w-full flex flex-col items-center justify-center space-y-2 pb-4 min-h-32 bg-secondary focus:outline-none"
			>
				<div className="flex flex-col items-center text-center">
					<img className="w-15 h-15" src={nukoPeekTop} alt="nukoPeekTop" />
					<div className="sm:w-60 sm:h-24 w-48 h-16 rounded-xl border-solid sm:border-3 border-2 border-primary sm:ring-3 ring-2 ring-white font-koden text-secondary hover:text-black sm:text-3xl text-2xl cursor-pointer transition transform duration-300 ease-out hover:-translate-y-1 hover:scale-105 bg-gradient-to-t from-[#e0e5e9] to-[#fcfcfb] drop-shadow-lg flex items-center justify-center">
						<input
							name="image"
							{...(getInputProps() as React.InputHTMLAttributes<HTMLInputElement>)}
						/>
						<p>{title}</p>
					</div>
				</div>
				<p className="font-koden sm:text-xl text-md">{subtitle}</p>
			</div>
		</>
	);
}
