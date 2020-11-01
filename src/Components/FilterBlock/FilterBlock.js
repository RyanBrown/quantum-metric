import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    id: PropTypes.string,
};

const FilterBlock = (props) => {
    return (
        <div className='filter-block' id={props.id}>
            {props.children}
        </div>
    );
};

FilterBlock.propTypes = propTypes;

export default FilterBlock;
