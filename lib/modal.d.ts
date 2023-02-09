import { Component } from 'react';
import './index.css';
interface PropTypes {
    className: string;
    width: number;
    height: number;
    top: number;
    left: number;
    isDragging: boolean;
    isOpen: boolean;
    isMinimised: boolean;
    onRequestRecover: () => void;
    onFocus: () => void;
}
export default class Modal extends Component<PropTypes> {
    node?: any | null;
    constructor(props: any);
    render(): JSX.Element;
}
export {};
