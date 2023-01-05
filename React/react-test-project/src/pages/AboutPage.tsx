import { FunctionComponent, useMemo, useState } from "react";
import { Button } from "../shared/components/Button/Button";
import { ButtonColor, ButtonVariant, ButtonSize } from '../shared/API/Enums'
import { Modal } from "../shared/components/Modal/Modal";

export const AboutPage: FunctionComponent = () => {
    const [isShowing, setShowing] = useState(false);
    const [expCalcVar, setVar] = useState(10);

    const expenciveCalculation = (a: number) => {
        return Math.pow(a, 10);
    }

    const memoizedValue = useMemo(() => expenciveCalculation(expCalcVar), [expCalcVar]);
    return (
        <div>
            <div>
                <Button size={ButtonSize.LARGE}
                    onClick={() => {
                        setVar(p => ++p);
                        console.log(expCalcVar)
                    }}
                >Change value</Button>
                <div>
                    <label>memoized value: {memoizedValue}</label>
                </div>
            </div>
            <div>
                <h1>Modal window zone</h1>
                <Button variant={ButtonVariant.OUTLINED} color={ButtonColor.SECONDARY} onClick={() => setShowing(true)}>Show</Button>
                {/* <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul> */}
                {isShowing && <Modal hide={() => setShowing(false)}></Modal>}
            </div>

        </div>
    );
}