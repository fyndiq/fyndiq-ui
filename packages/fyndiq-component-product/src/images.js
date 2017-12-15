import React from 'react'
import { Arrow } from 'fyndiq-icons'
import styles from '../product-images.css'

class ProductImages extends React.Component {
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
    this.setState(state => ({
      imgId: state.imgId === 0 ? this.props.images.length - 1 : state.imgId - 1,
    }))
  }

  nextImage() {
    this.setState(state => ({
      imgId: state.imgId === this.props.images.length - 1 ? 0 : state.imgId + 1,
    }))
  }

  render() {
    const { images, title } = this.props

    return (
      <div className={styles.images}>
        <div className={styles.topContainer}>
          <button className={styles.buttonArrow} onClick={this.previousImage}>
            <Arrow orientation="left" />
          </button>
          <div className={styles.imgBigWrapper}>
            <img
              src={images[this.state.imgId]}
              alt={title}
              className={styles.imgBig}
            />
          </div>
          <button className={styles.buttonArrow} onClick={this.nextImage}>
            <Arrow orientation="right" />
          </button>
        </div>

        <div className={styles.smallImgWrapper}>
          {images.map((image, id) => (
            <button
              key={image}
              onClick={() => this.changeImageId(id)}
              className={`
                ${styles.buttonImg}
                ${this.state.imgId === id && styles.buttonImgActive}
              `}
              onMouseEnter={() => this.changeImageId(id)}
            >
              <img src={images[id]} alt={title} className={styles.imgSmall} />
            </button>
          ))}
        </div>
      </div>
    )
  }
}

export default ProductImages
