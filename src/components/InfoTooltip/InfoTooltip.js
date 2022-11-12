import React from "react";
import "./InfoTooltip.css";

function InfoTooltip({ image, isOpen, onClose, sign }) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button onClick={onClose} className="popup__close" type="button" />
        <div className="popup__register">
          <img className="popup__register_image" src={image} alt={"Картинка"} />
          <p className="popup__register_sign">{sign}</p>
        </div>
      </div>
    </div>
  );
}
export default InfoTooltip;
