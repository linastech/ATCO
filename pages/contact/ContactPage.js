import React from 'react'
import { connect } from 'react-redux'
import NextSeo from 'next-seo'
import classNames from 'classnames'
import GoogleMapReact from 'google-map-react'
import Hero from 'heroComponent'
import Form from 'components/contact/Form'
import CSS from './ContactPageStyle.scss'

const Marker = ({ text }) => (
  <div className={CSS.marker}> </div>
);

class Contact extends React.Component {
  render() {
    const { pageType } = this.props

    return (
      <main>
        <NextSeo
          config={{
            title: 'Contact',
            description: '',
          }}
        />

      <Hero 
        imageSrc={`/static/images/${pageType}_contact_intro.jpg`}
        height="530px"
      >
        <div className={CSS.introText}>
          Whether you’re a customer, job seeker,<br />
          health professional or an investor,<br />
          you can always<br />
          get in touch<br />
          with us<br />
        </div>
      </Hero>

      <div className={CSS[pageType]+' '+CSS.wrapper}>
          <div className={CSS.col}>
            <h1 className="g-textCenter" >Get in Touch With Us</h1>
            <Form />
          </div>
          
          <div className={classNames(CSS.col, CSS.colRight)}>
            <div className={CSS.map}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDYzqGb0RNJ7oxCNNd4cHr_L382izdFolo' }}
                defaultCenter={{lat: 30.541819, lng: 31.180861}}
                defaultZoom={17}
                options={this.getMapOptions}
              >
                <Marker
                  lat={30.541300} 
                  lng={31.180414} 
                  text={'Kreyser Avrora'} 
                />
              </GoogleMapReact>
            </div>
            <h1>Visit Us</h1>
            
            <div className={CSS.subTitle}>Scientific Office</div>
            <div>
              <span className={CSS.bold}>Address:</span>
              <span className={CSS.info}>
                35 El-Obour Buildings<br />
                – Salah Salem road – Cairo
              </span>
            </div>
            <div>
              <span className={CSS.bold}>Phone:</span>
              <span className={CSS.info}>+2 (02) 2082 2014</span>
            </div>
            <div>
              <span className={CSS.bold}>Fax:</span>
              <span className={CSS.info}>+2 (02) 2082 2077</span>
            </div>
            <div>
              <span className={CSS.bold}>Email:</span>
              <span className={CSS.info}>info@atcopharma.com</span>
            </div>

            <div className={CSS.subTitle}>Factory</div>
            <div>
              <span className={CSS.bold}>Address:</span>
              <span className={CSS.info}>
                Industrial Quisna Zone<br />
                – Part No. 1 - Phase No. 3 - Quisna – El-Menofia
              </span>
            </div>
            <div>
              <span className={CSS.bold}>Phone:</span>
              <span className={CSS.info}>+2 (048) 2590 480</span>
            </div>
            <div>
              <span className={CSS.bold}>Phone:</span>
              <span className={CSS.info}>+2 (048) 2590 488</span>
            </div>
            <div>
              <span className={CSS.bold}>Fax:</span>
              <span className={CSS.info}>+2 (048) 2590 481</span>
            </div>
            <div>
              <span className={CSS.bold}>Email:</span>
              <span className={CSS.info}>info@atcopharma.com</span>
            </div>

            <div className={CSS.subTitle}>Business Hours</div>
            <div>
              <span className={CSS.bold}>Saturday - Thursday:</span>
              <span className={CSS.info}>9am to 5pm</span>
            </div>
            <div>
              <span className={CSS.bold}>Friday:</span>
              <span className={CSS.info}>Closed</span>
            </div>

          </div>
        </div>
			</main>
    )
  }
}

export default connect(
  state => ({
    pageType: state.project.pageType,
  })
)(Contact)