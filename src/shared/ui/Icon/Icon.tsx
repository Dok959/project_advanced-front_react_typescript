import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';
import { type ReactElement, type SVGProps, memo } from 'react';

interface IconProps {
    className?: string;
    Svg: (props: SVGProps<SVGElement>) => ReactElement;
}

export const Icon = memo(function Icon(props: IconProps): JSX.Element {
    const { className = '', Svg } = props;

    return <Svg className={classNames(cls.Icon, {}, [className])} />;
});
