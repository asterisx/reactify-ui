import React from 'react';
import { styles } from './styles';

const Time = ({
    value,
    label,
}) => <div
    css={[styles.container]}>
        {label}
        {value}
    </div>

export default Time;