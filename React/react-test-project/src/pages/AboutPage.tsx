import { FunctionComponent, useState } from "react";
import { Button, ButtonColor, ButtonVariant, ButtonSize } from "../shared/components/Button/Button";
import { Modal } from "../shared/components/Modal/Modal";

export const AboutPage: FunctionComponent = () => {
    const [isShowing, setShowing] = useState(false);

    return (
        <div>
            <div>
                <Button variant={ButtonVariant.OUTLINED} color={ButtonColor.PRIMARY}>Primary outlined</Button>
                <Button variant={ButtonVariant.TEXT} color={ButtonColor.SECONDARY}>Secondary text</Button>
                <Button color={ButtonColor.WARNING}>Warning</Button>
                <Button variant={ButtonVariant.BASIC} color={ButtonColor.DANGER} size={ButtonSize.SMALL}>Danger basic small</Button>
                <Button color={ButtonColor.SUCCESS} onClick={() => { console.log('clicked success button') }}>Success</Button>
                <Button size={ButtonSize.LARGE}>Large</Button>

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