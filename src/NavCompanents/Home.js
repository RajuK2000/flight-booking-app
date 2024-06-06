import Footer from '../Components/Footer/footer';
import Home from '../Components/Home/home';
import Info from '../Components/Info/info';
import Language from '../Components/Language/language';
import NavBar from '../Components/NavBar/navBar';
import Search from '../Components/Search/search';
import Subscribe from '../Components/Subcribers/Subcribe';
import Support from '../Components/Support/support';
import Travelars from '../Components/Travelers/travelers';

const HomePage=()=>{
    return(
        <>
  <NavBar/>
  <Home/>
  <Search/>
  <Support/>
  <Info/>
  <Language/>
  <Travelars/>
  <Subscribe/>
  <Footer/>
        </>
    )
}
export default HomePage