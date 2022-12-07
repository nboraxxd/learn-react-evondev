function YoutubeItem(props) {
  return (
    <div className={`item ${props.className}`} style={{ marginBottom: '10px' }}>
      <div className="item-thumbnail">
        <img src={props.thumbnail} alt="" />
      </div>
      <div className="item-footer">
        <img className="item-avatar" src={props.avatar} alt="" />
        <div className="item-info">
          <h4 className="item-title">{props.title}</h4>
          <p className="item-channel">{props.channel}</p>
          <p>
            <span className="item-view">{props.view} lượt xem</span> •{' '}
            <span className="item-time">{props.time} trước</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default YoutubeItem
