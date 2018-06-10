import React from "react"
import {
  Grid,
  Form,
  List,
  Input,
  Checkbox,
  Divider,
  Segment,
  Header
} from "semantic-ui-react"

const NewItem = () => (
  <Segment raised>
    <Form>
      <Form.Group unstackable widths={2}>
        <Form.Input width={11} tablet={10} />
        <Form.Button
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

export default NewItem
