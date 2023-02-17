import { HotelData } from "./Data/HotelDatas";

const dataId = (id) => {
  if (id === 1) {
    return 'bg-doubletree bg-center bg-cover bg-blend-multiply bg-gray-700 hover:bg-opacity-30 text-white hover:text-blue-700'
  }
  if (id === 2) {
    return 'bg-garden bg-center bg-cover bg-blend-multiply bg-gray-700 hover:bg-opacity-30 text-white hover:text-blue-700'
  }
  if (id === 3) {
    return 'bg-doubletree2 bg-center bg-cover bg-blend-multiply bg-gray-700 hover:bg-opacity-30 text-white hover:text-blue-700'
  }
  if (id === 4) {
    return 'bg-home2 bg-center bg-cover bg-blend-multiply bg-gray-700 hover:bg-opacity-30 text-white hover:text-blue-700'
  }
  if (id === 5) {
    return 'bg-hampton bg-center bg-cover bg-blend-multiply bg-gray-700 hover:bg-opacity-30 text-white hover:text-blue-700'
  }
}


const FindHotels = ({markerHandler}) => {
  return (
    <>
    <div className="flex flex-col w-full justify-center">

      {HotelData.map(data =>
        <div className={dataId(data.id)} onClick={(e) => markerHandler(e, data.id)}>
          <h3 className="p-10 text-2xl font-extrabold">{data.text}</h3>
          
        </div>)}

    </div>

    </>


  );
}
export default FindHotels;