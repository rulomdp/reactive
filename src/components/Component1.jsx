import React from "react";
import { SharingInformationService } from "../services/sharing-infomation-service";

function Component1() {
  const handleClick = () => {
    SharingInformationService.setSubject(true);
  };

  const handleClickNo = () => {
    SharingInformationService.setSubject(false);
  };

  return (
    <div>
      <button onClick={handleClick}> Enviar Informacion desde Componente 1</button>
      <button onClick={handleClickNo}> No Enviar Informacion desde Componente 1</button>
    </div>
  );
}

export default Component1;
