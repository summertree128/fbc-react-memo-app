import React from "react";
import MemoList from "./components/MemoList";

class MemoApp extends React.Component {
  constructor () {
    super()
    this.state = {
      memos: [{ id: 1, text: 'memo 1'}, { id: 2, text: 'memo 2'}],
      editing: false,
    }
    this.handleClick = this.handleClick.bind(this)
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
            This is content
          </div>
        </div>
      </div>
    );
  }

  handleClick (e) {
    e.preventDefault()
    this.setState({ editing: true })
  }
}

export default MemoApp;
