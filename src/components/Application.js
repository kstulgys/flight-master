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
  render() {
    const packed = this.state.items.filter(i => i.packed == true)
    const unpacked = this.state.items.filter(i => i.packed == false)

    console.log(packed)
    return (
      <Grid centered stretched padded>
        <Grid.Column mobile={16} tablet={10}>
          <NewItem />
        </Grid.Column>

        <Grid.Column mobile={16} tablet={10}>
          <Items title="Unpacked Items" items={unpacked} />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={10}>
          <Items title="Packed Items" items={packed} />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={10}>
          <Segment style={{ padding: 0 }} raised>
            <Button
              content="Mark All As Unpacked"
              color="orange"
              size="big"
              fluid
            />
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Application
