function ListItem(props){
    let item = props.item;
    return(
        <div className="list_item row">
            <div className="left">
                <h4 className="title">{item.title}</h4>
                <div className="opening_hour flex">
                <img
                    className="card_icon"
                    src="/img/icons/opening_hours_icon.png"
                    alt="영업시간 아이콘"
                    />
                <p className="text">
                    {item.openingHours}
                    <span>{item.openingHoursMemo ? `(${item.openingHoursMemo})` : ""}</span>
                </p>
                </div>
                <div className="address flex">
                <img
                    className="card_icon"
                    src="../img/icons/location_icon.png"
                    alt="주소 아이콘"
                    />
                <p className="text">
                    {item.address}
                </p>
                </div>
                <a className="google_maps_btn flex" target="_blank" href={item.googleMaps}>
                <img
                    src="../img/icons/google_maps_icon_circle.png"
                    alt="구글 맵 아이콘"
                />
                <span>Google Maps</span>
                </a>
            </div>
            <div className="right">
                <div className="store_img">
                <img src={item.img} alt={item.title} />
                </div>
            </div>
        </div>      
    )
}
export default ListItem