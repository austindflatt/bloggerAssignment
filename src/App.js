import React, { Component } from 'react'
import './App.css'
import { Container, NativeSelect, Pagination, TextInput, Title } from '@mantine/core';
import Blog from './components/Blog';

export class App extends Component {
  state = {
    author: '',
    createdAt: '',
    title: '',
    text: '',
    id: '',
    blogArray: [],
    search: '',
    // page: 1,
  }

  componentDidMount = async () => {
    const response = await fetch(`https://6239ddb128bcd99f02763cfe.mockapi.io/blogs`);
    const data = await response.json();
    console.log(data)
    this.setState({
      blogArray: data
    })
  }

  render() {
    return (
      <>
      <Container style={{ backgroundColor: '#FFF' }}>
      <Title order={1}>Blogger Assignment</Title>
      <TextInput
      placeholder="Search for a blog post"
      label="Search"
      onChange={(e) => this.setState({
        search: e.target.value
      })}
      style={{ marginBottom: '10px' }}
      />
      <NativeSelect
      data={
        this.state.blogArray
        .map(({author}) => {
          return (
            author
          )
        })
      }
      onChange={(e) => {this.setState({
        author: e.target.value
      })}}
      value={this.state.author}
      placeholder="Select one"
      label="Select an author"
      description="Filter posts by author"
      variant="filled"
      style={{ marginBottom: '10px' }}
      />
      {this.state.blogArray
      .filter((blog) => {
        console.log(this.state.author, blog.author, blog.author.includes(this.state.author))
        if(this.state.author === '' && this.state.search === ''){
          return true
        }
        if(this.state.author !== '' && this.state.search !== '' && blog.author.includes(this.state.author) && blog.title.toLowerCase().includes(this.state.search.toLowerCase())){
          return true
        }
        if(this.state.author !== '' && blog.author.includes(this.state.author)){
          return true
        }
        if(this.state.search !== '' && blog.title.toLowerCase().includes(this.state.search.toLowerCase())){
          return true
        }
      })
      // .slice((this.state.page - 1) * 10, (this.state.page - 1) * 10 + 10)
      .map(({author, title, text, id, createdAt}) => {
        console.log(author)
        return (
          <>
          <Blog
          id={id}
          titleProp={title}
          authorProp={author}
          textProp={text}
          createdProp={createdAt}
          />
          <br />
          </>
        )
      })
      }
      {/* <Pagination
      page={this.state.page}
      onChange={(_, value) => {
        this.setState({
          page: value,
        })
        window.scroll(0, 450);
      }}
      total={(this.state.blogArray.length / 10).toFixed(0)}
      style={{ marginTop: '20px' }}
      /> */}
      <br />
      </Container>
      </>
    )
  }
}

export default App