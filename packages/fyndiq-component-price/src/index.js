import React from 'react';
import styles from '../styles.less';

const Price = ({ children }) => (
  <span className={styles.span}>
    {children}
  </span>
);

Price.propTypes = {
  children: React.PropTypes.string.isRequired,
};

export default Price;
