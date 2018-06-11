import React, { Component } from "react"
import { Form, Segment } from "semantic-ui-react"

class NewItem extends Component {
  handleChange = (e, { value }) => {
    this.props.updateNewItemValue(value)
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addNewItem(this.props.value)
    this.props.resetItemValue()
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
