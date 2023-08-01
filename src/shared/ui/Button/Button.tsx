import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { type ButtonHTMLAttributes } from 'react';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button = (props: ButtonProps): JSX.Element => {
    const {
        className = '',
        children,
        theme = ThemeButton.CLEAR,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.Button, { [cls[theme]]: true }, [
                className,
            ])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
