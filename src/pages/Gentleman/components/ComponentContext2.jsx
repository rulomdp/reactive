import {useGentlemanContext} from '../context/gentleman.context';

function ComponentContext2() {
    const {gentlemanContextValue} = useGentlemanContext();
    
  return <div> Mostrando informacion dentro de un Context: { gentlemanContextValue } </div> 
  }

export default ComponentContext2;