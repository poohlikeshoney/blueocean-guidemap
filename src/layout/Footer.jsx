function Footer(){
    return (
        <>
            <div className="arrow_up" onClick={()=>{window.scrollTo({ top: 0, behavior: "smooth" })}}>
                <i className="fas fa-long-arrow-alt-up" />
            </div>
            <footer>©copyright 2024. Guide Map. All rights reserved.</footer>
        </>
    )
}

export default Footer