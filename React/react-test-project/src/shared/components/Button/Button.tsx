import { ReactNode, ButtonHTMLAttributes, FunctionComponent } from "react";
import clsx from 'clsx';
import styles from "./btnStyle.module.css"

export enum ButtonVariant {
    TEXT = 'text',
    OUTLINED = 'outlined',
    BASIC = 'basic'
}

export enum Color {
    PRIMARY = '#6366F1',
    DANGER = '#EF4444',
    SECONDARY = '#64748B',
    SUCCESS = '#22C55E',
    WARNING = '#F59E0B'
}

export enum Size {
    SMALL, LARGE
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode,
    rounded?: boolean,
    variant?: ButtonVariant, //uniion or enum of possible values 
    size?: Size, //uniion or enum of possible values
    loading?: boolean,
    raised?: boolean,
    color?: Color //uniion or enum and string for any other hex color of possible values
}

const getSize = (size: Size | undefined) => {
    switch (size) {
        case undefined: {
            return '';
        }
        case Size.SMALL: {
            return styles['button__size--small']
        }
        case Size.LARGE: {
            return styles['button__size--large']
        }
    }
}

const getVariant = (variant: ButtonVariant | undefined) => {
    switch (variant) {
        case undefined: {
            return styles['button__variant--basic'];
        }
        case ButtonVariant.BASIC: {
            return styles['button__variant--basic'];
        }
        case ButtonVariant.OUTLINED: {
            return styles['button__variant--outlined'];
        }
        case ButtonVariant.TEXT: {
            return styles['button__variant--text'];
        }
    }
}

const getColor = (color: Color | undefined) => {
    switch (color) {
        case undefined: {
            return styles['button__color--primary']
        }
        case Color.DANGER: {
            return styles['button__color--danger']
        }
        case Color.PRIMARY: {
            return styles['button__color--primary']
        }
        case Color.SECONDARY: {
            return styles['button__color--secondary']
        }
        case Color.WARNING: {
            return styles['button__color--warning']
        }
        case Color.SUCCESS: {
            return styles['button__color--success']
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
    console.log(getColor(color))
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