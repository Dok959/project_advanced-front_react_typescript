declare module '*.scss' {
    type IClassNames = Record<string, string>;
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.module.css' {
    const classes: Record<string, string>;
    export default classes;
}

declare module '*.module.scss' {
    const classes: Record<string, string>;
    export default classes;
}

declare module '*.module.sass' {
    const classes: Record<string, string>;
    export default classes;
}

declare module '*.module.less' {
    const classes: Record<string, string>;
    export default classes;
}

declare module '*.module.styl' {
    const classes: Record<string, string>;
    export default classes;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
    import { type ReactElement, type SVGProps } from 'react';
    const SVG: (props: SVGProps<SVGElement>) => ReactElement;
    export default SVG;
    // import type React from 'react'
    // const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
    // export default SVG
}

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __IS_DEV__: boolean;
// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __API__: string;
