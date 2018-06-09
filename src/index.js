import React from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";
import {
  Button,
  Grid,
  Form,
  List,
  Input,
  Checkbox,
  Divider
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const App = () => (
  <Grid centered stretched padded>
    <Grid.Column mobile={16} tablet={10}>
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
    </Grid.Column>

    <Grid.Column mobile={16} tablet={10}>
      <Divider horizontal>Items to pack</Divider>
      <Input fluid type="text" placeholder="Search item" />
    </Grid.Column>

    <Grid.Column mobile={16} tablet={10}>
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
    </Grid.Column>

    <Grid.Column mobile={16} tablet={10}>
      <Divider horizontal>Items to pack</Divider>
      <Input fluid type="text" placeholder="Search item" />
    </Grid.Column>

    <Grid.Column mobile={16} tablet={10}>
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
    </Grid.Column>
  </Grid>
);

render(<App />, document.getElementById("root"));
