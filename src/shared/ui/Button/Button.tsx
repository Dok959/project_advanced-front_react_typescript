import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { type ButtonHTMLAttributes } from 'react';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
}

export const Button = (props: ButtonProps): JSX.Element => {
    const {
        className = '',
        children,
        theme = ButtonTheme.CLEAR,
        square = false,
        size = ButtonSize.M,
        disabled = false,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className, cls[size]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};
