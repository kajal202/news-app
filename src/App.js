
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <div className="App" >
        <Header />
        <div className="" style={{minHeight: "390px"}}>
          <Outlet />
        </div>
        <Footer />
      </div>

    </>
  );
}

export default App;
