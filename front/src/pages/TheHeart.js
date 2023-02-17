import { HeartData } from "./Data/HeartData";

const TheHeart = (props) => {
  return (
    <>
      <p className="font-bold text-blue-800 text-xl pb-2 pl-5 pt-4">The heart of a great trip is a great stay</p>
      <h3 className="font-semibold pb-2 pl-5">Find new ways to make the most of your stay.</h3>
      <div className="flex flex-row px-3">
        {HeartData.map((data =>
          <div className="m-2">
            <img src = {data.url}/>
            <p className="font-bold">{data.subject}</p>
            <p>{data.description}</p>
          </div>))}
      </div>
    </>
  );
}
export default TheHeart;