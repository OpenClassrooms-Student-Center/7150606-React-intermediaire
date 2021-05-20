import { Component } from 'react'

export default class MyComponent extends Component {
  componentWillUnmount() {
    console.log('===== 💀componentWillUnmount💀 =====')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('===== 🔄componentDidUpdate =====')
  }
  componentDidMount() {
    console.log('=== 🛠componentDidMount🛠 ===')
    this.setState({ test: 'mon test' })
  }
  render() {
    console.log('=== ✨render✨ ===')
    return <div>Mon composant</div>
  }
}
