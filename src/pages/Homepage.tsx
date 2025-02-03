import { useNavigate } from "react-router-dom";
import Header from "../components/Header";


const Homepage = () => {
  const navigate = useNavigate();

  return (
    <Header></Header>    
  );
};

export default Homepage;