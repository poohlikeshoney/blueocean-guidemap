import {Container, Nav, Navbar} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useQuery} from "react-query";
import banner_img from "../img/main_bg.jpg";
import google_maps_icon from "../img/icons/google_maps_icon.png";
import restaurant from "../img/icons/restaurant.png"
import '../assets/main.css';

export function Appbar() {
	let navigate = useNavigate(); // 페이지 이동 도와주는 함수
	return (
		<>
			<div className="maig_bg_box">
				<div className="overlay"/>
				<img
					className="main_bg_img"
					src={banner_img}
					alt="배경이미지, 산에서 자라는 과실나무들."
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
							src={google_maps_icon}
							alt="구글 맵 아이콘"
						/>
					</a>
				</div>
			</div>
			<div className="card_bg">
				<div className="card_box">
					<a className="card" href="/restaurant">
						<div>
							<p className="title">Restaurant</p>
							<p className="kr_desc">레스토랑/카페</p>
						</div>
						<div className="row">
							<img
								className="icon"
								src={restaurant}
								alt="레스토랑 아이콘"
							/>
							<img
								className="arrow"
								src="/assets/img/icons/arrow.png"
								alt="화살표"
							/>
						</div>
					</a>
					<a className="card" href="/convenience_store">
						<div>
							<p className="title">Convenience store</p>
							<p className="kr_desc">편의점</p>
						</div>
						<div className="row">
							<img
								className="icon"
								src="/assets/img/icons/convenience_store.png"
								alt="편의점 아이콘"
							/>
							<img
								className="arrow"
								src="/assets/img/icons/arrow.png"
								alt="화살표"
							/>
						</div>
					</a>
					<a className="card" href="/pharmacy">
						<div>
							<p className="title">Pharmacy</p>
							<p className="kr_desc">약국</p>
						</div>
						<div className="row">
							<img
								className="icon"
								src="/assets/img/icons/pharmacy.png"
								alt="약국 아이콘"
							/>
							<img
								className="arrow"
								src="/assets/img/icons/arrow.png"
								alt="화살표"
							/>
						</div>
					</a>
					<a className="card" href="/hospital">
						<div>
							<p className="title">Hospital</p>
							<p className="kr_desc">병원</p>
						</div>
						<div className="row">
							<img
								className="icon"
								src="/assets/img/icons/hospital.png"
								alt="병원 아이콘"
							/>
							<img
								className="arrow"
								src="/assets/img/icons/arrow.png"
								alt="화살표"
							/>
						</div>
					</a>
					<a className="card" href="/household_goods_store">
						<div>
							<p className="title">Household goods store</p>
							<p className="kr_desc">생활용품 판매점</p>
						</div>
						<div className="row">
							<img
								className="icon"
								src="/assets/img/icons/household_goods_store.png"
								alt="생활용품 판매점 아이콘"
							/>
							<img
								className="arrow"
								src="/assets/img/icons/arrow.png"
								alt="화살표"
							/>
						</div>
					</a>
					<a className="card" href="/coin_laundry">
						<div>
							<p className="title">Coin Laundry</p>
							<p className="kr_desc">코인세탁소</p>
						</div>
						<div className="row">
							<img
								className="icon"
								src="/assets/img/icons/coin_laundry.png"
								alt="코인세탁소 아이콘"
							/>
							<img
								className="arrow"
								src="/assets/img/icons/arrow.png"
								alt="화살표"
							/>
						</div>
					</a>
					<a className="card" href="/exchange">
						<div>
							<p className="title">Exchange</p>
							<p className="kr_desc">환전소</p>
						</div>
						<div className="row">
							<img
								className="icon"
								src="/assets/img/icons/exchange.png"
								alt="환전소 아이콘"
							/>
							<img
								className="arrow"
								src="/assets/img/icons/arrow.png"
								alt="화살표"
							/>
						</div>
					</a>
					<a className="card" href="/tourist">
						<div>
							<p className="title">Tourist</p>
							<p className="kr_desc">관광지</p>
						</div>
						<div className="row">
							<img
								className="icon"
								src="/assets/img/icons/tourist.png"
								alt="관광지 아이콘"
							/>
							<img
								className="arrow"
								src="/assets/img/icons/arrow.png"
								alt="화살표"
							/>
						</div>
					</a>
				</div>
			</div>
		</>

	);
}
