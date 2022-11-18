import { ReactNode, ButtonHTMLAttributes, FunctionComponent } from "react";
import clsx from 'clsx';
import styles from "./Button.module.css"

//додпти medium
export enum ButtonVariant {
    TEXT = 'text',
    OUTLINED = 'outlined',
    BASIC = 'basic'
}

export enum ButtonColor {
    PRIMARY = '#6366F1',
    DANGER = '#EF4444',
    SECONDARY = '#64748B',
    SUCCESS = '#22C55E',
    WARNING = '#F59E0B'
}

export enum ButtonSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode,
    rounded?: boolean,
    variant?: ButtonVariant,
    size?: ButtonSize,
    loading?: boolean,
    raised?: boolean,
    color?: ButtonColor
}

const getSize = (size: ButtonSize | undefined) => {
    switch (size) {
        case ButtonSize.SMALL: {
            return styles['button__size--small']
        }
        case ButtonSize.MEDIUM: {
            return styles['button__size--medium']
        }
        case ButtonSize.LARGE: {
            return styles['button__size--large']
        }
        default: {
            return styles['button__size--medium']
        }
    }
}

const getVariant = (variant: ButtonVariant | undefined) => {
    switch (variant) {
        case ButtonVariant.BASIC: {
            return styles['button__variant--basic'];
        }
        case ButtonVariant.OUTLINED: {
            return styles['button__variant--outlined'];
        }
        case ButtonVariant.TEXT: {
            return styles['button__variant--text'];
        }
        default: {
            return styles['button__variant--basic'];
        }
    }
}

const getColor = (color: ButtonColor | undefined) => {
    switch (color) {
        case ButtonColor.DANGER: {
            return styles['button__color--danger']
        }
        case ButtonColor.PRIMARY: {
            return styles['button__color--primary']
        }
        case ButtonColor.SECONDARY: {
            return styles['button__color--secondary']
        }
        case ButtonColor.WARNING: {
            return styles['button__color--warning']
        }
        case ButtonColor.SUCCESS: {
            return styles['button__color--success']
        }
        default: {
            return styles['button__color--primary']
        }
    }
}

// make format on save

export const Button: FunctionComponent<ButtonProps> = ({
    children,
    rounded,
    variant,
    size,
    loading,
    raised,
    color,
    ...props
}) => {
    //console.log(getColor(color))
    return (
        <button {...props} disabled={loading}
            className={clsx([
                styles['button'],
                getSize(size),
                getColor(color),
                getVariant(variant),
                {
                    'raised': raised,
                    'rounded': rounded,
                    'loading': loading
                },
            ])}
        >
            {children} {loading && '...'}
        </button>
    )
}