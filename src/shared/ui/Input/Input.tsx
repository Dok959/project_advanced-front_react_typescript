import { type Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import {
    memo,
    type InputHTMLAttributes,
    useState,
    useEffect,
    useRef,
} from 'react';
import React from 'react';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
}

export const Input = memo(function Input(props: InputProps): JSX.Element {
    const {
        className = '',
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        readonly,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const isCaretVisible = isFocused && !readonly;

    useEffect(() => {
        if (autofocus === true) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onBlur = (): void => {
        setIsFocused(false);
    };

    const onFocus = (): void => {
        setIsFocused(true);
    };

    const onSelect = (
        e: React.SyntheticEvent<HTMLInputElement, Event>,
    ): void => {
        const target = e?.target as HTMLInputElement;
        setCaretPosition(target?.selectionStart ?? 0);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            {placeholder != null && (
                <div className={cls.placeholder}>{`${placeholder}>`}</div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    readOnly={readonly}
                    {...otherProps}
                />
                {isCaretVisible && (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition * 9}px` }}
                    />
                )}
            </div>
        </div>
    );
});
