import React from "react";

function Header(){
    return (
        <header>Header</header>
    );  
}

class Main extends React.Component {
    render() {
        return (
            <main>Main</main>
        );
    }
}

const Footer = () => {
    return (
        <footer>Footer</footer>
    );
};
const FooterMemo = React.memo(Footer);
FooterMemo.displayName = 'FooterMemo';


const Rendering = function () {

    const [state /* getter */, setState /* setter */] = React.useState(0);

    // let state = 0

    const handleClick = () => {
        //state = state + 1;
        setState(state => state + 1 );
        console.log(state);
    }

    return(
        <>
            <button onClick={handleClick}>{state}</button>
            <hr />
            <Header />
            <Main />
            <Footer />
        </>
    );
}

export default Rendering;