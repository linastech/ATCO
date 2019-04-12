import React from 'react'
import Plx from 'react-plx'
import CSS from './AboutHeroSection.scss'

export default class AboutHeroSection extends React.Component {
  state = {
    offset: 0,
    height: 'auto' 
  }
  handleImage = () =>{
    this.setState({ 
      offset: (25 * this.image.clientHeight) / 100,
      height: (75 * this.image.clientHeight) / 100,
    })
  }
  componentDidMount(){ 
    window.addEventListener("resize", this.handleImage)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleImage)
  } 
  render(){
    return (
      <div    
        style={{height: `${this.state.height}px`}}
        className={CSS.wrapper} 
      >  
        <Plx 
          parallaxData={[{
              start: 'self',
              duration: '100vh',
              properties: [
                {
                  startValue: 0,
                  endValue: -this.state.offset,
                  property: 'translateY',
                },
                {
                  startValue: 1,
                  endValue: 1.1,
                  property: 'scale',
                }
              ],
            }]}
        >
          <picture>
            <source media="(max-width: 500px)" srcSet={this.props.images[0]} />
            <source media="(max-width: 1000px)" srcSet={this.props.images[1]} />
            <source srcSet={this.props.images[2]} />
            <img
              ref={ref => this.image = ref}
              onLoad={this.handleImage} 
              src={this.props.images[0]}
            />
          </picture>
        </Plx>
      </div>
    )
  }
}