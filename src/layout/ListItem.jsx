import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

function ListItem(props){
    let item = props.item;
    return(
        <div className="list_item row" data-filter={item.filter}>
            <div className="left">
                <div className='flex'>
                    <h4 className="title">{item.title}</h4>
                    {
                        item.sale ?
                        <p className="sale">{item.sale}% OFF</p>
                        : null
                    }
                </div>
                {
                    item.menu ?
                        <div className="menu flex">
                            <img
                                className="card_icon"
                                src="/img/icons/menu_icon.png"
                                alt="메뉴 아이콘"
                                />
                            <p className="text">
                                {item.menu}
                            </p>
                        </div>
                    : null
                }     
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
                {
                    item.contact ?
                        <div className="contact flex">
                            <img
                                className="card_icon"
                                src="/img/icons/contact_icon.png"
                                alt="전화 아이콘"
                                />
                            <p className="text">
                                {item.contact}
                            </p>
                        </div>
                    : null
                }                
                {
                    item.contact ?
                        <div className="contact flex">
                            <img
                                className="card_icon"
                                src="/img/icons/hotel_icon.png"
                                alt="호텔 아이콘"
                                />
                            <p className="text">
                                {item.distance}
                            </p>
                        </div>
                    : null
                }
                {/* <div className="address flex">
                    <img
                        className="card_icon"
                        src="/img/icons/location_icon.png"
                        alt="주소 아이콘"
                        />
                    <p className="text">
                        {item.address}
                    </p>
                </div> */}
                <a className="google_maps_btn" target="_blank" href={item.googleMaps}>
                    <img
                        src="/img/icons/google_maps_icon_circle.png"
                        alt="구글 맵 아이콘"
                    />
                    <span>Google Maps</span>
                </a>
            </div>
            <div className="right">
                <div className="store_img">
                {
                    item.img ? 
                        <LazyLoadImage
                            src={item.img}
                            alt={item.title}
                            effect="opacity"
                            className="img"
                        />
                    : <img src="/img/icons/no_img.png" alt="no img" /> 
                }
                </div>
            </div>
        </div>      
    )
}
export default ListItem