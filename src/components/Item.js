import React from "react"
import { List, Checkbox } from "semantic-ui-react"

const Item = ({ item }) => (
  <List.Item>
    <Checkbox label={item.value} defaultChecked={item.packed} />
  </List.Item>
)

export default Item
