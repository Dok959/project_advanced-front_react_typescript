import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { type ReactNode, memo, useCallback } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import CopyIcon from 'shared/assets/icons/copy.svg';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo(function Code(props: CodeProps): JSX.Element {
    const { className = '', text } = props;

    const onCopy = useCallback(() => {
        void navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                className={cls.copyBtn}
                theme={ButtonTheme.CLEAR}
                onClick={onCopy}
            >
                <CopyIcon className={cls.copyIcon}></CopyIcon>
            </Button>
            <code>{text}</code>
        </pre>
    );
});
