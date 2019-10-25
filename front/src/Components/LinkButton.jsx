
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

const LinkButton = (props) => {
    const {
        history,
        location,
        match,
        staticContext,
        to,
        onClick,
        classVal,
        // ⬆ filtering out props that `button` doesn’t know what to do with.
        ...rest
    } = props;
    return (
        <button
            type="button"
            className={classVal}
            {...rest} // `children` is just another prop!
            onClick={(event) => {
                // eslint-disable-next-line no-unused-expressions
                onClick && onClick(event);
                history.push(to);
            }}
        />
    );
};

LinkButton.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default withRouter(LinkButton);