import "./home.css";
import Header from "../../components/header/index";
import Recipes from "../../components/recipes";
import KnowMore from "../../components/more";
import Join from "../../components/join_us";
import Footer from "../../components/Footer";
import { Container } from "reactstrap";
import SearchRecipes from "../../components/search";
import Blog from "../../components/Blog/index";

function Home() {
  return (
    <>
      <div className="Home">
        <Container>
          <Header />
          <SearchRecipes />
        </Container>
      </div>

      <div className="Recipes">
        <Container>
          <Recipes />
        </Container>
      </div>

      <KnowMore />

      <div className="Blog">
        <Blog />
      </div>

      <Join />
      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default Home;