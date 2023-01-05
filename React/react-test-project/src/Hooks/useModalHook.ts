import { useState } from "react"

//tipuization
export const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);

    const toggle = () => {
        setIsShowing(!isShowing);
    }
    return {isShowing, toggle}
}