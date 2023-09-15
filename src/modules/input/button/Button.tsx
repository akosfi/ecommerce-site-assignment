import { FC } from 'react';

import css from './Button.module.scss';
import classNames from 'classnames';

export enum ButtonSize {
    SMALL = 'small',
    NORMAL = 'normal',
}

type ButtonProps = {
    size: ButtonSize;
    onClick: () => void;
    label: string;
};

const Button: FC<ButtonProps> = ({ size, onClick, label }) => (
    <button
        onClick={onClick}
        className={classNames(css['button'], css[`button-size-${size}`])}
    >
        {label}
    </button>
);

export default Button;
