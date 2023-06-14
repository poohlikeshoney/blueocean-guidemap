import ListItem from "../layout/ListItem"

function SubPage(props) {
    const item = props.item;
  return (
    <>
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
            item.data.map((item, idx) => (
                <ListItem item={item} key={idx}></ListItem>
            ))
        }
        </div>
        </div>


    </>
  );
}

export default SubPage;
