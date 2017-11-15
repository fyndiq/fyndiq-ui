import React from 'react'
import PropTypes from 'prop-types'

import styles from '../styles.css'

const Button = ({
  className,
  children,
  onClick,
  type,
  size,
  horizontal,
  pill,
  disabled,
  pressed,
  htmlType,
  link,
}) => {
  const finalClassName = `
    ${styles.button}
    ${styles[`type-${type}`]}
    ${styles[`size-${size}`]}
    ${horizontal && styles.horizontal}
    ${pressed && styles.pressed}
    ${disabled ? styles.disabled : styles.interactive}
    ${pill && styles.pill}
    ${className}
  `

  // If the button is a link defined as a string,
  // render the button as an <a> tag
  if (typeof link === 'string') {
    return (
      <a className={finalClassName} onClick={onClick} href={link}>
        {children}
      </a>
    )
    // If the link is a React Element
    // This case is usefull for integrating with react-router API
  } else if (React.isValidElement(link)) {
    return React.cloneElement(link, {
      // Just pass the children and the className to the
      // custom link element
      className: finalClassName,
      children,
    })
  }

  // Default case: render a button.
  return (
    <button
      className={finalClassName}
      onClick={onClick}
      disabled={disabled}
      type={htmlType}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf([
    'normal',
    'primary',
    'green',
    'secondary',
    'blue',
    'third',
    'white',
    'cancel',
    'red',
    'inverted',
    'black',
    'ghost',
    'transparent',
  ]),
  size: PropTypes.oneOf(['xs', 's', 'm', 'l']),
  horizontal: PropTypes.bool,
  disabled: PropTypes.bool,
  pressed: PropTypes.bool,
  htmlType: PropTypes.string,
  link: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  pill: PropTypes.bool,
}

Button.defaultProps = {
  className: '',
  onClick: noop => noop,
  type: 'normal',
  size: 's',
  horizontal: false,
  disabled: false,
  pressed: false,
  htmlType: 'button',
  link: undefined,
  pill: false,
}

export default Button
