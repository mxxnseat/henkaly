import "./scss/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";

import {Sale} from "./components/sale";
import {Header} from "./components/header";
import {Gallery} from "./components/gallery";
import {HenkaliIs} from "./components/henkaliIs";
import {Facts} from "./components/facts";
import {Digital} from "./components/digital";
import {Treasure} from "./components/treasure";
import { Team } from "./components/team";
import { Franchise } from "./components/franchise";
import { Finance } from "./components/finance";
import { YouGet } from "./components/youget";
import { HenkaliMap } from "./components/map";

function App() {
  const [saleVisibility, setSaleVisibility] = useState(true);
  

  return (
    <React.Fragment>
      {
        saleVisibility ? <Sale close={setSaleVisibility} /> : ''
      }
      <Header />
      <Gallery />
      <HenkaliIs />
      <Facts />
      <Digital />
      <Treasure />
      <Team />
      <Franchise />
      <Finance />
      <YouGet />
      <HenkaliMap />
    </React.Fragment>
  );
}

export default App;
