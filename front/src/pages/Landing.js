// import { TakeYourStayFurtherData } from "./Datas";
import TakeYourStayFurther from "./TakeYourStayFurther";
import GetTheMostFromYourStay from "./GetTheMostFromYourStay";
import JoinHiltonHonors from "./JoinHiltonHonors";
import YourWellbeing from "./YourWellbeing";
import ExperienceAStay from "./ExperienceAStay";
import TheHeart from "./TheHeart";
import OurBrands from "./OurBrands";
import Footer from "../components/Footer";

const Landing = (props) => {


  return (
    <>
    <div>
      <body>
            
        <JoinHiltonHonors />    
            
        <GetTheMostFromYourStay/>

        <TakeYourStayFurther />

        <YourWellbeing />

        <ExperienceAStay />

        <TheHeart />

        <OurBrands />

      </body>
    <Footer />
    </div>
    </>
  );
}
export default Landing;