import React, { Fragment, Component } from "react"
import Filter from "./Filter"
import Item from "./Item"
import { List, Divider, Segment } from "semantic-ui-react"

class Items extends Component {
  state = {
    searchTerm: ""
  }

  updateSearchTerm = searchTerm => {
    this.setState({ searchTerm })
  }

  render() {
    const { title, items, onRemove, onToggle } = this.props
    const { searchTerm } = this.state

    return (
      <Fragment>
        <Divider horizontal content={`${title}: ${items.length}`} />
        <Segment.Group raised>
          <Segment attached="top" inverted color="orange">
            <Filter onChange={this.updateSearchTerm} />
          </Segment>

          <Segment attached>
            <List divided relaxed="very" verticalAlign="middle">
              {items
                .filter(item =>
                  item.value.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map(item => (
                  <Item
                    onToggle={onToggle}
                    onRemove={onRemove}
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

//{items.map(item => <Item item={item} key={item.id} />)}
//
