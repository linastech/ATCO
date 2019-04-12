import React from 'react'
import YouTube from 'react-youtube';
import Link from 'next/link'
import classNames from 'classnames'
import CSS from './PromoVideo.scss'

export default class extends React.Component {
  state = {
    playing: false,
    initPlayer: false,
    player: null,
  }
  
  componentDidMount(){
    this.setState({initPlayer: true})
  }
  play = () => {
    this.setState({playing: true})
    this.state.player.playVideo();
  }
  onReady = (event) => {
    this.setState({ player: event.target });
  }
  paused = () => {
    this.setState({playing: false})
  }
  render() {
    const {playing} = this.state
    const videoId = "Il3i1VHro-Y"
    const opts = {
      playerVars: { // https://developers.google.com/youtube/player_parameters 
        autoplay: 0,
        controls: 0,
        rel: 0, 
        showinfo: 0, 
        ecver: 2,
        modestbranding: 1
      },
    }
    return ( 
      <div className={CSS.wrapper}>
        <div className={classNames(CSS.textWrapper, {[CSS.active]: playing})}>
          <div className={CSS.titleTop}>Get to know us</div>
          <img src="/static/images/playButton.svg" className={CSS.play} onClick={this.play} />
          <div className={CSS.titleBot}>atco pharma</div>
        </div>

        {this.state.initPlayer &&
          <div className={classNames(CSS.videoWrapper, {[CSS.active]: playing})}>
            <YouTube
              containerClassName={CSS.videoWrapperInner}
              videoId={videoId}
              opts={opts}
              onReady={this.onReady}
              onPause={this.paused}
              onEnd={this.paused}
              onError={this.paused}  
            />
          </div>
        }
      </div>
    )
  }
}