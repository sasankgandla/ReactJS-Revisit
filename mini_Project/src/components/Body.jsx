import RestrauntContainer from "./RestrauntContainer";
import { DATA } from "../utils/constants";
import { useState } from "react";

export default function Body() {
  // React uses reconciliation algorithm to update the UI efficiently
  // It is also called (diffing algorithm) or (virtual DOM) or (React Fiber)
  // Initially we have some data in the UI. When we click on the button we want to filter the cards which have rating > 4. So when we click on button React will create a new virtual DOM with the updated data and it will compare it with the previous virtual DOM and it will update only the changed parts in the real DOM.

  const [data, setData] = useState(DATA);

  const handleFilterCards = () => {
    setData(data.filter((res) => res.info.avgRating > 4));
  };

  return (
    <div className="body">
      <button onClick={handleFilterCards}>gt 4 rating</button>
      <RestrauntContainer data={data} />
    </div>
  );
}
