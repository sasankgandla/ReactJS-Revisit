import RestrauntCard from "./RestrauntCard";

export default function RestrauntContainer({data}) {
  return (
    <div className="restraunt-container">
      {
        data.map((restaurant) => {
          return (
            <RestrauntCard
              key={restaurant.info.id}
              {...restaurant.info}
            />
          )
        })
      }
    </div>
  );
};