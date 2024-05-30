import { Suspense } from "react";
import AttentionComponent from "./(components)/Attention";
import CoupleComponent from "./(components)/Couple";
import Galeri from "./(components)/Galeri";
import SectionComponent from "./(components)/Section";

const MainPage = () => {
	return (
		<>
			<Suspense>
				<div className="w-full min-h-screen relative">
					<SectionComponent />
					<CoupleComponent />
					<AttentionComponent />
					<Galeri />
					<div className="w-full flex justify-center py-4">
						<div className="w-5/6 "></div>
					</div>
				</div>
			</Suspense>
		</>
	)
}

export default MainPage