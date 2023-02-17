import { WellData } from "./Data/WellData";



const YourWellbeing = (props) => {
  return (
    <>
      <p className="font-bold text-blue-800 text-xl pb-2 pt-4 pl-5">Your WellBeing is at the heart of a great stay</p>
      <h3 className="font-semibold pb-2 pl-5"> Discover new ways to thrive.</h3>
      <div className="flex flex-row px-3">
        {WellData.map((data =>
          <div className="m-2">
            <img src = {data.url}/>
            <p className="font-bold">{data.subject}</p>
            <p className="pb-5">{data.description}</p>
            <p className="text-blue-800 underline hover:font-extrabold"><a href='#'>{data.link}</a></p>
            
          </div>))}

      </div>
    </>
  );
}
export default YourWellbeing;