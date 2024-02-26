import Header from "./Header";
import homeimg from '../../assets/Images/homeimg.png';
import Footer from "./Footer";


export default function Home() {
  return (
    <div>
   <Header/>
   <div className="home-image">
   <img src={homeimg}></img>
   </div>
   <Footer/>
    </div>
  )
}
