import React from 'react'
import PropTypes from 'prop-types'
import colors from 'fyndiq-styles-colors'

import styles from '../illustrations.css'

const SearchIllustration = ({ className }) => (
  <svg
    viewBox="0 0 201 200"
    className={`
      ${styles.illustration}
      ${className}
    `}
  >
    <defs>
      <path id="searchp1" d="M.68 100c0 55.23 44.77 100 100 100 55.22 0 100-44.77 100-100S155.9 0 100.68 0C45.45 0 .68 44.77.68 100z" />
      <path id="searchp3" d="M2.77.95C1.6.95.67 1.9.67 3.05c0 1.15.94 2.1 2.1 2.1h36.8c1.15 0 2.1-.95 2.1-2.1 0-1.16-.95-2.1-2.1-2.1H2.76z" />
      <path id="searchp5" d="M2.7.83C1.52.83.6 1.77.6 2.93c0 1.16.93 2.1 2.1 2.1h42.15c1.16 0 2.1-.94 2.1-2.1 0-1.16-.95-2.1-2.1-2.1H2.7z" />
      <path id="searchp7" d="M2.62.83c-1.16 0-2.1.94-2.1 2.1 0 1.16.94 2.1 2.1 2.1h16.83c1.16 0 2.1-.94 2.1-2.1 0-1.16-.94-2.1-2.1-2.1H2.62z" />
      <path id="searchp9" d="M2.35.83c-1.16 0-2.1.94-2.1 2.1 0 1.16.94 2.1 2.1 2.1h34.1c1.15 0 2.1-.94 2.1-2.1 0-1.16-.95-2.1-2.1-2.1H2.34z" />
      <path id="searchp11" d="M2.27.83c-1.16 0-2.1.94-2.1 2.1 0 1.16.94 2.1 2.1 2.1h42.2c1.17 0 2.1-.94 2.1-2.1 0-1.16-.93-2.1-2.1-2.1H2.28z" />
      <path id="searchp13" d="M2.5.95C1.33.95.4 1.9.4 3.05c0 1.15.94 2.1 2.1 2.1h38.88c1.16 0 2.1-.95 2.1-2.1 0-1.16-.94-2.1-2.1-2.1H2.48z" />
      <path id="searchp15" d="M3.28.95C1.68.95.4 1.9.4 3.05c0 1.15 1.3 2.1 2.88 2.1h53.5c1.6 0 2.9-.95 2.9-2.1 0-1.16-1.3-2.1-2.9-2.1H3.3z" />
      <path id="searchp17" d="M.15.45z" />
      <path id="searchp19" d="M28.82.76c-.15.3-3.93 7.57-12.64 7.57C7.48 8.33 3.7 1.1 3.53.77 3.18.07 2.35-.2 1.67.15.97.5.7 1.33 1.04 2c.2.38 4.68 9.1 15.14 9.1S31.12 2.4 31.3 2c.35-.68.07-1.5-.6-1.85-.2-.1-.43-.15-.63-.15-.5 0-1 .28-1.25.76z" />
      <path id="searchp21" d="M4.93 20.18C11.2 8.2 23.75 0 38.17 0 52.6 0 65.16 8.2 71.42 20.18l.1.17c2.65 5.15 4.16 10.97 4.16 17.15 0 20.68-16.83 37.5-37.5 37.5C17.5 75 .68 58.18.68 37.5c0-6.18 1.5-12 4.16-17.15l.1-.17zm33.24-17.4c-12.53 0-23.54 6.68-29.64 16.66h59.3C61.72 9.46 50.7 2.78 38.16 2.78zm14.9 38.85c-.32.03-.65.03-.98.03-5.1 0-9.94-2.56-12.78-6.84-.52-.8-1.77-.8-2.3 0-3 4.56-8.28 7.18-13.75 6.8-8-.5-14.26-7.4-14.26-15.7v-3.7H7c-2.27 4.62-3.55 9.8-3.55 15.28 0 19.15 15.58 34.72 34.72 34.72 19.15 0 34.73-15.57 34.73-34.72 0-5.48-1.28-10.66-3.55-15.28h-2v3.7c0 8.3-6.27 15.2-14.27 15.7zm11.5-19.4H11.78v3.68c0 6.85 5.1 12.54 11.65 12.96 4.5.3 8.8-1.85 11.27-5.58.77-1.16 2.06-1.86 3.46-1.86s2.7.7 3.46 1.86c2.47 3.73 6.8 5.88 11.26 5.58 6.54-.42 11.66-6.1 11.66-12.95v-3.68z" />
      <path id="searchp23" d="M8.68 1.4c0 3.82-3.12 6.93-6.95 6.93-.77 0-1.4.62-1.4 1.4 0 .76.63 1.38 1.4 1.38 5.36 0 9.72-4.35 9.72-9.7 0-.78-.62-1.4-1.4-1.4C9.3 0 8.7.62 8.7 1.4z" />
      <path id="searchp25" d="M8.9 1.4c0 3.82-3.12 6.93-6.95 6.93-.76 0-1.4.62-1.4 1.4 0 .76.64 1.38 1.4 1.38 5.36 0 9.73-4.35 9.73-9.7 0-.78-.63-1.4-1.4-1.4C9.53 0 8.9.62 8.9 1.4z" />
      <path id="searchp27" d="M.18 23.77C.18 10.8 10.72.27 23.68.27c12.95 0 23.5 10.54 23.5 23.5s-10.55 23.5-23.5 23.5c-12.96 0-23.5-10.54-23.5-23.5zm30.62-8.5L19.72 26.33l-2.7-2.7c-.9-.9-2.34-.9-3.23 0-.9.9-.9 2.36 0 3.25l4.3 4.3c.42.43 1 .67 1.62.67.6 0 1.2-.24 1.62-.67l12.7-12.7c.9-.9.9-2.35 0-3.24-.9-.9-2.34-.9-3.24 0z" />
    </defs>
    <g id="Page-1" fill="none" fillRule="evenodd">
      <g id="Group-3">
        <mask id="search2" fill={colors.white}>
          <use xlinkHref="#searchp1" />
        </mask>
        <path id="Fill-1" fill={colors.palegrey} d="M-4.32 205h210V-5h-210z" mask="url(#search2)" />
      </g>
      <path id="Fill-4" fill={colors.border} d="M100.35 76.03v-7.3c0-10.05-8.18-18.24-18.24-18.24-10.05 0-18.23 8.18-18.23 18.24v7.3h36.48zm25.54 69.32V79.68H104v9.12c0 1-.82 1.83-1.83 1.83-1 0-1.82-.82-1.82-1.83v-9.12H63.87v9.12c0 1-.82 1.83-1.83 1.83-1 0-1.82-.82-1.82-1.83v-9.12h-21.9v65.67h87.57zm3.64-67.5v69.33c0 1-.82 1.82-1.83 1.82H36.5c-1 0-1.82-.82-1.82-1.82V77.86c0-1 .82-1.83 1.82-1.83h23.72v-7.3c0-12.06 9.82-21.88 21.9-21.88 12.06 0 21.88 9.82 21.88 21.9v7.28h23.7c1.02 0 1.84.82 1.84 1.83z" />
      <g id="Group-8" transform="translate(4 166)">
        <mask id="search4" fill={colors.white}>
          <use xlinkHref="#searchp3" />
        </mask>
        <path id="Fill-6" fill={colors.border} d="M-4.32 10.14h50.98v-14.2H-4.32z" mask="url(#search4)" />
      </g>
      <g id="Group-11" transform="translate(20 174)">
        <mask id="search6" fill={colors.white}>
          <use xlinkHref="#searchp5" />
        </mask>
        <path id="Fill-9" fill={colors.border} d="M-4.4 10.03h56.34v-14.2H-4.4z" mask="url(#search6)" />
      </g>
      <g id="Group-14" transform="translate(71 174)">
        <mask id="search8" fill={colors.white}>
          <use xlinkHref="#searchp7" />
        </mask>
        <path id="Fill-12" fill={colors.border} d="M-4.48 10.03h31.03v-14.2H-4.48z" mask="url(#search8)" />
      </g>
      <g id="Group-17" transform="translate(97 174)">
        <mask id="search10" fill={colors.white}>
          <use xlinkHref="#searchp9" />
        </mask>
        <path id="Fill-15" fill={colors.border} d="M-4.75 10.03h48.3v-14.2h-48.3z" mask="url(#search10)" />
      </g>
      <g id="Group-20" transform="translate(139 174)">
        <mask id="search12" fill={colors.white}>
          <use xlinkHref="#searchp11" />
        </mask>
        <path id="Fill-18" fill={colors.border} d="M-4.83 10.03h56.4v-14.2h-56.4z" mask="url(#search12)" />
      </g>
      <g id="Group-23" transform="translate(153 166)">
        <mask id="search14" fill={colors.white}>
          <use xlinkHref="#searchp13" />
        </mask>
        <path id="Fill-21" fill={colors.border} d="M-4.6 10.14h53.08v-14.2H-4.6z" mask="url(#search14)" />
      </g>
      <g id="Group-26" transform="translate(88 166)">
        <mask id="search16" fill={colors.white}>
          <use xlinkHref="#searchp15" />
        </mask>
        <path id="Fill-24" fill={colors.border} d="M-6.48 10.14h73.04v-14.2H-6.48z" mask="url(#search16)" />
      </g>
      <g id="Group-29" transform="translate(61 91)">
        <mask id="search18" fill={colors.white}>
          <use xlinkHref="#searchp17" />
        </mask>
        <path id="Fill-27" fill={colors.border} d="M-4.85 5.46h10v-10h-10z" mask="url(#search18)" />
      </g>
      <g id="Group-38">
        <path id="Fill-30" fill={colors.border} d="M96.37 117.1c3.2 2.56 3.73 7.23 1.2 10.42l-30.43 38.26c-2.55 3.2-7.22 3.73-10.4 1.2-3.2-2.54-3.74-7.2-1.2-10.4l30.42-38.28c1.28-1.6 3.08-2.52 4.97-2.74 1.88-.2 3.85.3 5.44 1.55" />
        <path id="Fill-32" fill={colors.white} d="M137 42.55c19.06 6.02 29.68 26.43 23.66 45.5-6.03 19.08-26.45 29.7-45.52 23.67-19.06-6.02-29.68-26.44-23.66-45.5 6.03-19.08 26.44-29.7 45.5-23.67" />
        <path id="Fill-34" fill={colors.black} d="M96.5 127.58c2.27-3 1.68-7.26-1.3-9.53-1.5-1.13-3.32-1.55-5.05-1.3-1.73.23-3.36 1.12-4.5 2.62l-27.1 35.8c-2.26 3-1.67 7.27 1.33 9.53 2.98 2.26 7.26 1.67 9.53-1.32l27.1-35.8zm3.26-11.36l5-6.6c-1.4-.94-2.76-1.96-4.05-3.08l-5 6.6c.77.35 1.53.77 2.22 1.3.7.52 1.3 1.14 1.84 1.78zm59.87-43.43c-2.57-18.6-19.8-31.62-38.37-29.06-18.57 2.57-31.6 19.78-29.03 38.37 2.57 18.58 19.78 31.6 38.36 29.04 18.56-2.57 31.6-19.78 29.03-38.35zm-39-33.55c21.07-2.9 40.57 11.85 43.5 32.9 2.9 21.07-11.86 40.58-32.92 43.5-8 1.1-15.76-.36-22.5-3.74l-6.67 8.84c.8 3.22.25 6.74-1.9 9.58l-27.1 35.8c-1.9 2.5-4.62 4-7.5 4.4-2.87.38-5.9-.3-8.4-2.2-4.98-3.77-5.96-10.9-2.2-15.9l27.1-35.78c2.16-2.84 5.4-4.34 8.7-4.45l6.7-8.83c-5.08-5.56-8.6-12.64-9.7-20.64-2.9-21.06 11.86-40.56 32.9-43.48z" />
        <path id="Fill-36" fill={colors.black} d="M140.7 90.15c-.7-.35-1.53-.07-1.88.6-.15.32-3.93 7.58-12.64 7.58-8.7 0-12.48-7.23-12.65-7.56-.35-.7-1.18-.96-1.86-.62-.7.34-.97 1.17-.62 1.86.18.38 4.67 9.1 15.13 9.1s14.94-8.72 15.13-9.1c.35-.68.07-1.5-.6-1.85" />
      </g>
      <g id="Group-41" transform="translate(110 90)">
        <mask id="search20" fill={colors.white}>
          <use xlinkHref="#searchp19" />
        </mask>
        <path id="Fill-39" fill={colors.black} d="M-6.05 18.06H38.4v-25H-6.05z" mask="url(#search20)" />
      </g>
      <path id="Fill-42" fill={colors.black} d="M159.42 60.17C153.15 48.2 140.62 40 126.18 40c-14.44 0-26.98 8.2-33.25 20.18l-.1.17C90.2 65.5 88.7 71.32 88.7 77.5c0 20.68 16.82 37.5 37.5 37.5 20.67 0 37.5-16.82 37.5-37.5 0-6.18-1.5-12-4.17-17.15l-.08-.18zm-33.24-17.4c12.53 0 23.54 6.7 29.64 16.67h-59.3c6.1-9.98 17.12-16.66 29.66-16.66zm-26.4 19.45h52.78v3.7c0 6.83-5.12 12.52-11.66 12.94-4.47.3-8.8-1.85-11.26-5.58-.77-1.16-2.07-1.86-3.46-1.86-1.4 0-2.7.7-3.46 1.86-2.48 3.73-6.78 5.88-11.27 5.58-6.54-.42-11.66-6.1-11.66-12.95v-3.68zm26.4 50c-19.15 0-34.73-15.57-34.73-34.72 0-5.48 1.28-10.66 3.55-15.28h2v3.7c0 8.3 6.27 15.2 14.27 15.7 5.47.38 10.74-2.24 13.76-6.8.52-.8 1.77-.8 2.3 0 2.83 4.28 7.66 6.84 12.76 6.84.32 0 .65 0 .98-.03 8-.5 14.26-7.42 14.26-15.72v-3.68h2c2.28 4.62 3.56 9.8 3.56 15.28 0 19.15-15.58 34.72-34.72 34.72z" />
      <g id="Group-46" transform="translate(88 40)">
        <mask id="search22" fill={colors.white}>
          <use xlinkHref="#searchp21" />
        </mask>
        <path id="Fill-44" fill={colors.black} d="M-6.27 81.94h88.9V-6.94h-88.9z" mask="url(#search22)" />
      </g>
      <path id="Fill-47" fill={colors.black} d="M139.73 76.1c-.77 0-1.4-.6-1.4-1.38 0-.77.63-1.4 1.4-1.4 3.83 0 6.95-3.1 6.95-6.93 0-.78.62-1.4 1.38-1.4.77 0 1.4.62 1.4 1.4 0 5.35-4.37 9.7-9.73 9.7" />
      <g id="Group-51" transform="translate(138 65)">
        <mask id="search24" fill={colors.white}>
          <use xlinkHref="#searchp23" />
        </mask>
        <path id="Fill-49" fill={colors.black} d="M-6.6 18.06h25v-25h-25z" mask="url(#search24)" />
      </g>
      <path id="Fill-52" fill={colors.black} d="M111.95 76.1c-.76 0-1.4-.6-1.4-1.38 0-.77.64-1.4 1.4-1.4 3.83 0 6.95-3.1 6.95-6.93 0-.78.62-1.4 1.4-1.4.75 0 1.38.62 1.38 1.4 0 5.35-4.37 9.7-9.73 9.7" />
      <g id="Group-56" transform="translate(110 65)">
        <mask id="search26" fill={colors.white}>
          <use xlinkHref="#searchp25" />
        </mask>
        <path id="Fill-54" fill={colors.black} d="M-6.38 18.06h25v-25h-25z" mask="url(#search26)" />
      </g>
      <g id="Group-61">
        <path id="Fill-57" fill={colors.white} d="M123.68 34.77c0 12.7-10.3 23-23 23s-23-10.3-23-23 10.3-23 23-23 23 10.3 23 23" />
        <path id="Stroke-59" stroke={colors.black} strokeWidth="10" d="M123.68 34.77c0 12.7-10.3 23-23 23s-23-10.3-23-23 10.3-23 23-23 23 10.3 23 23z" />
      </g>
      <g id="Group-64" transform="translate(77 11)">
        <mask id="search28" fill={colors.white}>
          <use xlinkHref="#searchp27" />
        </mask>
        <path id="Fill-62" fill={colors.green} d="M-5.56 53H52.9V-5.46H-5.55z" mask="url(#search28)" />
      </g>
    </g>
  </svg>
)

SearchIllustration.propTypes = {
  className: PropTypes.string,
}

SearchIllustration.defaultProps = {
  className: '',
}

export default SearchIllustration
