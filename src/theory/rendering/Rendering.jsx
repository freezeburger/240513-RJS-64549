import React from "react";
import PropTypes from 'prop-types';

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

const Footer = (props = {text:'default'}) => {
    return (
        <footer>Footer {props.text }</footer>
    );
};
Footer.propTypes = {
    text: PropTypes.string
}
const compareProps = (prevProps, nextProps) => prevProps.text === nextProps.text;
const FooterMemo = React.memo(Footer, compareProps);
FooterMemo.displayName = 'FooterMemo';


const Rendering = function () {

    const [state /* getter */, setState /* setter */] = React.useState(0);


    const handleClick = React.useCallback(() => {
        //state = state + 1;
        setState(state => state + 1 );
        console.log(state);
    },[/* no dependencies */]);

    return(
        <>
            <button onClick={handleClick}>{state}</button>
            <hr />
            <Header />
            <Main />
            <FooterMemo text={ state < 5 ?'counting':'done'}/>
        </>
    );
}

export default Rendering;