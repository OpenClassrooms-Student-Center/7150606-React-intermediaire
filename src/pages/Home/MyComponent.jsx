import { Component } from 'react'

export default class MyComponent extends Component {
  componentDidMount() {
    console.log('===== 🛠componentDidMount🛠 =====')
    this.setState({ test: '' })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('===== 🔄componentDidUpdate🔄 =====')
  }

  componentWillUnmount() {
    console.log('===== 💀componentWillUnmount💀 =====')
  }

  render() {
    console.log('===== ✨render✨ =====')

    return (
      <div
        style={{
          backgroundColor: 'red',
          height: 30,
          marginBottom: 20,
          textAlign: 'center',
        }}
      >
        Mon composant 🤖
      </div>
    )
  }
}
