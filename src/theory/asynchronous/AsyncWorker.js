

function AsyncWorker() {
  
    const w = new Worker('/worker.js');

    w.onmessage =  msg  => {
        console.log( msg );
    };

    return('AsyncWorker')
}


export  default AsyncWorker