import React from "react"
import { List, Checkbox, Icon, Button } from "semantic-ui-react"

const Item = ({ item, onRemove, onToggle }) => (
  <List.Item>
    <List.Content verticalAlign="middle">
      <Checkbox
        onChange={() => onToggle(item.id)}
        label={item.value}
        defaultChecked={item.packed}
      />
      <Icon
        style={{ paddingLeft: 15 }}
        size="large"
        link
        name="delete"
        content="remove"
        onClick={() => onRemove(item.id)}
      />
    </List.Content>
  </List.Item>
)

export default Item
