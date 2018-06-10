import React, { Fragment } from "react"
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

const Items = ({ title }) => (
  <Fragment>
    <Divider horizontal content={title} />
    <Segment.Group raised>
      <Segment attached="top" inverted color="orange">
        <Input fluid type="text" placeholder="Search item" />
      </Segment>

      <Segment attached>
        <List divided relaxed="very" verticalAlign="middle">
          <List.Item>
            <Checkbox label="Make my profile visible" />
          </List.Item>
          <List.Item>
            <Checkbox label="Make my profile visible" />
          </List.Item>
          <List.Item>
            <Checkbox label="Make my profile visible" />
          </List.Item>
        </List>
      </Segment>
    </Segment.Group>
  </Fragment>
)

export default Items
