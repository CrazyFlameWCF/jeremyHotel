import { ExpData } from "./Data/ExpData";

const dataId = (locaid) => {
  if (locaid === 1) {
    return 'flex bg-loca1 w-1/3 h-48 p-2 font-bold bg-cover bg-center justify-center items-center text-white hover:text-blue-600 bg-blend-multiply bg-gray-700 hover:bg-opacity-30'
  }
  if (locaid === 2) {
    return 'flex bg-loca2 w-1/3 h-48 p-2 font-bold bg-cover bg-center justify-center items-center text-white hover:text-blue-600 bg-blend-multiply bg-gray-700 hover:bg-opacity-30'
  }
  if (locaid === 3) {
    return 'flex bg-loca3 w-1/3 h-48 p-2 font-bold bg-cover bg-center justify-center items-center text-white hover:text-blue-600 bg-blend-multiply bg-gray-700 hover:bg-opacity-30'
  }
}

const ExperienceAStay = (props) => {
  return (
    <>
      <div className="pt-4">
        <p className="font-bold text-blue-800 text-xl pb-2 pl-5">Experience a Stay like no other</p>
        <p className="font-semibold pl-5">Stay warm in our hottest destinations</p>
        <div className="flex flex-row flex-wrap px-5 m-1">

          {ExpData.map((data, index) =>
            <div className={dataId(data.locaid)}>
              <h3 className="text-2xl">{data.text}</h3>
            </div>
          )}

        </div>

      </div>
    </>
  );
}
export default ExperienceAStay;