import { useEffect } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SearchCard from "../components/SearchCard";
import About from "../components/About";
import Footer from "../components/Footer";

function Home() {
  // Idle prefetch for the map page on fast connections (non-blocking, low priority)
  useEffect(() => {
    const prefetchMap = () => {
      const conn = navigator.connection;
      if (conn?.saveData) return;
      if (conn?.effectiveType && conn.effectiveType !== "4g") return;

      if (!document.querySelector('link[rel="prefetch"][href*="map"]')) {
        const prefetchLink = document.createElement("link");
        prefetchLink.rel = "prefetch";
        prefetchLink.href = `${import.meta.env.BASE_URL}map/index.html`;
        document.head.appendChild(prefetchLink);
      }
    };

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(prefetchMap, { timeout: 3000 });
      return () => window.cancelIdleCallback(id);
    } else {
      const timer = setTimeout(prefetchMap, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="home-page">
      <Header />
      <main id="main">
        <Banner />
        <SearchCard />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default Home;