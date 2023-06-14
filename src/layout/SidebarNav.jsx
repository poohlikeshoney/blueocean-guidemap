import { pageData } from '../data';
import { useNavigate } from 'react-router-dom'

function SidebarNav(props) {
	let navigate = useNavigate();
	const handleSidebar = (item)=> ()=>{
		props.setSidebar(false)
		navigate(`/${item.url}`)
	}

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
							<div className="menu_item" onClick={handleSidebar(item)} key={idx}>
								<p className="flex">
									<span className="square" />
									<span className="title">{item.title}</span>
								</p>
								<p className="kr_desc">{item.desc}</p>
							</div>
						))
					}
				</div>
			</div>
		</>
	);
}

export default SidebarNav