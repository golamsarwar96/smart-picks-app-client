import Accordion from "../components/Accordion";
import Banner from "../components/Banner";
import Newsletter from "../components/Newsletter";
import QueryCards from "../components/QueryCards";

const Home = () => {
  return (
    <div className="mb-20 max-w-screen-2xl mx-auto">
      <Banner></Banner>
      <QueryCards></QueryCards>
      <Newsletter></Newsletter>
      <Accordion></Accordion>
    </div>
  );
};

export default Home;
