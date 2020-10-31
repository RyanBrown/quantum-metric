import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    id: PropTypes.string,
    onClick: PropTypes.func,
};

const FilterBlock = (props) => {
    return (
        <div className='filter-block' id={props.id} onClick={props.onClick}>
            {props.children}
        </div>
    );
};

FilterBlock.displayName = 'FilterBlock';
FilterBlock.propTypes = propTypes;

export default FilterBlock;
