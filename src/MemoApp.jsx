import React from "react";
import MemoList from "./components/MemoList";
import MemoDetail from "./components/MemoDetail";

class MemoApp extends React.Component {
  constructor () {
    super()
    this.state = {
      memos: [],
      editing: false,
      text: "",
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render () {
    return (
      <div className="memo-app">
        <header className="memo-app-header">
          <p>Super Simple Memo App</p>
        </header>
        <div className="memo-app-container">
          <aside className="memo-app-sidebar">
            <MemoList memos={this.state.memos}/>
            <button onClick={this.handleClick}>+</button>
          </aside>
          <div className="memo-app-content">
            {this.state.editing && <MemoDetail onChange={this.handleChange} onSubmit={this.handleSubmit} />}
          </div>
        </div>
      </div>
    );
  }

  handleClick (e) {
    e.preventDefault()
    this.setState({ editing: true })
  }

  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.state.text.length === 0) {
      return
    }

    const newMemo = {
      id: Date.now(),
      title: this.state.text.split("\n")[0],
      text: this.state.text,
    }
    const newMemos = [...this.state.memos, newMemo]
    
    this.setState({ memos: newMemos, editing: false, text: "" })
  }
}

export default MemoApp;
