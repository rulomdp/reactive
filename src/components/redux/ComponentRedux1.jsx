import {useDispatch} from 'react-redux';
import {createUser,modifyUser,resetUser} from '../../redux/states/user'

function ComponentRedux1() {
    const dispatcher = useDispatch();
    const handleClickcreateUser = () =>{
        dispatcher(createUser({name: 'Alan', email: 'gentlemanprograming@gmail.com'}));
    };
    const handleClickmodifyUser = () =>{
        dispatcher(modifyUser({name: 'Daniel', email: 'danielcorso@gmail.com'}));
    };
    const handleClickresetUser = () =>{
        dispatcher(resetUser());
    };

  return <div>
            <button onClick={handleClickcreateUser}>Enviar-crear Informacion Redux, createUser</button>
            <button onClick={handleClickmodifyUser}>Enviar-modificar Informacion Redux, modifyUser</button>
            <button onClick={handleClickresetUser}>Enviar-resetear Informacion Redux, resetUser</button>
        </div>
}

export default ComponentRedux1