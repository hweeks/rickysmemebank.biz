import React from 'react'
import {MemeTainer, MemeImg, MemeTitle} from './styles'

const Meme = ({url, title, author}) => {
  return (
    <MemeTainer>
      <MemeImg alt={`${author}'s lame meme`} src={url}/>
      <MemeTitle>
        {title}
      </MemeTitle>
    </MemeTainer>
  )
}

export default Meme
