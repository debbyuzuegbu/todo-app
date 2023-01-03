import React from 'react';
import styles from '../styles/modules/button.module.scss';

const buttonTypes = {
  primary: 'primary',
  secondary: 'secondary',
};

function Button({ children, variant = 'primary' }) {
  return (
    <button className={getClasses} type="button">
      {children}
    </button>
  );
}

export default Button;
