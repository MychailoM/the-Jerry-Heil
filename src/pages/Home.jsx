import "./../styles/Home.css";

import { SocialsLink } from "../components/SocialsLink";
import { Logo } from "../components/Logo";
import { Nav } from "../components/Navigation";
import { Brands } from "../components/Brands";

export function Home() {
  return (
    <div className="home">
      <div>
        <Logo />
        <Nav />
        <SocialsLink />
      </div>
      <Brands/>
    </div>
  );
}
