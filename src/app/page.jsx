import { Suspense } from "react";
import AttentionComponent from "./(components)/Attention";
import CoupleComponent from "./(components)/Couple";
import Galeri from "./(components)/Galeri";
import SectionComponent from "./(components)/Section";
import Gift from "./(components)/Gift";
import Map from "./(components)/Map";

const MainPage = () => {
	return (
		<>
			<Suspense>
				<div className="w-full min-h-screen relative">
					<SectionComponent />
					<CoupleComponent />
					<AttentionComponent />
					<Map/>
					<Galeri />
					<Gift/>
				</div>
			</Suspense>
		</>
	)
}

export default MainPage