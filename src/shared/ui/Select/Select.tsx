import { type Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';
import { type ChangeEvent, memo, useMemo } from 'react';

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select = memo(function Select(props: SelectProps): JSX.Element {
    const { className = '', label, options, value, onChange, readonly } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>): void => {
        onChange?.(e.target.value);
    };

    const optionList = useMemo(() => {
        return options?.map((opt) => (
            <option value={opt.value} key={opt.value} className={cls.option}>
                {opt.content}
            </option>
        ));
    }, [options]);
    const mods: Mods = {};

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select
                className={cls.select}
                name=""
                id=""
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionList}
            </select>
        </div>
    );
});
