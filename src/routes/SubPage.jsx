import ListItem from "../layout/ListItem"
import SubHeader from "../layout/SubHeader"

function SubPage(props) {
    const item = props.item;
    
    function handleFilter(e){
        const filterBtn = document.querySelectorAll('.filter_btn');
        const listItem = document.querySelectorAll('.list_item');
        filterBtn.forEach((item)=>item.classList.remove('active')); 
        e.currentTarget.classList.add('active')

        const filter = e.target.dataset.filter;
        listItem.forEach(item=>{
            if(filter ==='all'){
                item.style.display = 'flex';
            }else{
                if(item.dataset.filter === filter){ 
                    item.style.display='flex';
                }else{ 
                    item.style.display='none'
                }
            }
        })
    }
    return (
        <>
            <SubHeader></SubHeader>
            <div className="sub_conatiner">
                <div className="content_box sub_title_box">
                    <div>
                    <img
                        className="icon"
                        src={item.img}
                        alt={item.title}
                    />
                    </div>
                    <div>
                    <p className="sub_title">{item.title}</p>
                    <p className="kr_desc">{item.desc}</p>
                    </div>
                </div>
            <div className="border" />
            <div className="content_box list_item_box">

            {
                item.url === 'restaurant' ? <TabMenu filterFunc={handleFilter}></TabMenu> : null
            }
            {
                item.data.map((item, idx) => (
                    <ListItem item={item} key={idx}></ListItem>
                ))
            }
            </div>
            </div>


        </>
    );
}
function TabMenu(props){
    return(
        <div className="filter_btn_box">
            <div data-filter="all" className="filter_btn active" onClick={props.filterFunc}>전체</div>
            <div data-filter="restaurant" className="filter_btn" onClick={props.filterFunc}>식당</div>
            <div data-filter="cafe" className="filter_btn" onClick={props.filterFunc}>카페</div>
            <div data-filter="breakfast" className="filter_btn" onClick={props.filterFunc}>조식</div>
        </div>
    )
}
export default SubPage;
