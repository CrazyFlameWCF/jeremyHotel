import React from 'react';
import { IconData } from "./Data/IconData";
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

const dataId = (iconid) => {
  if (iconid === 1) {
    return 'flex-none bg-icon1 m-auto w-72 h-24 hover:bg-white bg-center bg-cover'
  }
  if (iconid === 2) {
    return 'flex-none bg-icon2 m-auto w-72 h-24 hover:bg-white bg-center bg-cover'
  }
  if (iconid === 3) {
    return 'flex-none bg-icon3 m-auto w-72 h-24 hover:bg-white bg-center bg-cover'
  }
  if (iconid === 4) {
    return 'flex-none bg-icon4 m-auto w-72 h-24 hover:bg-white bg-center bg-cover'
  }
  if (iconid === 5) {
    return 'flex-none bg-icon5 m-auto w-72 h-24 hover:bg-white bg-center bg-cover'
  }
  if (iconid === 6) {
    return 'flex-none bg-icon6 m-auto w-72 h-24 hover:bg-white bg-center bg-cover'
  }
  if (iconid === 7) {
    return 'flex-none bg-icon7 m-auto w-72 h-24 hover:bg-white bg-center bg-cover'
  }
  if (iconid === 8) {
    return 'flex-none bg-icon8 m-auto w-72 h-24 hover:bg-white bg-center bg-cover'
  }
  if (iconid === 9) {
    return 'flex-none bg-icon9 m-auto w-72 h-24 hover:bg-white bg-center bg-cover'
  }
  if (iconid === 10) {
    return 'flex-none bg-icon10 m-auto w-72 h-24 hover:bg-white bg-center bg-cover'
  }
  if (iconid === 11) {
    return 'flex-none bg-icon11 m-auto w-72 h-24 hover:bg-white bg-center bg-cover'
  }
  if (iconid === 12) {
    return 'flex-none bg-icon12 m-auto w-72 h-24 hover:bg-white bg-center bg-cover'
  }
  if (iconid === 13) {
    return 'flex-none bg-icon13 m-auto w-72 h-24 hover:bg-white bg-center bg-cover'
  }
  if (iconid === 14) {
    return 'flex-none bg-icon14 m-auto w-72 h-24 hover:bg-white bg-center bg-cover'
  }
  if (iconid === 15) {
    return 'flex-none bg-icon15 m-auto w-72 h-24 hover:bg-white bg-center bg-cover'
  }
  if (iconid === 16) {
    return 'flex-none bg-icon16 m-auto w-72 h-24 hover:bg-white bg-center bg-cover'
  }
  if (iconid === 17) {
    return 'flex-none bg-icon17 m-auto w-72 h-24 hover:bg-white bg-center bg-cover'
  }
  if (iconid === 18) {
    return 'flex-none bg-icon18 m-auto w-72 h-24 hover:bg-white bg-center bg-cover'
  }
}


const OurBrands = (props) => {
  return (
    <>
    <div className="bg-gray-300">
      <p className="font-bold text-blue-800 text-xl pb-2 pl-5 pt-4">Our Brands</p>
      <div className="flex flex-row">
        <div className="hover:bg-white">
          <GoChevronLeft className="h-8 w-8 pl-4"/>

        </div>
        
      <div className="flex flex-row overflow-x-auto">
        {IconData.map((data =>
          <div className={dataId(data.iconid)}>
          </div>))}
      </div>
        <div>
          <GoChevronRight className="h-8 w-8 pr-4 hover:bg-white" />
        </div>
      </div>

    </div>
      </>
      );
}
export default OurBrands;