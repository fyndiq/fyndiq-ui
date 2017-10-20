import React from 'react'
import PropTypes from 'prop-types'

import styles from '../styles.css'

const FyndiqLogo = ({
  className,
  height,
  width,
  type,
  children,
  taglineSize,
}) => (
  <svg
    // Viewbox changes if there's a tagline or not
    viewBox={children ? '-10 -1 82 36' : '-1 -1 66 28'}
    className={`
      ${styles.svg}
      ${styles[`type-${type}`]}
      ${className}
    `}
    height={height}
    width={width}
  >
    <path className={styles.outer} d="M57.8 0H6.6C5.4 0 4.5 1 4.1 2.1 2.9 5.6 0 9 0 12.8c0 3.8 2.9 7.2 4.1 10.6.3 1.1 1.2 2.1 2.5 2.1h51.2c1.2 0 2.1-1 2.4-2.1 1.1-3.5 3.6-6.9 3.6-10.6 0-3.7-2.5-7.1-3.6-10.6C59.9 1 59 0 57.8 0" />
    <path className={styles.inner} d="M14 7.4H7.8c-.1 0-.2 0-.3.1-.1.1-.1.2-.1.3v9.4c0 .1 0 .2.1.3.1.1.2.1.3.1h1.3c.1 0 .2 0 .3-.1.1-.1.1-.2.1-.3v-3.9h3.9c.1 0 .2 0 .3-.1.1-.1.1-.2.1-.3v-1.1c0-.1 0-.2-.1-.3-.1-.1-.2-.1-.3-.1H9.5V9.3H14c.1 0 .2 0 .3-.1.1-.1.1-.2.1-.3V7.8c0-.1 0-.2-.1-.3-.1-.1-.2-.1-.3-.1zm10 0h-1.4c-.1 0-.3.1-.4.2l-2.4 3.9-2.5-3.9c-.1-.1-.2-.2-.4-.2h-1.5c-.2 0-.3.1-.4.2-.1.1-.1.3 0 .4l3.6 5.5v3.7c0 .1 0 .2.1.3.1.1.2.1.3.1h1.3c.1 0 .2 0 .3-.1.1-.1.1-.2.1-.3v-3.7L24.4 8c.1-.1.1-.3 0-.4-.1-.2-.2-.2-.4-.2zm9.1 0h-1.2c-.1 0-.2 0-.3.1-.1.1-.1.2-.1.3V14l-4.2-6.5c-.1-.1-.2-.2-.4-.2h-1.3c-.1 0-.2 0-.3.1-.1.1-.1.2-.1.3v9.4c0 .1 0 .2.1.3.1.1.2.1.3.1h1.2c.1 0 .2 0 .3-.1.1-.1.1-.2.1-.3V11l4.2 6.4c.1.1.2.2.4.2h1.4c.1 0 .2 0 .3-.1.1-.1.1-.2.1-.3V7.8c0-.1 0-.2-.1-.3-.2-.1-.3-.1-.4-.1zm9.1 1.2c-.4-.4-1-.7-1.6-.9-.6-.2-1.3-.3-2.1-.3h-3.2c-.1 0-.2 0-.3.1-.1.1-.1.2-.1.3v9.4c0 .1 0 .2.1.3.1.1.2.1.3.1h3.2c.8 0 1.6-.1 2.2-.4.6-.2 1.2-.6 1.6-1.1.4-.5.7-1 .9-1.7.2-.7.3-1.4.3-2.2 0-.8-.1-1.5-.3-2.1-.3-.6-.6-1.1-1-1.5zm-1 5.2c-.1.4-.2.7-.4.9-.2.2-.3.4-.5.5l-.6.3c-.2.1-.4.1-.6.1H37V9.3h1.7c.5 0 1 .1 1.3.2.3.1.6.3.8.6.2.3.4.6.5 1 .1.4.2.9.2 1.4-.1.5-.2 1-.3 1.3zm5-6.4H45c-.1 0-.2 0-.3.1-.1.1-.1.2-.1.3v9.4c0 .1 0 .2.1.3.1.1.2.1.3.1h1.3c.1 0 .2 0 .3-.1.1-.1.1-.2.1-.3V7.8c0-.1 0-.2-.1-.3-.1-.1-.2-.1-.4-.1zm11.5 5.1c0-.7-.1-1.4-.3-2-.2-.6-.5-1.2-.9-1.7s-.9-.9-1.6-1.2c-.6-.3-1.4-.5-2.2-.5-.8 0-1.5.2-2.2.5-.6.3-1.1.7-1.6 1.2-.4.5-.7 1.1-.9 1.7-.2.6-.3 1.3-.3 2s.1 1.4.3 2c.2.6.5 1.2.9 1.7s.9.9 1.6 1.2c.6.3 1.3.4 2.2.4.8 0 1.5-.2 2.2-.4h.1l.8.8c.2.2.4.2.6 0l.7-.8c.2-.2.2-.4 0-.6l-.6-.6c.4-.5.7-1.1.9-1.7.2-.7.3-1.3.3-2zm-3.4 1.6c-.2-.2-.4-.2-.6 0l-.7.8c-.2.2-.2.4 0 .6l.4.4c-.2 0-.4.1-.7.1-.5 0-.9-.1-1.3-.3-.4-.2-.6-.5-.9-.8-.2-.3-.4-.7-.5-1.1-.1-.4-.2-.9-.2-1.3s.1-.9.2-1.3.3-.8.5-1.1c.2-.3.5-.6.9-.8.4-.2.8-.3 1.3-.3s.9.1 1.3.3c.4.2.6.4.9.8.2.3.4.7.5 1.1.1.4.2.9.2 1.3s-.1.9-.2 1.3-.2.7-.4 1l-.7-.7z" />
    {children ? <text
      className={styles.tagline}
      x="32"
      y="33"
      fontSize={taglineSize}
    >
      {children}
    </text> : null}
  </svg>

)

FyndiqLogo.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  type: PropTypes.oneOf([
    'normal',
    'outline',
    'outline-transp',
    'bw',
    'outline-bw',
    'outline-transp-bw',
  ]),
  className: PropTypes.string,
  children: PropTypes.string,
  taglineSize: PropTypes.number,
}

FyndiqLogo.defaultProps = {
  height: 60,
  width: undefined,
  type: 'normal',
  className: '',
  children: '',
  taglineSize: 6.5,
}

export default FyndiqLogo

const Square = ({
  className,
  height,
  width,
  type,
}) => (
  <svg
    className={`
      ${styles[`type-${type}`]}
      ${className}
    `}
    width={width}
    height={height}
    viewBox="-20 -14 56 56"
  >
    <rect className={styles.outer} x="-20" y="-14" width="56" height="56" />
    <path className={styles.inner} d="M18.162 4.259c0 .321-.118.636-.32.861a1.045 1.045 0 0 1-.773.358H5.421v6.189h10.081c.287 0 .57.13.773.358.203.225.319.54.319.86v3.042c0 .32-.116.634-.32.86a1.045 1.045 0 0 1-.772.357H5.421v11.211c0 .321-.117.636-.32.861a1.047 1.047 0 0 1-.773.358H1.092c-.287 0-.569-.13-.772-.358a1.3 1.3 0 0 1-.32-.86V1.218C0 .899.117.583.32.358.523.13.805 0 1.092 0h15.977c.288 0 .57.13.773.358.202.225.32.541.32.86V4.26z" />
  </svg>
)

Square.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  type: FyndiqLogo.propTypes.type,
}

Square.defaultProps = {
  className: '',
  height: 56,
  width: 56,
  type: FyndiqLogo.defaultProps.type,
}

export { Square }
