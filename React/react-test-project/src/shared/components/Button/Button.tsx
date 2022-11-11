import { useEffect, useState } from "react";
import { FunctionComponent } from "react";
import { Styles, general } from "./btnStyles";

interface ButtonInterface {
    condition: string
}

export const Button: FunctionComponent<ButtonInterface> = ({ condition }: ButtonInterface) => {

    const [style, setStyle] = useState({});

    useEffect(() => {
        getBtnStyle()
    }, []);

    //for parsing line and sumarization styles
    const getBtnStyle = () => {
        const conditions: string[] = condition.split(' ').filter(c => c.length);
        //console.log(conditions);
        
        let res = {};
        conditions.forEach(c => {
            const additionalCondition = Styles.get(c);
            res = {...res, ...additionalCondition}
        });

        //console.log(res);
        setStyle(res ?? general);
    }
    
    return (
        <button style={style}>
            Submit {condition === 'loading' && (<span>...</span>)}
        </button>
    )
}