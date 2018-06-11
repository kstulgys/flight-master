import React, { Fragment, Component } from "react"
import Item from "./Item"
import { List, Divider, Segment } from "semantic-ui-react"

class Items extends Component {
  render() {
    const { title, items, toggleItem, removeItem } = this.props

    return (
      <Fragment>
        <Divider horizontal content={`${title}: ${items.length}`} />
        <Segment.Group raised>
          <Segment attached="top" inverted color="orange">
            {this.props.render && this.props.render()}
          </Segment>

          <Segment attached>
            <List divided relaxed="very" verticalAlign="middle">
              {items.map(item => (
                <Item
                  onToggle={toggleItem}
                  onRemove={removeItem}
                  item={item}
                  key={item.id}
                />
              ))}
            </List>
          </Segment>
        </Segment.Group>
      </Fragment>
    )
  }
}

export default Items
