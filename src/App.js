import "./scss/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";
import { useDispatch, useSelector} from "react-redux";

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
import { Blog } from "./components/blog";
import { Reviews } from "./components/reviews";
import { Questions } from "./components/questions";
import { Feedback } from "./components/feedback";
import { Footer } from "./components/footer";

import { PopupModal } from "./components/popup_modal";
import { PopupMenu } from "./components/popup_menu";

function App() {
  const [saleVisibility, setSaleVisibility] = useState(true);
  const isModal = useSelector((store)=>store.isModal);
  const isPopup = useSelector((store)=>store.isPopup);

  if(isModal || isPopup){
    document.querySelector("html").setAttribute("id","popup");
  }else{
    document.querySelector("html").removeAttribute("id");
  }

  return (
    <React.Fragment>
      {
        saleVisibility ? <Sale close={setSaleVisibility} /> : ''
      }
      {
        isModal ? <PopupModal /> : ''
      }
      {
        isPopup ? <PopupMenu /> : ''
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
      <Blog />
      <Reviews />
      <Questions />
      <Feedback />
      <Footer />
    </React.Fragment>
  );
}

export default App;
