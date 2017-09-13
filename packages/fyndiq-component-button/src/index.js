import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.less'

const Button = ({
  children,
  onClick,
  type,
  size,
  horizontal,
  disabled,
  pressed,
  htmlType,
  link,
}) => {
  const className = `
    ${styles.button}
    ${styles['type-' + type]}
    ${styles['size-' + size]}
    ${horizontal && styles.horizontal}
    ${pressed && styles.pressed}
    ${disabled ? styles.disabled : styles.interactive}
  `

  // If the button is a link defined as a string,
  // render the button as an <a> tag
  if (typeof link === 'string') {
    return (
      <a
        className={className}
        onClick={onClick}
        href={link}
      >
        {children}
      </a>
    )
  // If the link is a React Element
  // This case is usefull for integrating with react-router API
  } else if (React.isValidElement(link)) {
    return (
      React.cloneElement(link, {
        // Just pass the children and the className to the
        // custom link element
        className,
        children,
      })
    )
  }

  // Default case: render a button.
  return (
    <button
      className={className}
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
  onClick: PropTypes.func,
  type: PropTypes.string,
  size: PropTypes.string,
  horizontal: PropTypes.bool,
  disabled: PropTypes.bool,
  pressed: PropTypes.bool,
  htmlType: PropTypes.string,
  link: PropTypes.oneOfType(
    PropTypes.string,
    PropTypes.element,
  ),
}

Button.defaultProps = {
  onClick: noop => noop,
  type: 'normal',
  size: 's',
  horizontal: false,
  disabled: false,
  pressed: false,
  htmlType: undefined,
  link: undefined,
}

export default Button
