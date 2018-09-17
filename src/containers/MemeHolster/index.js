import React, { PureComponent } from 'react';
import Meme from '../../components/Meme'
import baseStyles, {MemeContainer, MemesLoading} from './styles'

const randomIsh = (a,b) => {
  if (a.url < b.url) {
    return -1
  } else if (a.url > b.url) {
    return 1
  } else {
    return 0
  }
}

class MemeHolster extends PureComponent {
  componentDidMount() {
    const {memes} = this.state || {}
    baseStyles()
    if (!memes) {
      setTimeout(() => {
        this.getMemes()
      }, Math.floor(Math.random() * 6000) + 1000  )
    }
  }

  parseRedditJson({data}) {
    const {children} = data || {}
    return children.filter(({data}) => {
      return data.url && data.post_hint === "image"
    }).map(({data}) => {
      const {url, title, author} = data
      return {
        url, title, author
      }
    })
  }

  fetchMemes(subreddit, options) {
    return new Promise((resolve, reject) => {
      fetch(`https://www.reddit.com/r/${subreddit}.json`)
        .then(res => res.json())
        .then(data => {
          resolve(this.parseRedditJson(data))
        }).catch(err => {
          reject(err)
        })
    })
  }

  getMemes() {
    Promise.all([
      this.fetchMemes('dankmemes'),
      this.fetchMemes('oldpeoplefacebook'),
      this.fetchMemes('surrealmemes')
    ]).then(newMemes => {
      const flatMemes = newMemes.reduce((acc, val) => acc.concat(val), [])
      this.setState({memes: flatMemes.sort(randomIsh)})
    }).catch(err => {
      this.setState({error: err})
    })
  }

  render() {
    const {error, memes} = this.state || {}
    if (error) {
      return(<div>my code sucks more than memes, try again later loser
        <pre>{error}</pre>
        </div>)
    }
    if (!memes) {
      return(<div><MemesLoading>🖕</MemesLoading></div>)
    }
    return (
      <MemeContainer>
        {memes.map(({url, title, author}) => <Meme key={url} url={url} title={title} author={author} /> )}
      </MemeContainer>
    )
  }
}

export default MemeHolster
