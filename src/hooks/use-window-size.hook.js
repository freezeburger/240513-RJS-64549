import { useGlobalEvent } from "./use-global-event.hook";

/**
 * Trigger a callback function when the window is resized.
 * @param {function} callback 
 */
export const useWindowSize = (callback) => {

    useGlobalEvent("resize", ()=>{
        callback({
            width: window.innerWidth,
            height: window.innerHeight
        });
    });

}

/**
 * Create a state with the current window size.
 * @returns {object} An object with the current window size.
 */
export const useWindowSizeState = () => {

    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useWindowSize(setSize);

    return size;
}
