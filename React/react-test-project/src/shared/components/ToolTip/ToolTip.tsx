import { FunctionComponent, ReactNode, useState } from "react";
import styles from './tooltip.module.css'
import clsx from 'clsx';

interface ToolTipProps {
    children?: ReactNode,
    direction?: ToolTipDirection,
    title?: string
}
export enum ToolTipDirection {
    TOP = 'top',
    BOTTOM = 'bottom',
    LEFT = 'left',
    RIGHT = 'right'
}
const getDirection = (direction: ToolTipDirection | undefined) => {
    switch (direction) {
        case ToolTipDirection.TOP: {
            return styles['tooltip--top'];
        }
        case ToolTipDirection.BOTTOM: {
            return styles['tooltip--bottom'];
        }
        case ToolTipDirection.LEFT: {
            return styles['tooltip--left'];
        }
        case ToolTipDirection.RIGHT: {
            return styles['tooltip--right'];
        }
        default: {
            return styles['tooltip--top'];
        }
    }
}
export const ToolTip: FunctionComponent<ToolTipProps> = ({ children, direction, title }) => {
    const [active, setActive] = useState(false);

    return (
        <div className={styles['tooltip__wrapper']}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}>
            {children}
            {
                active &&
                <div className={clsx([styles['tooltip'], getDirection(direction)])}>
                    {title}
                </div>
            }
        </div>

    )
}