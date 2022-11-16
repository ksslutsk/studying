import { FunctionComponent, ReactNode } from "react";
import ReactDOM from "react-dom";
import { Button, ButtonVariant } from "../Button/Button";
import './modal.css'
// import CSSModules from 'react-css-modules';
// import styles from './modal.css';


interface Props {
    children?: ReactNode,
    isShowing: boolean,
    hide: () => void
}

export const Modal: FunctionComponent<Props> = ({ isShowing, hide, children }) => isShowing ? ReactDOM.createPortal(
    <>
        <div className="modal_container">
            <div className="modal_card">
                <Button variant={ButtonVariant.TEXT} onClick={hide}>Close</Button>
                {children}
            </div>
        </div>
    </>, document.body
) : null;
