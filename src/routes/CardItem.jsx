import { useNavigate } from 'react-router-dom'

function CardItem(props) {
	let navigate = useNavigate(); 
  	const item = props.item;
  return (
    <>
        <div className="card" onClick={()=>{ navigate(`/${item.url}`) }}>
			<div>
				<p className="title">{item.title}</p>
				<p className="kr_desc">{item.desc}</p>
			</div>
			<div className="row">
				<img
					className="icon"
					src={item.img}
					alt={item.title}
				/>
				<img
					className="arrow"
					src="/img/icons/arrow.png"
					alt="화살표"
				/>
			</div>
		</div>
    </>
  );
}

export default CardItem;
