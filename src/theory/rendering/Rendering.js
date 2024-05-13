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
}



const Rendering = () => {
    return(
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}

export default Rendering;