// Components

import { useEffect } from "react";
import { Contact } from "../components/Contact";
import { Header } from "../components/Header";
import { Portfolio } from "../components/OurPortfolio";
import { Services } from "../components/services";

// aos scroll
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Header />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}
