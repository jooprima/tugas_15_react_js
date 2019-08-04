import React, {Component} from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Menu,
  Icon,
  Grid,
  Table,
  Search,
  Label,
  Segment,
  Feed,
  Form,
  Button,
  Comment,
  Header
} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
        <Segment>
          <Grid container stackable>
            <Grid.Row>
              <Grid.Column>
                <Table celled>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell colspan="3" textAlign="right">
                        <Search placeholder="search" />
                      </Table.HeaderCell>
                    </Table.Row>

                    <Table.Row>
                      <Table.HeaderCell colspan="2" textAlign="center">
                        Nama Document
                      </Table.HeaderCell>
                      <Table.HeaderCell textAlign="center">
                        Jenis File
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    <Table.Row warning>
                      <Table.Cell colspan="2">
                        <Label ribbon>Panduan Belajar Javascript</Label>
                      </Table.Cell>
                      <Table.Cell textAlign="center">PDF</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell colspan="2">Panduan Belajar CSS</Table.Cell>
                      <Table.Cell textAlign="center">PDF</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell colspan="2">
                        Panduan Belajar ReactJS
                      </Table.Cell>
                      <Table.Cell textAlign="center">PDF</Table.Cell>
                    </Table.Row>
                  </Table.Body>

                  <Table.Footer>
                    <Table.Row>
                      <Table.HeaderCell colspan="3">
                        <Menu floated="right" pagination>
                          <Menu.Item as="a" icon>
                            <Icon name="chevron left" />
                          </Menu.Item>
                          <Menu.Item as="a">1</Menu.Item>
                          <Menu.Item as="a">2</Menu.Item>
                          <Menu.Item as="a">3</Menu.Item>
                          <Menu.Item as="a">4</Menu.Item>
                          <Menu.Item as="a" icon>
                            <Icon name="chevron right" />
                          </Menu.Item>
                        </Menu>
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Footer>
                </Table>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={6}>
                <Comment.Group threaded>
                  <Header as="h3" dividing>
                    Comments
                  </Header>

                  <Comment>
                    <Comment.Avatar
                      as="a"
                      src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
                    />
                    <Comment.Content>
                      <Comment.Author as="a">Satria</Comment.Author>
                      <Comment.Metadata>
                        <span>Today at 5:42PM</span>
                      </Comment.Metadata>
                      <Comment.Text>Hallo....!</Comment.Text>
                      <Comment.Actions>
                        <a href="/">Reply</a>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>

                  <Comment>
                    <Comment.Avatar
                      as="a"
                      src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
                    />
                    <Comment.Content>
                      <Comment.Author as="a">Danang</Comment.Author>
                      <Comment.Metadata>
                        <span>Yesterday at 12:30AM</span>
                      </Comment.Metadata>
                      <Comment.Text>
                        <p>
                          Kerjakan sesuatu semampu kamu...!
                        </p>
                      </Comment.Text>
                      <Comment.Actions>
                        <a href="/">Reply</a>
                      </Comment.Actions>
                    </Comment.Content>

                    <Comment.Group>
                      <Comment>
                        <Comment.Avatar
                          as="a"
                          src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
                        />
                        <Comment.Content>
                          <Comment.Author as="a">Ricky</Comment.Author>
                          <Comment.Metadata>
                            <span>Just Now</span>
                          </Comment.Metadata>
                          <Comment.Text>
                            Kamu sekarang dimana danang?
                          </Comment.Text>
                          <Comment.Actions>
                            <a href="/">Reply</a>
                          </Comment.Actions>
                        </Comment.Content>
                      </Comment>
                    </Comment.Group>
                  </Comment>

                  <Comment>
                    <Comment.Avatar
                      as="a"
                      src="https://react.semantic-ui.com/images/avatar/small/joe.jpg"
                    />
                    <Comment.Content>
                      <Comment.Author as="a">Joe</Comment.Author>
                      <Comment.Metadata>
                        <span>5 days ago</span>
                      </Comment.Metadata>
                      <Comment.Text>
                        Terima kasih atas nasihatnya
                      </Comment.Text>
                      <Comment.Actions>
                        <a href="/">Reply</a>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>

                  <Form reply>
                    <Form.TextArea />
                    <Button
                      content="Add Reply"
                      labelPosition="left"
                      icon="edit"
                      primary
                    />
                  </Form>
                </Comment.Group>
              </Grid.Column>

              <Grid.Column floated="right" width={6}>
                <Feed>
                  <Feed.Event>
                    <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
                    <Feed.Content>
                      <Feed.Summary>
                        <Feed.User> Joo Prima</Feed.User> added you as friend
                        <Feed.Date>1 hour ago</Feed.Date>
                      </Feed.Summary>
                      <Feed.Meta>
                        <Feed.Like>
                          <Icon name="like" />5 Likes
                        </Feed.Like>
                      </Feed.Meta>
                    </Feed.Content>
                  </Feed.Event>

                  <Feed.Event>
                    <Feed.Label icon="pencil" />
                    <Feed.Content>
                      <Feed.Summary>
                        You submitted a new post to the page
                        <Feed.Date>3 days ago</Feed.Date>
                      </Feed.Summary>
                      <Feed.Extra>
                        Saya senang belajar bahasa pemrograman
                      </Feed.Extra>
                      <Feed.Meta>
                        <Feed.Like>11 Likes</Feed.Like>
                      </Feed.Meta>
                    </Feed.Content>
                  </Feed.Event>

                  <Feed.Event>
                    <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/helen.jpg" />
                    <Feed.Content>
                      <Feed.Date>5 days ago</Feed.Date>
                      <Feed.Summary>
                        <a href="/">Helen Triy</a> added{" "}
                        <a href="/">2 new illustrations</a>
                      </Feed.Summary>
                      <Feed.Extra images>
                        <a href="/">
                          <img
                            src="https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png"
                            alt="image1"
                          />
                        </a>
                        <a href="/">
                          <img
                            src="https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png"
                            alt="img2"
                          />
                        </a>
                      </Feed.Extra>
                      <Feed.Meta />
                    </Feed.Content>
                  </Feed.Event>
                </Feed>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default App;
