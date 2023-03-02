import { useGentlemanContext } from "../context/gentleman.context";

function ComponentContext1() {
  const { gentlemanContextValue,setGentlemanContextValue } = useGentlemanContext();
  
  const handleClick = () => {
    setGentlemanContextValue('Hola mi cielo....');
    console.log(gentlemanContextValue);
  };
  return <div> <button onClick={handleClick}>Enviar Informacion por un Context</button> </div>;
}

export default ComponentContext1;
