import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Page.module.scss';
// import { useTranslation } from 'react-i18next';
import {
    type ReactNode,
    type UIEvent,
    memo,
    useRef,
    type MutableRefObject,
} from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getPositionScrollByPath, scrollActions } from './ui/ScrollSave';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { type StateSchema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = memo(function Page(props: PageProps): JSX.Element {
    const { className = '', children, onScrollEnd } = props;
    // const { t } = useTranslation();
    const wrapperRef = useRef<HTMLElement>(
        null,
    ) as MutableRefObject<HTMLElement>;
    const triggerRef = useRef<HTMLElement>(
        null,
    ) as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) =>
        getPositionScrollByPath(state, pathname),
    );

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScrollHandler = useThrottle((e: UIEvent<HTMLDivElement>): void => {
        dispatch(
            scrollActions.setScrollPosition({
                path: pathname,
                position: e.currentTarget.scrollTop,
            }),
        );
    }, 500);

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            onScroll={onScrollHandler}
        >
            {children}
            <div ref={triggerRef} />
        </section>
    );
});
