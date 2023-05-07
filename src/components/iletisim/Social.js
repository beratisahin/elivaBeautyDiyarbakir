import "./Iletisim.css";
import React from "react";
import useDocumentTitle from "../../useDocumentTitle.js";
import Title from "../title/Title";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import HomeIcon from "@material-ui/icons/Home";
import i1 from "./1.webp";
import i2 from "./2.webp";
import i3 from "./3.webp";
import i4 from "./4.webp";
import i5 from "./5.webp";
import i6 from "./6.webp";

function Iletisim() {
  useDocumentTitle("Diyarbakır Lazer Epilasyon - Diyarbakır Eliva Beauty Salonu ");
  return (
    <div className="row">
      <div class="col-lg-2s col-md-2 col-sm-12 col-12 p-5">
        <a
          href="https://goo.gl/maps/nHSAkYp6AjRr5X4y7?coh=178571&entry=tt" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={i1} className="contactIcons" title="Adres için İkona Tıklayınız"></img>
        </a>
        <p className="contactText">
          <span style={{color:"#E4439E"}}><b>Adres:</b></span><br/>
          Fırat Mah. Kayapınar Cad. Furkan 13 Apt. D:15/A Ceylan AVM Yanı  <br/> <b>Kayapınar / Diyarbakır</b>
        </p>
      </div>
      <div class="col-lg-2s col-md-2 col-sm-12 col-12 p-5">
        <a
          href="tel: +905512800521"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={i2} className="contactIcons" title="Rezervasyon için İkona Tıklayınız"></img>
        </a>
        <p className="contactText">
        <span style={{color:"#E4439E"}}><b>Rezervasyon:</b></span><br/>
          <b>0551 280 05 21</b>
        </p>
      </div>
      <div class="col-lg-2s col-md-2 col-sm-12 col-12 p-5">
        <img src={i3} className="contactIcons" title="Çalışma Saatleri"></img>
        <p className="contactText">
         <span style={{color:"#E4439E"}}><b>Çalışma Saatleri:</b></span><br/>
          Her Gün: 09:00 – 19:00
        </p>
      </div>
      <div class="col-lg-2s col-md-2 col-sm-12 col-12 p-5">
      <a href="https://wa.me/+905512800521" target="_blank">
          <img src={i4} className="contactIcons" title="WhatsApp için İkona Tıklayınız"></img>
        </a>
        <p className="contactText">
        <span style={{color:"#E4439E"}}><b>WhatsApp:</b></span><br/>
          <b>0551 280 05 21</b>
        </p>
      </div>
      <div class="col-lg-2s col-md-2 col-sm-12 col-12 p-5">
        <a href="https://www.instagram.com/elivabeauty.diyarbakir/" target="_blank">
          <img src={i5} className="contactIcons" title="Instagram için İkona Tıklayınız"></img>
        </a>
        <p className="contactText">
        <span style={{color:"#E4439E"}}><b>Instagram:</b></span><br/>
        elivabeauty.diyarbakir
        </p>
      </div>
      <div class="col-lg-2s col-md-2 col-sm-12 col-12 p-5">
        <a
          href="https://www.facebook.com/elivabeautydiyarbakir"
          target="_blank"
        >
          <img src={i6} className="contactIcons" title="Facebook için İkona Tıklayınız"></img>
        </a>
        <p className="contactText">
        <span style={{color:"#E4439E"}}><b>Facebook:</b></span><br/>
        elivabeautydiyarbakir
        </p>
      </div>
    </div>
  );
}

export default Iletisim;
