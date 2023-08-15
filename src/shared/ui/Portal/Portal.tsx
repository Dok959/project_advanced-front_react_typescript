import { createPortal } from 'react-dom';

interface PortalProps {
    children: React.ReactNode;
    element?: HTMLElement;
}

export const Portal = (props: PortalProps): JSX.Element => {
    const { children, element = document.body } = props;
    return createPortal(children, element);
};
