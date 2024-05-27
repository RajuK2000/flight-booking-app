 import './main.css';
import Footer from './Components/Footer/footer';
import Home from './Components/Home/home';
import Info from './Components/Info/info';
import Language from './Components/Language/language';
import NavBar from './Components/NavBar/navBar';
import Search from './Components/Search/search';
import Subscribe from './Components/Subcribers/Subcribe';
import Support from './Components/Support/support';
import Travelars from './Components/Travelers/travelers';
// import Singup from './Forms/signUp';


function App() {
  return (
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
  {/* <Singup/> */}
  </>
  );
}

export default App;
