import { FunctionComponent, ReactNode } from "react";
import ReactDOM from "react-dom";
import { Button } from "../Button/Button";
import { ButtonVariant, ButtonSize } from '../../API/Enums'
import { ToolTip, ToolTipDirection } from "../ToolTip/ToolTip";
import styles from './Modal.module.css';

interface ModalProps {
    header?: string,
    content?: ReactNode
    hide: () => void
}

export const Modal: FunctionComponent<ModalProps> = ({ hide, header, content }) => ReactDOM.createPortal(
    <>
        <div className={styles['modal__container']}>
            <div className={styles["modal__card"]}>
                <div className={styles['modal__card--header']}>
                    <h1>{header ?? "Modal window"}</h1>
                    <ToolTip title="tool tip" direction={ToolTipDirection.RIGHT}>
                        <span>?</span>
                    </ToolTip>
                </div>
                <div className={styles['modal__card--content']}>
                    {content}
                </div>
                <div className={styles['modal__card--footer']}>
                    <Button variant={ButtonVariant.TEXT} size={ButtonSize.SMALL} onClick={hide}>Close</Button>
                </div>
            </div>
        </div>
    </>, document.body
);
