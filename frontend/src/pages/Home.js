import { Link } from "react-router-dom";
import { FaQuestionCircle, FaGlobe, FaCarrot, FaList } from "react-icons/fa";
import { useSelector } from "react-redux";

function Home() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="page">
      <section className="page-heading">
        <h1>Welcome {user ? "back, " + user.name : " to DishGuru"}</h1>
        <p>Please choose an option from below</p>
      </section>

      <div className="page-home-main">
        <Link to="/dishes" className="btn btn-block">
          <FaGlobe />
          Explore Dishes
        </Link>
        <Link to="/my-dishes" className="btn btn-block">
          <FaList /> View my dishes
        </Link>
        <Link to="/new-dish" className="btn btn-block">
          <FaCarrot /> Add a dish
        </Link>
        <Link to="/random" className="btn btn-block">
          <FaQuestionCircle /> Get random dish
        </Link>
      </div>
    </div>
  );
}

export default Home;
