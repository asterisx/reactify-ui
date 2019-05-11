import React from 'react';
import { styles } from './styles';

const Time = ({
  value,
  label,
}) => (
  <div
    css={[styles.container]}
  >
    <span css={[styles.value]}>{(`0${value}`).slice(-2)}</span>
    <b css={[styles.label]}>{label}</b>
  </div>
);

export default Time;
