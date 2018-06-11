import React, { Component, Fragment } from "react"
import { Grid, Button, Segment } from "semantic-ui-react"

import NewItemContainer from "../containers/NewItemContainer"
import PackedItemsContainer from "../containers/PackedItemsContainer"
import UnpackedItemsContainer from "../containers/UnpackedItemsContainer"
import MarkAllAsUnpackedContainer from "../containers/MarkAllAsUnpackedContainer"
import UnpackedFilterContainer from "../containers/UnpackedFilterContainer"
import PackedFilterContainer from "../containers/PackedFilterContainer"

class Application extends Component {
  render() {
    return (
      <Grid centered stretched padded>
        <Grid.Column mobile={16} tablet={10}>
          <NewItemContainer />
        </Grid.Column>

        <Grid.Column mobile={16} tablet={10}>
          <UnpackedItemsContainer
            title="Unpacked Items"
            render={() => <UnpackedFilterContainer />}
          />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={10}>
          <PackedItemsContainer
            title="Packed Items"
            render={() => <PackedFilterContainer />}
          />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={10}>
          <Segment style={{ padding: 0 }} raised>
            <MarkAllAsUnpackedContainer />
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Application
