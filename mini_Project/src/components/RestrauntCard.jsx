
import {SWIGGY_IMG_CDN_URL} from "../utils/constants";

export default function RestrauntCard (props) {
  const { name, cuisines,  avgRating, cloudinaryImageId } = props;
  return (
    <div className="restraunt-card">
      <img src={SWIGGY_IMG_CDN_URL+cloudinaryImageId} alt="restraunt-logo" />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating} stars</p>
    </div>
  );
};