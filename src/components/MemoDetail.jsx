function MemoDetail(props) {
  return (
    <form onSubmit={props.onSubmit} className="memo-app-form">
      <textarea name="text" onChange={props.onChange} value={props.text}></textarea>
      <input type="submit" value="Save" />
    </form>
  )
}

export default MemoDetail;
