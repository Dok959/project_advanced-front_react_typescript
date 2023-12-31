import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';
import { type ReactNode, memo, type HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
}

export const Card = memo(function Card(props: CardProps): JSX.Element {
    const { className = '', children, ...otherProps } = props;

    return (
        <div className={classNames(cls.Card, {}, [className])} {...otherProps}>
            {children}
        </div>
    );
});
