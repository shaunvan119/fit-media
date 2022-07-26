import BottomMain from "./containers/Bottommain/BottomMain";
import Header from "./containers/Header/Header";
import TopMain from "./containers/Topmain/TopMain";
import Price from "./containers/PriceSection/Price"
import Footer from "./containers/Footer/Footer";
import LeadAutomation from "./containers/LeadAutomation/LeadAutomation";
import ContactForm from "./components/ContactForm";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App__wrapper">
    
      <Routes>
      <Route exact path="/" element={[<Header/>,
      <TopMain/>,
      <LeadAutomation/>,
      <BottomMain/>,
      <Price/>,
      <Footer/>,]}/> 
        <Route path="/contactUs" element={<ContactForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
