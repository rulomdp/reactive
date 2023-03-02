import {Subject} from 'rxjs';

export class SubjectManager{
    subject$ = new Subject(); // el signo $ como buena practica es por ser asincrono

    getSubject (){
        return this.subject$.asObservable();//unicast No se puede enviar informacion, Solo recibirla
    }

    setSubject (value){
        this.subject$.next(value);//Se envia informacion
    }
}