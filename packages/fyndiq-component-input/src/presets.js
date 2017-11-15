import React from 'react'
import PropTypes from 'prop-types'

import Button, { Wrapper } from 'fyndiq-component-button'
import Dropdown from 'fyndiq-component-dropdown'
import { Arrow } from 'fyndiq-icons'

import Input from './input'
import styles from '../input.css'

class Presets extends React.Component {
  static propTypes = {
    input: PropTypes.element,
    presets: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func,
  }

  static defaultProps = {
    input: <Input />,
    presets: [],
    onChange: () => {},
  }

  constructor(props) {
    super(props)

    this.state = { value: undefined }

    this.changeValue = this.changeValue.bind(this)
  }

  changeValue(value) {
    this.setState({ value })
    this.props.onChange(value)
  }

  render() {
    const { input, presets } = this.props

    return (
      <span className={styles.presetWrapper}>
        {React.cloneElement(input, {
          value: this.state.value,
          onChange: this.changeValue,
        })}
        <Dropdown
          position="br"
          button={
            <Button type="white" className={styles.presetDropdownButton}>
              <Arrow orientation="down" />
            </Button>
          }
        >
          {({ onClose }) => (
            <Wrapper orientation="vertical" noOuterBorder>
              {presets.map(preset => (
                <Button
                  key={preset}
                  type="white"
                  size="m"
                  onClick={() => {
                    onClose()
                    this.changeValue(preset)
                  }}
                >
                  {preset}
                </Button>
              ))}
            </Wrapper>
          )}
        </Dropdown>
      </span>
    )
  }
}

export default Presets
