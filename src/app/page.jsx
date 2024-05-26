import AttentionComponent from "./(components)/Attention";
import CoupleComponent from "./(components)/Couple";
import SectionComponent from "./(components)/Section";

const MainPage = () => {
	return (
		<>
			<div className="w-full min-h-screen">
				<SectionComponent/>
				<CoupleComponent />
				<AttentionComponent />
			</div>
		</>
	);
}

export default MainPage