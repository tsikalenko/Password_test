import PropTypes from 'prop-types';

import './input.scss';

const Input = (props) => {
    const { label, value, onChange, type } = props;

    return (
        <div className={'input'}>
            <label className='input__label'>{label}</label>
            <input
                type={type ? type : 'text'}
                className='input__area'
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

Input.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
};

export default Input;
