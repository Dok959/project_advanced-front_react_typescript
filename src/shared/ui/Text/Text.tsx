import { type Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';
import { memo } from 'react';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    CENTER = 'center',
    LEFT = 'left',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
}

export const Text = memo(function Text(props: TextProps): JSX.Element {
    const {
        className = '',
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
    };

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title != null && <p className={cls.title}>{title}</p>}
            {text != null && <p className={cls.text}>{text}</p>}
        </div>
    );
});
