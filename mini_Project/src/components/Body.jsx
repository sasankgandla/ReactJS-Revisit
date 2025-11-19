import RestrauntContainer from "./RestrauntContainer";
import { useEffect, useState } from "react";

export default function Body() {
  // React uses reconciliation algorithm to update the UI efficiently
  // It is also called (diffing algorithm) or (virtual DOM) or (React Fiber)
  // Initially we have some data in the UI. When we click on the button we want to filter the cards which have rating > 4. So when we click on button React will create a new virtual DOM with the updated data and it will compare it with the previous virtual DOM and it will update only the changed parts in the real DOM.

  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // Runs after the first render only(after the component is mounted)
  useEffect(()=>{
    const fetchData = async ()=> {
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
      const data = await response.json();
      setData(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredData(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    fetchData();
  },[]);

  const handleFilterCards = () => {
    setFilteredData(data.filter((res) => res.info.avgRating > 4));
  };

  const handleSearchCards = (e) => {
    const searchValue = e.target.value;
  setSearchText(searchValue);
    if(searchText.length > 0) {
      const filteredData = data.filter(res => res.info.name.toLowerCase().includes(searchValue.toLowerCase()));
      setFilteredData(filteredData);
      if(filteredData.length == 0) {
        setErrorMessage("No restaurant found with the searched name")
      } else {
        setErrorMessage("");
      }
    }
    else {
      setFilteredData(data);
      setErrorMessage("");
    }
  }

  return (
    <div className="body">
      <input type="text" name="" id="" value={searchText} onChange={handleSearchCards} />
      <button onClick={handleFilterCards}>gt 4 rating</button>
      {
        errorMessage.length == 0 && filteredData.length === 0 ? (
          <h1>Loading....</h1>
        ): errorMessage.length > 0 ? (<h1>{errorMessage}</h1>) : (
          <RestrauntContainer data={filteredData} />
        )
      }
    </div>
  );
}
