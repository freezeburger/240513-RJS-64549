

function callback() {
    console.log("Hello, World!")
}

setTimeout(callback);

window.addEventListener('load', callback, false)




/* const getData =  () => {
    return fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json())
}

getData().then(data => console.log(data)); */

const getData =  async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = (await res).json();
    return data;
}

getData().then(data => console.log(data));


async function simple(){
    return true;
}

function simple(){
    return Promise.resolve(true);
}