import styled from 'styled-components'
import { Component } from 'react'
import colors from '../../utils/style/colors'

const InputWrapper = styled.div`
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  display: flex;
  flex-direction: column;
`

const StyledLabel = styled.label`
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
`

const StyledInput = styled.input`
  border: none;
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  background-color: transparent;
  border-bottom: 2px solid
    ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  margin-top: 5px;
  margin-bottom: 15px;
`

class EmailInput extends Component {
  constructor(props) {
    // L'autre manière de binder de manière explicite votre fonction au this
    // this.updateInputValue =this.updateInputValue.bind(this)
    super(props)
    this.state = {
      inputValue: '',
    }
  }

  updateInputValue(value) {
    this.setState({ inputValue: value })
  }

  render() {
    const { theme } = this.props

    return (
      <InputWrapper theme={theme}>
        <StyledLabel theme={theme}>Adresse Email</StyledLabel>
        <StyledInput
          theme={theme}
          onChange={(e) => this.updateInputValue(e.target.value)}
        />
        {this.state.inputValue}
      </InputWrapper>
    )
  }
}

export default EmailInput
