import React from 'react'
import PropTypes from 'prop-types'

import { Arrow } from 'fyndiq-icons'

import Img from './image'
import styles from '../article-images.css'

class ArticleImages extends React.Component {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.string),
    orientation: PropTypes.oneOf(['horizontal', 'vertical']),
    alt: PropTypes.string,
    noArrows: PropTypes.bool,
  }

  static defaultProps = {
    orientation: 'horizontal',
    images: [],
    alt: '',
    noArrows: false,
  }

  constructor(props) {
    super(props)

    this.state = { imgId: 0 }

    this.previousImage = this.previousImage.bind(this)
    this.nextImage = this.nextImage.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.images !== this.props.images) {
      this.setState({ imgId: 0 })
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress)
  }

  handleKeyPress(e) {
    if (e.keyCode === 37) {
      // Left Arrow
      this.previousImage()
    } else if (e.keyCode === 39) {
      // Right Arrow
      this.nextImage()
    }
  }

  changeImageId(id) {
    this.setState({ imgId: id })
  }

  previousImage() {
    const { images } = this.props
    this.setState(state => ({
      imgId: state.imgId === 0 ? images.length - 1 : state.imgId - 1,
    }))
  }

  nextImage() {
    const { images } = this.props
    this.setState(state => ({
      imgId: state.imgId === images.length - 1 ? 0 : state.imgId + 1,
    }))
  }

  render() {
    const { images, alt, orientation, noArrows } = this.props

    return (
      <div
        className={`
          ${styles.wrapper}
          ${orientation === 'vertical' && styles.wrapperVertical}
        `}
      >
        <div className={styles.imgBigContainer}>
          {!noArrows && (
            <button className={styles.buttonArrow} onClick={this.previousImage}>
              <Arrow orientation="left" />
            </button>
          )}

          <div className={styles.imgBigWrapper}>
            <div className={styles.imgBigDummy} />
            <Img
              src={images[this.state.imgId]}
              alt={alt}
              className={styles.imgBig}
            />
          </div>
          {!noArrows && (
            <button className={styles.buttonArrow} onClick={this.nextImage}>
              <Arrow orientation="right" />
            </button>
          )}
        </div>

        <div className={styles.smallImgWrapper}>
          {images.slice(0, 4).map((image, id) => (
            <button
              key={image}
              onClick={() => this.changeImageId(id)}
              className={`
                ${styles.buttonImg}
                ${this.state.imgId === id && styles.buttonImgActive}
              `}
              onMouseEnter={() => this.changeImageId(id)}
            >
              {id === 3 &&
                images.length > 4 && (
                  <div className={styles.additionnalImages}>
                    +{images.length - 4}
                  </div>
                )}
              <img src={images[id]} alt={alt} className={styles.imgSmall} />
            </button>
          ))}
        </div>
      </div>
    )
  }
}

export default ArticleImages
