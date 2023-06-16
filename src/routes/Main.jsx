import {pageData} from "../data"
import CardItem from "./CardItem"
import Header from "../layout/Header";

function Main() {

	return (
		<>
			<Header></Header>
			<div className="maig_bg_box">
				<div className="overlay"/>
				<img
					className="main_bg_img"
					src="/img/main_bg.jpg"
					alt="배경이미지, 블루 오션 호텔 이미지"
				/>
				<div className="text_box">
					<h4>Blue Ocean Residence Hotel</h4>
					<h1>GUIDE MAP</h1>
					<a
						className="row go_to_hotel_btn"
						target="_blank"
						href="https://www.google.co.kr/maps/place/%EB%B8%94%EB%A3%A8%EC%98%A4%EC%85%98+%EB%A0%88%EC%A7%80%EB%8D%98%EC%8A%A4+%ED%98%B8%ED%85%94/data=!3m1!4b1!4m9!3m8!1s0x357b831e67c49c7b:0x6517c353a4fffbf0!5m2!4m1!1i2!8m2!3d37.4872679!4d126.5635705!16s%2Fg%2F11r4wssddm?entry=ttu"
					>
						<div>Find your way to the HOTEL</div>
						<img
							className="google_map_icon"
							src="/img/icons/google_maps_icon.png"
							alt="구글 맵 아이콘"
						/>
					</a>
				</div>
			</div>
			<div className="card_bg">
				<div className="card_box">
					{
						pageData.map((item,idx)=>(
							<CardItem key={idx} item={item}></CardItem>
						))
					}
				</div>
			</div>
		</>
	);
}

export default Main;
