import { useEffect, useState } from 'react';
import {SharingInformationService } from '../services/sharing-infomation-service';

function Component2() {
  
  const [count,setCount] = useState(0);
  const subscription$ = SharingInformationService.getSubject();
  
  useEffect(()=>{
    subscription$.subscribe((data) => {
      if (!!data) setCount(count + 1); //Doble negacion de la variable
    });
  });

  return <div>Recibo Informacion en el Componente 2 - {count}</div>;
  
}

export default Component2;