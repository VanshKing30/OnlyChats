import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { WordRotate } from "../components/WordFlip";
import Underline from "../components/Underline";
import Footer from "../components/Footer";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="parent">
        <Header></Header>
        <WordRotate words={[
            "Vansh",
            "Vinod",
            "Waldeo"
        ]}></WordRotate>
        <Underline></Underline> 
        <Footer/>
    </div>   
  );
};

export default Homepage;