import React, { Fragment } from "react"
import Filter from "./Filter"
import Item from "./Item"
import { List, Divider, Segment } from "semantic-ui-react"

const Items = ({ title, items }) => (
  <Fragment>
    <Divider horizontal content={`${title}: ${items.length}`} />
    <Segment.Group raised>
      <Segment attached="top" inverted color="orange">
        <Filter />
      </Segment>

      <Segment attached>
        <List divided relaxed="very" verticalAlign="middle">
          {items.map(item => <Item item={item} key={item.id} />)}
        </List>
      </Segment>
    </Segment.Group>
  </Fragment>
)

export default Items
