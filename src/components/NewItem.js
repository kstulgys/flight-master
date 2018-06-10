import React, { Component } from "react"
import { Form, Segment } from "semantic-ui-react"
import uniqueId from "lodash/uniqueId"

class NewItem extends Component {
  state = {
    value: ""
  }

  handleChange = (e, { value }) => {
    this.setState({ value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit({
      value: this.state.value,
      id: uniqueId(),
      packed: false
    })
    this.setState({ value: "" })
  }

  render() {
    return (
      <Segment raised>
        <Form>
          <Form.Group unstackable widths={2}>
            <Form.Input width={11} tablet={10} onChange={this.handleChange} />
            <Form.Button
              onClick={this.handleSubmit}
              basic
              color="orange"
              content="Add"
              width={5}
              tablet={6}
              fluid
            />
          </Form.Group>
        </Form>
      </Segment>
    )
  }
}

export default NewItem
