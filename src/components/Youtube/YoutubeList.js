import React from 'react'
import YoutubeItem from './YoutubeItem'
import { videoData } from '../../videoData'

const YoutubeList = (props) => {
  return (
    <div className="youtube-list">
      {props.children}
      {videoData.map((item) => {
        return (
          <YoutubeItem
            key={item.id}
            thumbnail={item.thumbnail}
            avatar={item.avatar || item.thumbnail}
            title={item.title}
            channel={item.channel}
            view={item.view}
            time={item.time}
            className={item.id === 2 ? 'abc' : ''}
          ></YoutubeItem>
        )
      })}
    </div>
  )
}

export default YoutubeList
