


function hoc(Component, info){
    console.log(info);
    return (props) => <Component {...props} />
}


const Button = ({text}) => {
    return <button>{text}</button>
}


const Hoc = hoc(Button, {text: 'Hello World!'})