import { pageData } from '../data';

function SidebarNav(props) {
	return (
		<>
			<div className={`sidebar ${ props.sidebar === true ? "active" : "" }`}>
				<div className="sidebar_menu">
					<div className="close_icon" onClick={ ()=>{props.setSidebar(false)} }>
						<i className="fas fa-times" />
					</div>
					<div className="category flex">
					<img
						className="category_icon"
						src="../img/icons/location_icon_green.png"
						alt="길찾기 아이콘"
					/>
					<p>길찾기</p>
					</div>
					{
						pageData.map((item,idx)=>(
							<a href={`/${item.url}`} key={idx}>
								<div className="menu_item">
									<p className="flex">
									<span className="square" />
									<span className="title">{item.title}</span>
									</p>
									<p className="kr_desc">{item.desc}</p>
								</div>
							</a>
						))
					}
				</div>
			</div>
		</>
	);
}

export default SidebarNav