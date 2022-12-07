import { GetTheApp } from "./Components/GetTheApp";
import Covid from "./Page/Covid";
import Footer from "./Page/Footer";
import Form from "./Page/Form";
import Hero from "./Page/Hero";
import Navbar from "./Page/Navbar";
import SecondLayer from "./Page/SecondLayer";

function App() {
  return (
    <>
      <div className="container shadow">
        <Navbar />
      </div>
      <Hero />
      <SecondLayer />
      <GetTheApp />
      <Covid />
      <Form />
      <Footer />
    </>
  );
}

export default App;
