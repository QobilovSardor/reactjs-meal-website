import { Route, Routes } from "react-router-dom";
import Footer from "./layouts/Footer";
import Header from "./layouts/Heder";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Header />} />
      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;
