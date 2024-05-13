import { heavyProcess } from "./heavy-process"


function AsyncTimer() {
  
    //setTimeout(heavyProcess,0);
    requestAnimationFrame(heavyProcess);

    return('AsyncTimer')
}


export  default AsyncTimer