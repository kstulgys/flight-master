import React, { Component } from "react"
import { Input } from "semantic-ui-react"

class Filter extends Component {
  handleChange = (e, { value }) => {
    this.props.onChange(value)
  }
  render() {
    return (
      <Input
        onChange={this.handleChange}
        fluid
        icon="search"
        placeholder="Search..."
      />
    )
  }
}

export default Filter
