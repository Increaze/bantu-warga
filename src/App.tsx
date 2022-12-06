import { GetTheApp } from "./Components/GetTheApp";
import Covid from "./Pages/Covid";
import Footer from "./Pages/Footer";
import Form from "./Pages/Form";
import Hero from "./Pages/Hero";
import Navbar from "./Pages/Navbar";
import SecondLayer from "./Pages/SecondLayer";

function App() {
  return (
    <>
      <div className="container mx-auto bg-mercury-300">
        <Navbar />
      </div>
      <Hero />
      <SecondLayer />
      <GetTheApp />
      <Covid />
      <Form />
      <Footer />

      {/* /* <Hero/>
        <SecondLayer/> */}
    </>

    /* BORDER YET TO BE FIXED 
           <div className="h-[300px] w-[300px] absolute bottom-100 pt-10 flex rounded-full ring-gray-300 ring-8 bg-blue-ribbon-500">
          </div> */

    // </div>
  );
}

export default App;
