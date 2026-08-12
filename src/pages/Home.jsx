import Header from "../components/Header";
import Banner from "../components/Banner";
import SearchCard from "../components/SearchCard";
import About from "../components/About";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home-page">
      <Header />
      <main>
        <Banner />
        <SearchCard />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default Home;