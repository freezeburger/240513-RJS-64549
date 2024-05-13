import { heavyProcess } from "./heavy-process"


function AsyncTask() {
  
    queueMicrotask(heavyProcess);

    return('AsyncTask')
}


export  default AsyncTask