import React, { Component, Fragment } from 'react';
import './index.css';
//import * as FontAwesome from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';


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
    node?: HTMLDivElement | null;
    wrapper ;
    constructor(props) {
        super(props);
        this.wrapper = React.createRef();
        props.ref(this.wrapper)
    }

    render() {
        const { isDragging, width, height, top, left, isOpen, isMinimised, onRequestRecover, className, onFocus } = this.props;
        if (isOpen) {
            return (
                <div style={{ display: 'contents'}} ref={this.wrapper}>
                    <Fragment>
                        <CSSTransition in={!isMinimised} timeout={300} classNames="minimise" unmountOnExit>
                            <div
                                onClick={onFocus}
                                ref={(node) => {
                                    this.node = node;
                                }}
                                draggable={isDragging}
                                className={!className ? "flexible-modal" : "flexible-modal " + className}
                                style={{ width, height, top, left }}
                            >
                                {this.props.children}
                            </div>
                        </CSSTransition>
                        {isMinimised && (
                            <button className="flexible-modal-rebound-btn" onClick={onRequestRecover}>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAZ0lEQVR4nO3WwQmAQAwF0SlPt/+zC4t9RGxAZRH84DzIPTkEBiRJek8DOlDh04H16pARsGQ9nP0Xh6zAFrBk3cy54zL7P5IkSR9pZjxZ9TsCyrbMeEmSpGzNjCerfkdAnpcZL0kScw7zFAKxsVXx1wAAAABJRU5ErkJggg=="/>
                            </button>
                        )}
                    </Fragment>
                </div>
            );
        } else {
            return <div style={{ display: 'contents'}} ref={this.wrapper}></div>;
        }
    }
}