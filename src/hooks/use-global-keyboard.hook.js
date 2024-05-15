import { useGlobalEvent } from "./use-global-event.hook"

/**
 * Register a shortcut "key" event listener on the "window" object.
 * @param {*} key 
 * @param {*} callback 
 * 
 * @example
 * 
 * useGlobalKeyboard("Enter", (event) => console.log('Enter Key Pressed'));
 */
export const useGlobalKeyboard = (key, callback) => {

    useGlobalEvent("keydown", (event) => {
        if (event.key === key) {
            callback(event);
        }
    });
}