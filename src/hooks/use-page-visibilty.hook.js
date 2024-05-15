import { useState } from "react";
import { useGlobalEvent } from "./use-global-event.hook";

export const usePageVisibility = () => {
    const [visibility, setVisibility] = useState(!document.hidden);

    useGlobalEvent("visibilitychange", () => setVisibility(!document.hidden) );
    
    return visibility;
};