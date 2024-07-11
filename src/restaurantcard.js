import { IMG_CDN_URL } from "../constants";
const RestaurantCard=(props)=>{
    return (
        <div className="card">
        <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+
          props.cloudinaryImageId
        }
        />
            <h2>{props.name}</h2>
            <h4>{props.cuisines.join(", ").slice(0,30)}</h4>
            <h4>{props.area}</h4>
            <span>
                <h4><i className="fa-solid fa-star"></i> {props.avgRating}</h4>
                <h4>{props.lastMileTravelString}</h4>
                <h4>{props.costForTwoString}</h4>
            </span>
        </div>
    );
}
export default RestaurantCard
