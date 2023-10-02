import type { ReactElement, SVGProps } from 'react';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: (props: SVGProps<SVGElement>) => ReactElement;
    authOnly?: boolean;
}
