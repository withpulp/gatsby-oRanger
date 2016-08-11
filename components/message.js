import React, { Component, PropTypes } from 'react';

// @TODO: move logic into a universal figure container with smaller components (messages, titles, etc)
// send props to the container - return different components depending on params
// pass component classes using props

class Message extends Component {

    render() {
        const { message, meta } = this.props;

        let figure;

        // @TODO: refactor the logic
        // tip: switch cases with different types to change state of component
        // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

        // message has meta
        if (meta) {
            // copyright message
            if (meta.copyright) {
                figure = (
                    <figure className="copyright message figure">
                        <p className="caption message">&copy;{meta.copyright}, <span dangerouslySetInnerHTML={{__html: message}}/></p>
                    </figure>
                );
            }
            // message
        } else {
            figure = (
                <figure className="message figure">
                    <p className="message">{message}</p>
                </figure>
            );
        }

        return figure;
    }
}

Message.propTypes = {
    message: PropTypes.string,
    meta: PropTypes.object
};

export default Message;