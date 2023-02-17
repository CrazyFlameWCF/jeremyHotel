import { TakeYourStayFurtherData } from "./Data/Datas";

const dataId = (id) => {
  if (id === 1) {
    return 'flex bg-take1 w-1/2 h-48 p-6 font-bold bg-cover bg-center justify-center items-center text-white hover:text-blue-600 bg-blend-multiply bg-gray-700 hover:bg-opacity-30'
  }
  if (id === 2) {
    return 'flex bg-take2 w-1/2 h-48 p-2 font-bold bg-cover bg-center justify-center items-center text-white hover:text-blue-600 bg-multiply- hover:bg-opacity-50 bg-blend-multiply bg-gray-700 hover:bg-opacity-30'
  }
  if (id === 3) {
    return 'flex bg-take3 w-1/2 h-48 p-2 font-bold bg-cover bg-center justify-center items-center text-white hover:text-blue-600 bg-blend-multiply bg-gray-700 hover:bg-opacity-30'
  }
  if (id === 4) {
    return 'flex bg-take4 w-1/2 h-48 p-2 font-bold bg-cover bg-center justify-center items-center text-white hover:text-blue-600 bg-blend-multiply bg-gray-700 hover:bg-opacity-30'
  }
  if (id === 5) {
    return 'flex bg-take5 w-1/2 h-48 p-2 font-bold bg-cover bg-center justify-center items-center text-white hover:text-blue-600 bg-blend-multiply bg-gray-700 hover:bg-opacity-30'
  }
  if (id === 6) {
    return 'flex bg-take6 w-1/2 h-48 p-2 font-bold bg-cover bg-center justify-center items-center text-white hover:text-blue-600 bg-blend-multiply bg-gray-700 hover:bg-opacity-30'
  }
  if (id === 7) {
    return 'flex bg-take7 w-1/2 h-48 p-2 font-bold bg-cover bg-center justify-center items-center text-white hover:text-blue-600 bg-blend-multiply bg-gray-700 hover:bg-opacity-30'
  }
}
  

const TakeYourStayFurther = (props) => {
  return (
    <>
    <div>
      <p className="font-bold text-blue-800 text-xl pb-2 pl-5">Take Your Stay Further</p>
      <p className="pb-2 pl-5">Find the perfect stay will our exclusive deals</p>
        <div className="flex flex-wrap flex-row justify-center items-center px-4">
          
          {TakeYourStayFurtherData.map(data =>
          <div className={dataId(data.id)}>
            <h3 className="text-2xl">{data.text}</h3>
          </div>
          )}

        </div>

    </div>
    </>
  );
}
export default TakeYourStayFurther;