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
      id: "",
    }
    this.itemKey = 'memos'
    this.handleAdd = this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount () {
    const memos = this.getMemos()
    this.setState({ memos })
  }

  render () {
    return (
      <div className="memo-app">
        <header className="memo-app-header">
          <p>Super Simple Memo App</p>
        </header>
        <div className="memo-app-container">
          <aside className="memo-app-sidebar">
            <MemoList memos={this.state.memos} onEdit={this.handleEdit} />
            <button onClick={this.handleAdd} className="memo-app-add-button">+</button>
          </aside>
          <div className="memo-app-content">
            {this.state.editing && <MemoDetail 
              text={this.state.text}
              id={this.state.id}
              onChange={this.handleChange}
              onSave={this.handleSave}
              onDelete={this.handleDelete}
            />}
          </div>
        </div>
      </div>
    );
  }

  handleAdd (e) {
    e.preventDefault()
    this.setState({ editing: true, id: "", text: "" })
  }

  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  handleSave (e) {
    e.preventDefault()
    if (this.state.text.length === 0) {
      return
    }

    if (this.state.id) {
      this.updateMemo(this.state.id, this.state.text)
    } else {
      this.createMemo(this.state.text)
    }
  }

  handleEdit(e) {
    e.preventDefault()
    const id = e.target.dataset.id
    const memoToEdit = this.state.memos.find(memo => memo.id === parseInt(id))
    this.setState({ editing: true, id: id, text: memoToEdit.content })
  }

  handleDelete(e) {
    e.preventDefault()
    if (this.state.id) {
      this.deleteMemo(this.state.id)
    }
  }

  updateMemo(id, text) {
    const newMemos = [...this.state.memos]
    const updatedMemo = newMemos.find(memo => memo.id === parseInt(id))
    updatedMemo.title = text.split("\n")[0]
    updatedMemo.content = text

    this.setState({ memos: newMemos, editing: false, id: "", text: ""})
    this.saveMemos(newMemos)
  }

  createMemo(text) {
    const newMemo = {
      id: Date.now(),
      title: text.split("\n")[0],
      content: text,
    }
    const newMemos = [...this.state.memos, newMemo]

    this.setState({ memos: newMemos, editing: false, id: "", text: ""})
    this.saveMemos(newMemos)
  }

  deleteMemo(id) {
    const newMemos = this.state.memos.filter(memo => memo.id !== parseInt(id))
    this.setState({ memos: newMemos, editing: false, id: "", text: "" })
    this.saveMemos(newMemos)
  }

  getMemos() {
    const memos = localStorage.getItem(this.itemKey)
    return memos === null ? [] : JSON.parse(memos)
  }

  saveMemos(memos) {
    localStorage.setItem(this.itemKey, JSON.stringify(memos))
  }
}

export default MemoApp;
