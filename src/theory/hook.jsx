

/**
 * Historiquement
 * - Statefull : retient pas d'état (class component)
 * - StateLess : ne retient pas d'état (function component)
 */

import React, { useEffect } from "react";


/**
 * Statefull - GEstion de l'état et des effets du Cycle de Vie
 * 
 */

export class ClassComponent extends React.Component {
    constructor(props) {
        console.log('Step 1 : Constructor')
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log('Step 2 : ComponentDidMount');
    }

    componentDidUpdate() {
        console.log('Step 3 : ComponentDidUpdate');
    }

    componentWillUnmount() {
        console.log('Step 4 : ComponentWillUnmount');
    }

    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
            </div>
        )
    }
}


export const FunctionalComponent = () => {

    const [state, setState] = React.useState({ count: 0 });
    console.log('Step 1 and 3 : FunctionalComponent construction and change ' );

    useEffect(() => {
        console.log('Step 2 :Initialisation ' );
        return () => {
            console.log('Step 4 : ComponentWillUnmount');
        }
    }, []);  

    return (
        <div>
            <p>{ state.count}</p>
            <button onClick={() =>  setState({ count: state.count + 1 })}>Increment</button>
        </div>
    )
}