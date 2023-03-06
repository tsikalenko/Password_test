import classNames from 'classnames';
import PropTypes from 'prop-types';

import './strength-line.scss';

const StrengthLine = (props) => {
    const { strength } = props;
    console.log(strength);

    return (
        <div className='strength-line'>
            <div
                className={classNames('strength-line__section', {
                    'strength-line__section--red':
                        strength === 1 || strength === 2,
                    'strength-line__section--yellow': strength === 3,
                    'strength-line__section--green': strength === 4,
                })}
            ></div>
            <div
                className={classNames('strength-line__section', {
                    'strength-line__section--red': strength === 1,
                    'strength-line__section--yellow': strength === 3,
                    'strength-line__section--green': strength === 4,
                })}
            ></div>
            <div
                className={classNames('strength-line__section', {
                    'strength-line__section--red': strength === 1,
                    'strength-line__section--green': strength === 4,
                })}
            ></div>
        </div>
    );
};

StrengthLine.propTypes = {
    strength: PropTypes.number,
};

export default StrengthLine;
