import { useEffect } from "react";

/**
 * This hook register properly a global event handler on the "window" object.
 * @param {string} eventName 
 * @param {function} callback 
 * 
 * @example
 * 
 * useGlobalEvent("resize", (event) => console.log('Event Happened')
 */
export const useGlobalEvent = (eventName, callback) => {

    const handleGlobalEvent = () => {

        window.addEventListener(eventName, callback);

        const cleanupGlobalEvent = () => window.removeEventListener(eventName, callback);
        return cleanupGlobalEvent;
    }

    const triggerDependencies = [eventName, callback];

    useEffect(handleGlobalEvent, triggerDependencies);

};