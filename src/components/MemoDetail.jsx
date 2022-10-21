function MemoDetail(props) {
  return (
    <form onSubmit={props.onSubmit} className="memo-app-form">
      <textarea name="text" onChange={props.onChange}></textarea>
      <button>Save</button>
    </form>
  )
}

export default MemoDetail;
