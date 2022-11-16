import { FunctionComponent, useState } from "react";
import { useModal } from "../Hooks/useModalHook";
import { Button, Color, ButtonVariant, Size } from "../shared/components/Button/Button";
import { Modal } from "../shared/components/Modal/Modal";
import { ToolTip } from "../shared/components/ToolTip/ToolTip";

export const AboutPage: FunctionComponent = () => {
    const { isShowing, toggle } = useModal();

    return (
        <div>
            <div>
                <Button variant={ButtonVariant.OUTLINED} color={Color.PRIMARY}>Primary outlined</Button>
                <Button variant={ButtonVariant.TEXT} color={Color.SECONDARY}>Secondary text</Button>
                <Button color={Color.WARNING}>Warning</Button>
                <Button variant={ButtonVariant.BASIC} color={Color.DANGER} size={Size.SMALL}>Danger basic small</Button>
                <Button color={Color.SUCCESS}>Success</Button>
            </div>
            <div>
                <h1>Modal window zone</h1>
                <Button variant={ButtonVariant.OUTLINED} color={Color.SECONDARY} onClick={toggle}>Show</Button>
                <Modal isShowing={isShowing} hide={toggle}>
                    <h1>modal window</h1>
                    <div>
                        content
                        <ToolTip direction="top">
                            first
                        </ToolTip>
                    </div>
                </Modal>
            </div>
        </div>
    );
}