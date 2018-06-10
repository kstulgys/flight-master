import React, { Component, Fragment } from "react"
import uniqueId from "lodash/uniqueId"
import NewItem from "./NewItem"
import Items from "./Items"
import { Grid, Button, Segment } from "semantic-ui-react"

const defaultState = [
  { value: "Pants", id: uniqueId(), packed: false },
  { value: "Jacket", id: uniqueId(), packed: false },
  { value: "iPhone Charger", id: uniqueId(), packed: false },
  { value: "MacBook", id: uniqueId(), packed: false },
  { value: "Sleeping Pills", id: uniqueId(), packed: true },
  { value: "Underwear", id: uniqueId(), packed: false },
  { value: "Hat", id: uniqueId(), packed: false },
  { value: "T-Shirts", id: uniqueId(), packed: false },
  { value: "Belt", id: uniqueId(), packed: false },
  { value: "Passport", id: uniqueId(), packed: true },
  { value: "Sandwich", id: uniqueId(), packed: true }
]

class Application extends Component {
  state = {
    items: defaultState
  }

  addItem = item => {
    this.setState({ items: [...this.state.items, item] })
  }
  removeItem = itemToRemove => {
    this.setState({
      items: [...this.state.items.filter(item => item.id !== itemToRemove.id)]
    })
  }

  toggleItem = itemToToggle => {
    const items = this.state.items.map(item => {
      if (item.id == itemToToggle.id) {
        return { ...itemToToggle, packed: !itemToToggle.packed }
      }
      return item
    })
    this.setState({ items })
  }

  markAllAsUnpacked = () => {
    const items = this.state.items.map(item => {
      return { ...item, packed: false }
    })

    this.setState({ items })
  }

  render() {
    const unpackedItems = this.state.items.filter(i => !i.packed)
    const packedItems = this.state.items.filter(i => i.packed)

    return (
      <Grid centered stretched padded>
        <Grid.Column mobile={16} tablet={10}>
          <NewItem onSubmit={this.addItem} />
        </Grid.Column>

        <Grid.Column mobile={16} tablet={10}>
          <Items
            onRemove={this.removeItem}
            onToggle={this.toggleItem}
            title="Unpacked Items"
            items={unpackedItems}
          />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={10}>
          <Items
            onRemove={this.removeItem}
            title="Packed Items"
            items={packedItems}
            onToggle={this.toggleItem}
          />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={10}>
          <Segment style={{ padding: 0 }} raised>
            <Button
              content="Mark All As Unpacked"
              color="orange"
              size="big"
              fluid
              onClick={this.markAllAsUnpacked}
            />
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Application
