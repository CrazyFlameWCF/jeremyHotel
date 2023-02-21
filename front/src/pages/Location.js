import React from 'react';
import FindHotels from "./FindHotels";
import Footer from "../components/Footer";
import { HotelData } from './Data/HotelDatas';
import { GoogleMap, useLoadScript, MarkerF, InfoWindowF } from '@react-google-maps/api'
import { useState, useEffect } from 'react';

const Location = (props) => {
    
  const { isLoaded } = useLoadScript ({
    googleMapsApiKey : process.env.REACT_APP_GOOGLE_MAP_API
  });
  
  const mapContainerStyle = {
    width: '1/2',
    height: '32em'
  };

  const [ isClicked, setIsClicked ] = useState(false);
  const [ clickedHotel , setClickedHotel ] = useState();

  useEffect(() => {
    console.log(clickedHotel)
  }, [clickedHotel])

  if(!isLoaded) 
    return 'Loading..'

  //데이타 찾기
  const markerHandler = async (e, id) => {
    setClickedHotel();
    let chosenLocation = await HotelData.find((data) => data.id === id )
    await setClickedHotel(chosenLocation)
    setIsClicked(true)
  }
  
    
  return (
  <>
    <body>
      <div className="flex flex-row flex-wrap w-full h-80 bg-edmonton bg-cover bg-center justify-center items-center">
        <div className="flex flex-row h-1/3 w-1/2">
          <div>
            <p className="text-white text-2xl font-extrabold">FIND A HOTEL</p>
            <p className="text-white text-2xl font-extrabold">AND PLAN THE</p>
          </div>
          <div>
            <p className="text-blue-400 text-3xl font-extrabold font-Kaushan py-2 px-2">perfect getaway</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row w-full">
        <div>
          <FindHotels markerHandler={markerHandler} />
        </div>
        <div className='w-1/2 h-96 bg-green-200'>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={10}
              center={{ lat:53.549232630652185, lng:-113.50531385835242}}
            >
              {HotelData.map(data => {
              return <MarkerF key={data.text}
              position={{lat:data.lat, lng:data.lng}}
              onClick={(e) => {markerHandler(e, data.id)}}
              />
              })}   

              {isClicked && !!clickedHotel ?
                <InfoWindowF 
                position={{ lat: clickedHotel.lat, lng: clickedHotel.lng }}
                onCloseClick={(e) => {setIsClicked(false)}}
                >
                  <div>
                    <h3 className="font-bold">{clickedHotel.text}</h3>
                    <h3>Phone: {clickedHotel.phone}</h3>
                    
                  </div>
                </InfoWindowF>
                :
                null
              } 
              
                          
            </GoogleMap>
        </div>

      </div>
    </body>

    <Footer />
  </>
)}
export default Location;