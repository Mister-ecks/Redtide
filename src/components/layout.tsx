import Header from "./Header"



export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	//${jose.variable} font-jose ${kanit.variable} font-kanit
	return (
		<div className="mx-auto">
			<Header />
			{children}
			{/* <Footer /> */}
		</div>
	);
}
