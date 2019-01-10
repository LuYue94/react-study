import React, { Component } from "react"
import CommentInput from './CommentInput'
import CommentList from './CommentList'

import './comment.scss'

class CommentApp extends Component {
  constructor() {
    super()
    this.state = {
      comments: [
        { username: 'Jerry', content: 'Hello', time: '2018-12-18 13:53:01' },
        { username: 'Tomy', content: 'World', time: '2018-12-18 16:03:18' },
        { username: 'Lucy', content: 'Good', time: '2018-12-18 18:13:29' }
      ]
    }
  }

  handleSubmitComment(comment) {
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    this.state.comments.push(comment)
    this.setState({
      comments: this.state.comments
    })
  }

  render() {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList comments={this.state.comments} />
      </div>
    )
  }
}

export default CommentApp
