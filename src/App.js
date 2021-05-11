import "./scss/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";
import { useSelector} from "react-redux";

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

import LazyLoad from "react-lazyload";


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

      <LazyLoad offset="100">
        <Gallery />
      </LazyLoad>
      
      
      <LazyLoad offset="100">
        <HenkaliIs />
      </LazyLoad>

      <LazyLoad offset="100">
        <Facts />
      </LazyLoad>

      <LazyLoad offset="100">
        <Digital />
      </LazyLoad>

      <LazyLoad offset="100">
        <Treasure />
      </LazyLoad>

      <LazyLoad offset="100">
        <Team />
      </LazyLoad>

      <LazyLoad offset="100"><Franchise /></LazyLoad>
      <LazyLoad offset="100"><Finance /></LazyLoad>
      <LazyLoad offset="100"><YouGet /></LazyLoad>
      <LazyLoad offset="100"><HenkaliMap /></LazyLoad>
      <LazyLoad offset="100"><Blog /></LazyLoad>
      <LazyLoad offset="100"><Reviews /></LazyLoad>
      <LazyLoad offset="100"><Questions /></LazyLoad>

      
      <Feedback />
      <Footer />
    </React.Fragment>
  );
}

export default App;
