import { heavyProcess } from "./heavy-process"


function NoAsync() {
  
    heavyProcess();

    return('NoAsync')
}


export  default NoAsync