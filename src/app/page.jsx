"use client"
import { Suspense, useEffect, useRef } from "react";
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
				<audio autoPlay>
					<source src="/musik.mp3" type="audio/mpeg" />
				</audio>
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