import React from 'react'
import PropTypes from 'prop-types'
import colors from 'fyndiq-styles-colors'

import styles from '../illustrations.css'

const SearchNoResultIllustration = ({ className }) => (
  <svg
    viewBox="0 0 201 200"
    className={`
      ${styles.illustration}
      ${className}
    `}
  >
    <defs>
      <path id="searchno1" d="M.68 100.56c0 55.22 44.77 100 100 100 55.22 0 100-44.78 100-100 0-55.23-44.78-100-100-100-55.23 0-100 44.77-100 100z" />
      <path id="searchno3" d="M2.77.5C1.6.5.67 1.44.67 2.6c0 1.16.94 2.1 2.1 2.1h36.8c1.15 0 2.1-.94 2.1-2.1 0-1.16-.95-2.1-2.1-2.1H2.76z" />
      <path id="searchno5" d="M2.7.38C1.52.38.6 1.32.6 2.48c0 1.16.93 2.1 2.1 2.1h42.15c1.16 0 2.1-.94 2.1-2.1 0-1.16-.95-2.1-2.1-2.1H2.7z" />
      <path id="searchno7" d="M2.62.38c-1.16 0-2.1.94-2.1 2.1 0 1.16.94 2.1 2.1 2.1h16.83c1.16 0 2.1-.94 2.1-2.1 0-1.16-.94-2.1-2.1-2.1H2.62z" />
      <path id="searchno9" d="M2.35.38c-1.16 0-2.1.94-2.1 2.1 0 1.16.94 2.1 2.1 2.1h34.1c1.15 0 2.1-.94 2.1-2.1 0-1.16-.95-2.1-2.1-2.1H2.34z" />
      <path id="searchno11" d="M2.27.38c-1.16 0-2.1.94-2.1 2.1 0 1.16.94 2.1 2.1 2.1h42.2c1.17 0 2.1-.94 2.1-2.1 0-1.16-.93-2.1-2.1-2.1H2.28z" />
      <path id="searchno13" d="M2.5.5C1.33.5.4 1.44.4 2.6c0 1.16.94 2.1 2.1 2.1h38.88c1.16 0 2.1-.94 2.1-2.1 0-1.16-.94-2.1-2.1-2.1H2.48z" />
      <path id="searchno15" d="M3.28.5C1.68.5.4 1.44.4 2.6c0 1.16 1.3 2.1 2.88 2.1h53.5c1.6 0 2.9-.94 2.9-2.1 0-1.16-1.3-2.1-2.9-2.1H3.3z" />
      <path id="searchno17" d="M.15 0z" />
      <path id="searchno19" d="M.18 23.6C.18 10.64 10.72.1 23.68.1c12.95 0 23.5 10.54 23.5 23.5s-10.55 23.5-23.5 23.5C10.72 47.1.18 36.56.18 23.6zm28.23-7.98l-4.72 4.74-4.73-4.74c-.9-.9-2.35-.9-3.25 0-.9.9-.9 2.35 0 3.25l4.73 4.73-4.73 4.73c-.9.9-.9 2.35 0 3.24.9.9 2.35.9 3.25 0l4.73-4.73 4.73 4.73c.9.9 2.36.9 3.25 0 .9-.9.9-2.34 0-3.24l-4.73-4.73 4.73-4.73c.9-.9.9-2.35 0-3.25-.9-.9-2.35-.9-3.24 0z" />
      <path id="searchno21" d="M.6.86c-.54.55-.54 1.44 0 2l7.46 7.44L.6 17.73c-.54.55-.54 1.44 0 2 .28.27.64.4 1 .4s.72-.13 1-.4l8.44-8.45c.55-.56.55-1.45 0-2L2.6.86c-.28-.28-.64-.42-1-.42S.88.58.6.86z" />
      <path id="searchno23" d="M9.76.86L1.3 9.3c-.54.55-.54 1.44 0 2l8.46 8.43c.27.28.63.42 1 .42.35 0 .7-.14.98-.42.55-.55.55-1.44 0-2L4.3 10.3l7.44-7.45c.55-.56.55-1.44 0-2-.27-.27-.63-.4-1-.4-.35 0-.7.13-.98.4z" />
      <path id="searchno25" d="M4.6.6h28.15c2.33 0 4.22 1.9 4.22 4.2v5.64c0 2.33-1.9 4.22-4.22 4.22H4.6c-2.33 0-4.22-1.9-4.22-4.22V4.8C.38 2.5 2.28.6 4.6.6zm23.93 2.8v2.82h5.63v-1.4c0-.78-.63-1.4-1.4-1.4h-4.23zm-8.45 2.82h5.63v-2.8H20.1v2.8zm-8.44 0h5.63v-2.8h-5.63v2.8zM3.2 4.82v1.4H8.8v-2.8H4.6c-.77 0-1.4.62-1.4 1.4zm25.33 4.22v2.8h4.22c.78 0 1.4-.62 1.4-1.4v-1.4h-5.62zm-8.45 2.8h5.63v-2.8H20.1v2.8zm-8.44 0h5.63v-2.8h-5.63v2.8zm-8.45-1.4c0 .78.63 1.4 1.4 1.4h4.22v-2.8H3.2v1.4z" />
      <path id="searchno27" d="M.1 14.58c.35 4.6 3.33 7.9 6.63 7.4s5.7-4.62 5.33-9.2C11.7 8.2 5.03.55 5.03.55S-.27 10 .1 14.58z" />
    </defs>
    <g id="Page-1" fill="none" fillRule="evenodd">
      <g id="Group-3" transform="translate(0 -.24)">
        <mask id="searchno2" fill={colors.white}>
          <use xlinkHref="#searchno1" />
        </mask>
        <path id="Fill-1" fill={colors.palegrey} d="M-4.32 205.55h210v-210h-210z" mask="url(#searchno2)" />
      </g>
      <path id="Fill-4" fill={colors.border} d="M100.35 76.34v-7.3c0-10.05-8.18-18.24-18.24-18.24-10.05 0-18.23 8.2-18.23 18.25v7.3h36.48zm25.54 69.32V80H104v9.1c0 1.02-.82 1.84-1.83 1.84-1 0-1.82-.82-1.82-1.83V80H63.87v9.1c0 1.02-.82 1.84-1.83 1.84-1 0-1.82-.82-1.82-1.83V80h-21.9v65.66h87.57zm3.64-67.5v69.33c0 1-.82 1.8-1.83 1.8H36.5c-1 0-1.82-.8-1.82-1.8V78.16c0-1 .82-1.83 1.82-1.83h23.72v-7.3c0-12.06 9.82-21.88 21.9-21.88 12.06 0 21.88 9.82 21.88 21.9v7.28h23.7c1.02 0 1.84.82 1.84 1.83z" />
      <g id="Group-8" transform="translate(4 166.76)">
        <mask id="searchno4" fill={colors.white}>
          <use xlinkHref="#searchno3" />
        </mask>
        <path id="Fill-6" fill={colors.border} d="M-4.32 9.7h50.98V-4.5H-4.32z" mask="url(#searchno4)" />
      </g>
      <g id="Group-11" transform="translate(20 174.76)">
        <mask id="searchno6" fill={colors.white}>
          <use xlinkHref="#searchno5" />
        </mask>
        <path id="Fill-9" fill={colors.border} d="M-4.4 9.58h56.34v-14.2H-4.4z" mask="url(#searchno6)" />
      </g>
      <g id="Group-14" transform="translate(71 174.76)">
        <mask id="searchno8" fill={colors.white}>
          <use xlinkHref="#searchno7" />
        </mask>
        <path id="Fill-12" fill={colors.border} d="M-4.48 9.58h31.03v-14.2H-4.48z" mask="url(#searchno8)" />
      </g>
      <g id="Group-17" transform="translate(97 174.76)">
        <mask id="searchno10" fill={colors.white}>
          <use xlinkHref="#searchno9" />
        </mask>
        <path id="Fill-15" fill={colors.border} d="M-4.75 9.58h48.3v-14.2h-48.3z" mask="url(#searchno10)" />
      </g>
      <g id="Group-20" transform="translate(139 174.76)">
        <mask id="searchno12" fill={colors.white}>
          <use xlinkHref="#searchno11" />
        </mask>
        <path id="Fill-18" fill={colors.border} d="M-4.83 9.58h56.4v-14.2h-56.4z" mask="url(#searchno12)" />
      </g>
      <g id="Group-23" transform="translate(153 166.76)">
        <mask id="searchno14" fill={colors.white}>
          <use xlinkHref="#searchno13" />
        </mask>
        <path id="Fill-21" fill={colors.border} d="M-4.6 9.7h53.08V-4.5H-4.6z" mask="url(#searchno14)" />
      </g>
      <g id="Group-26" transform="translate(88 166.76)">
        <mask id="searchno16" fill={colors.white}>
          <use xlinkHref="#searchno15" />
        </mask>
        <path id="Fill-24" fill={colors.border} d="M-6.48 9.7h73.04V-4.5H-6.48z" mask="url(#searchno16)" />
      </g>
      <g id="Group-29" transform="translate(61 91.76)">
        <mask id="searchno18" fill={colors.white}>
          <use xlinkHref="#searchno17" />
        </mask>
        <path id="Fill-27" fill={colors.border} d="M-4.85 5h10V-5h-10z" mask="url(#searchno18)" />
      </g>
      <g id="Group-40">
        <path id="Fill-30" fill={colors.border} d="M96.37 117.43c3.2 2.54 3.73 7.2 1.2 10.4L67.13 166.1c-2.55 3.2-7.22 3.72-10.4 1.18-3.2-2.53-3.74-7.2-1.2-10.4l30.42-38.26c1.28-1.6 3.08-2.53 4.97-2.75 1.88-.2 3.85.3 5.44 1.56" />
        <path id="Fill-32" fill={colors.white} d="M137 42.86c19.06 6.02 29.68 26.44 23.66 45.52-6.03 19.06-26.45 29.67-45.52 23.65C96.08 106 85.46 85.6 91.48 66.53c6.03-19.08 26.44-29.7 45.5-23.67" />
        <path id="Fill-34" fill={colors.black} d="M96.5 127.9c2.27-3 1.68-7.27-1.3-9.54-1.5-1.13-3.32-1.54-5.05-1.3s-3.36 1.13-4.5 2.62l-27.1 35.8c-2.26 3-1.67 7.27 1.33 9.53 2.98 2.27 7.26 1.68 9.53-1.3l27.1-35.8zm3.26-11.37l5-6.6c-1.4-.94-2.76-1.96-4.05-3.08l-5 6.62c.77.34 1.53.75 2.22 1.3.7.5 1.3 1.12 1.84 1.76zm59.87-43.43c-2.57-18.6-19.8-31.6-38.37-29.04-18.57 2.57-31.6 19.77-29.03 38.36C94.8 101 112 114.02 130.6 111.45c18.56-2.57 31.6-19.77 29.03-38.35zm-39-33.53c21.07-2.9 40.57 11.85 43.5 32.9 2.9 21.06-11.86 40.57-32.92 43.48-8 1.1-15.76-.35-22.5-3.72l-6.67 8.83c.8 3.22.25 6.73-1.9 9.57l-27.1 35.8c-1.9 2.5-4.62 4-7.5 4.4-2.87.4-5.9-.3-8.4-2.2-4.98-3.77-5.96-10.9-2.2-15.9l27.1-35.78c2.16-2.84 5.4-4.33 8.7-4.44l6.7-8.8c-5.08-5.57-8.6-12.65-9.7-20.66-2.9-21.06 11.86-40.56 32.9-43.47z" />
        <path id="Fill-36" fill={colors.white} d="M123.68 35.36c0 12.7-10.3 23-23 23s-23-10.3-23-23 10.3-23 23-23 23 10.3 23 23" />
        <path id="Stroke-38" stroke={colors.black} strokeWidth="10" d="M123.68 35.36c0 12.7-10.3 23-23 23s-23-10.3-23-23 10.3-23 23-23 23 10.3 23 23z" />
      </g>
      <g id="Group-43" transform="translate(77 11.76)">
        <mask id="searchno20" fill={colors.white}>
          <use xlinkHref="#searchno19" />
        </mask>
        <path id="Fill-41" fill={colors.red} d="M-5.56 52.83H52.9V-5.63H-5.55z" mask="url(#searchno20)" />
      </g>
      <path id="Fill-44" fill={colors.black} d="M111.6 76.5c.28.27.64.4 1 .4s.72-.13 1-.4l8.44-8.45c.55-.55.55-1.44 0-2l-8.44-8.43c-.55-.55-1.44-.55-2 0-.54.55-.54 1.44 0 2l7.46 7.44-7.45 7.44c-.54.55-.54 1.44 0 2" />
      <g id="Group-48" transform="translate(111 56.76)">
        <mask id="searchno22" fill={colors.white}>
          <use xlinkHref="#searchno21" />
        </mask>
        <path id="Fill-46" fill={colors.black} d="M-6.84 27.18H18.5V-6.6H-6.85z" mask="url(#searchno22)" />
      </g>
      <path id="Fill-49" fill={colors.black} d="M139.76 76.5c.27.27.63.4 1 .4.35 0 .7-.13 1-.4.54-.56.54-1.45 0-2l-7.46-7.44 7.45-7.45c.55-.54.55-1.43 0-1.98-.56-.55-1.44-.55-2 0l-8.44 8.44c-.54.55-.54 1.44 0 2l8.46 8.43z" />
      <g id="Group-53" transform="translate(130 56.76)">
        <mask id="searchno24" fill={colors.white}>
          <use xlinkHref="#searchno23" />
        </mask>
        <path id="Fill-51" fill={colors.black} d="M-6.14 27.18H19.2V-6.6H-6.14z" mask="url(#searchno24)" />
      </g>
      <path id="Fill-54" fill={colors.black} d="M140.75 85.35H112.6c-2.33 0-4.22 1.9-4.22 4.22v5.63c0 2.33 1.9 4.23 4.22 4.23h28.15c2.33 0 4.22-1.9 4.22-4.23v-5.63c0-2.32-1.9-4.22-4.22-4.22zm1.4 4.22v1.4h-5.62v-2.8h4.22c.78 0 1.4.63 1.4 1.4zm-22.5 7.04h5.62v-2.8h-5.63v2.8zm0-5.62h5.62v-2.8h-5.63v2.8zm8.43 5.63h5.63v-2.8h-5.62v2.8zm0-5.62h5.63v-2.8h-5.62v2.8zm-15.48-2.8h4.22v2.8h-5.63v-1.4c0-.78.63-1.4 1.4-1.4zm-1.4 7.02v-1.4h5.62v2.8h-4.22c-.77 0-1.4-.62-1.4-1.4zm29.55 1.4h-4.22v-2.8h5.63v1.4c0 .78-.63 1.4-1.4 1.4z" />
      <g id="Group-58" transform="translate(108 84.76)">
        <mask id="searchno26" fill={colors.white}>
          <use xlinkHref="#searchno25" />
        </mask>
        <path id="Fill-56" fill={colors.black} d="M-6.66 21.7H44V-6.45H-6.65z" mask="url(#searchno26)" />
      </g>
      <g id="Group-62" transform="translate(151 47.76)">
        <mask id="searchno28" fill={colors.white}>
          <use xlinkHref="#searchno27" />
        </mask>
        <path id="Fill-59" fill={colors.border} d="M-7.55 31.77H19.7l.02-40.95H-7.55z" mask="url(#searchno28)" />
        <path id="Fill-61" fill={colors.black} d="M21.7-11.18H-9.54v44.95H21.7v-44.95zM-5.54 29.77H17.7V-7.18H-5.54v36.95z" mask="url(#searchno28)" />
      </g>
      <path id="Stroke-63" stroke={colors.black} strokeWidth="4" d="M163.06 60.54c-.37-4.58-7.03-12.23-7.03-12.23s-5.3 9.46-4.94 14.04c.35 4.6 3.33 7.9 6.63 7.4s5.7-4.62 5.33-9.2" />
    </g>
  </svg>
)

SearchNoResultIllustration.propTypes = {
  className: PropTypes.string,
}

SearchNoResultIllustration.defaultProps = {
  className: '',
}

export default SearchNoResultIllustration
