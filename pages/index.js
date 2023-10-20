// Components

import { Contact } from "../components/Contact";
import { Header } from "../components/Header";
import { Portfolio } from "../components/OurPortfolio";
import { Services } from "../components/services";

export default function Home() {
  return (
    <div>
      <Header />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}
