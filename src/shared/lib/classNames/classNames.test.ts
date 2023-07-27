import { classNames } from './classNames';

describe('classNames', () => {
    test('только с одним, первым параметром', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('с дополнительными параметрами', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(
            expected,
        );
    });

    test('с модами', () => {
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(
            classNames('someClass', { hovered: true, scrollable: true }, [
                'class1',
                'class2',
            ]),
        ).toBe(expected);
    });

    test('с модами false', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(
            classNames('someClass', { hovered: true, scrollable: false }, [
                'class1',
                'class2',
            ]),
        ).toBe(expected);
    });

    test('с модами text', () => {
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(
            classNames('someClass', { hovered: true, scrollable: 'someText' }, [
                'class1',
                'class2',
            ]),
        ).toBe(expected);
    });
});
