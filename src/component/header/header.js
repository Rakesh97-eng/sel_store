
import "./header.css"
const Header = ()=>{
    function scrollTo(id) {
        document.getElementById(id).scrollIntoView();
      }
    return(
        <>
            <div className="head_container">
               <div>Store</div>
                <div className="head_list">
                   <div onClick={()=>scrollTo('Home')}>Home</div>
                   <div>About us</div>
                   <div onClick={()=>scrollTo('products')}>Product</div>
                   <div>Contact</div>
                   <div>Cart</div>
                </div>
            </div>
        </>
    )
}
export default Header;