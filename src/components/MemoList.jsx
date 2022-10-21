import React from "react";

class MemoList extends React.Component {
  constructor() {
    super()
    this.state = {
      memos: [{ id: 1, text: 'memo 1'}, { id: 2, text: 'memo 2'}]
    }
  }

  render () {
    return (
      <ul>
        {this.state.memos.map(memo => (
          <li key={memo.id}>
            {memo.text}
          </li>
        ))}
      </ul>
    );
  }
}

export default MemoList;
