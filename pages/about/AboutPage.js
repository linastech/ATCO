import React from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import NextSeo from 'next-seo'
import Hero from 'heroComponent'
import HeroSection from 'components/about/Section'
import ScrollTop from 'components/scrollTopArrow/Arrow'
import CSS from './AboutPageStyle.scss'

class About extends React.Component {
	componentDidMount(){
		// setTimeout(() => {
      // this.props.pageTransitionReadyToEnter()
			// this.setState({ loaded: true })
			
			// if(window.location.hash) { 
			// 	Zenscroll.center(this['section-'+window.location.hash.substring(1)])
			// }
	
			// window.addEventListener('hashchange', this.handleOnUrlChange, false)	
    // }, 600)
	}
	componentWillUnmount() {
		// window.removeEventListener('hashchange', this.handleOnUrlChange, false)
	}
	handleOnUrlChange = () => {
		// const hash = window.location.hash.substring(1)
		// Zenscroll.center(this['section-'+hash])
	}
  render() {
    const {pageType} = this.props
    return (
      <main className={CSS.wrapper}>
        <NextSeo
          config={{
            title: 'About us',
            description: '',
          }}
        />

        <ScrollTop />

        <Hero 
          imageSrc="/static/images/about/hero.jpg"
          imageSrcMobile="/static/images/about/hero_mobile.jpg"
          height="520px"
        />

        <section>
          <h1 ref={ref => this['section-values'] = ref}>
            <span>Our</span> Values
          </h1>
          <img className={CSS.sectionIcon} src={'/static/images/about/values_'+pageType+'.png'} alt="Values logo" />
          <p>
            ATCO Pharma strongly believes in creating products that will vastly improve the lives of both humans and animals who might otherwise needlessly suffer. Scientific discoveries and technological changes offer both challenges and opportunities as we strive to protect the health and wellbeing of all.
            <br />
            Patients and health care providers trust our products because we continue to show our dedication to improving the overall quality of life of our customers, be they human or animal.<br />
            Our goal is to bring value and well-being to the MENA Region through high-quality and affordable products.<br />
          </p>
        </section>
        <HeroSection 
          images={[
            '/static/images/about/quality_control_500x600.jpg 500w',
            '/static/images/about/quality_control_1000x650.jpg 1000w',
            '/static/images/about/quality_control_1920x700.jpg 1920w'
          ]}
        />

        <section> 
          <h1 
            className={CSS.certTitle}
            ref={ref => this['section-certifications'] = ref}
          >
            Certifications & awards
          </h1>
          <img className={CSS.sectionIcon} src={'/static/images/about/certifications_'+pageType+'.png'} alt="Values logo" />
          <ul className={'g-listNoStyle '+CSS.certList}>
            <li>  
              <img src="/static/images/about/cert_cgmp.png" alt="cGMP Certificate" />
              <div className={CSS.certInfo}>
                <span>cGMP Certificate from</span><br />
                Egyptian Ministry of Health
              </div>
            </li>
            <li>
              <img src="/static/images/about/cert_quality.png" alt="cGMP Certificate" />
              <div className={CSS.certInfo}>
                Quality Management System<br />
                <span>ISO 9001/2008</span>
              </div>
            </li>
            <li>
              <img src="/static/images/about/cert_enviromental.png" alt="cGMP Certificate" />
              <div className={CSS.certInfo}>
                Environmental Management System<br />
                <span>ISO 14001/2004</span>
              </div>
            </li>
            <li>
              <img src="/static/images/about/cert_occupational.png" alt="cGMP Certificate" />
              <div className={CSS.certInfo}>
                Occupational Health Management System<br />
                <span>ISO 18001/2007</span>
              </div>
            </li>
          </ul>
        </section>
        <HeroSection
          images={[
            '/static/images/about/awards_500x600.jpg 500w',
            '/static/images/about/awards_1000x650.jpg 1000w',
            '/static/images/about/awards_1920x700.jpg 1920w'
          ]}
        />

        <section>
          <h1 ref={ref => this['section-facility'] = ref}>
            Facility
          </h1>
          
          <img className={CSS.sectionIcon} src={'/static/images/about/facility_'+pageType+'.png'} alt="Facility icon" />
          <p>
            Our factory was established in 2011, and we have a production area of 12,500 meters squared, with room for expansion. Our raw materials are imported from leading manufacturers and are then formulated in our facility by our highly trained pharmacists, engineers, scientists, and technicians. 
            <br />
            We are a well established pharmaceutical company in both human and veterinary health care products, ranking among the best in Egypt. We manufacture our products according to GMP, so our clients can rest assured that their patients are in good hands.
            ATCO follows ISO standards, and we were awarded the International Quality Crown Award in 2015 in recognition of our outstanding commitment to quality and excellence. We understand the value of health and well-being, and we strive to produce therapeutic solutions that reflect that value. 
          </p>
        </section>
        <HeroSection 
          images={[
            '/static/images/about/facility_500x600.jpg 500w',
            '/static/images/about/facility_1000x650.jpg 1000w',
            '/static/images/about/facility_1920x700.jpg 1920w'
          ]}
        />

        <section>
          <h1 ref={ref => this['section-mission'] = ref}>
            <span>Our</span> Mission
          </h1>
          <img className={CSS.sectionIcon} src={'/static/images/about/mission_'+pageType+'.png'} alt="Mission icon" />
          <p>
            To dedicate our efforts and resources to the continuous development of high quality products to aid in better human welfare; to commit to the recruitment and development of high caliber employees who share our beliefs and values; and to work with our network of partners to achieve our goals. 
          </p>
        </section>
        <HeroSection 
          images={[
            '/static/images/about/mission_500x600.jpg 500w',
            '/static/images/about/mission_1000x650.jpg 1000w',
            '/static/images/about/mission_1920x700.jpg 1920w'
          ]}
        />

        <section className={CSS.centered}>
          <h1 ref={ref => this['section-vision'] = ref}>
            <span>Our</span> Vision
          </h1>
          <img className={classNames('g-center', CSS.sectionIcon)} src={'/static/images/about/vision_'+pageType+'.png'} alt="Vision icon" />
          <p>
          To improve the quality of healthcare for both human beings and the pets they love through innovative and affordable solutions throughout the MENA Region. 
          </p>
        </section>
        <HeroSection 
          images={[
            '/static/images/about/vision_500x600.jpg 500w',
            '/static/images/about/vision_1000x650.jpg 1000w',
            '/static/images/about/vision_1920x700.jpg 1920w'
          ]}
        />

        <section className={CSS.centered}>
          <h1 ref={ref => this['section-objective'] = ref}>
            Objective
          </h1>
          <img className={classNames('g-center', CSS.sectionIcon)} src={'/static/images/about/objective_'+pageType+'.png'} alt="Objective icon" />
          <p>
            To be among the top pharmaceutical companies in the region, and to expand into further markets while maintaining our dedication to quality manufacturing. 
          </p>
        </section>
        <HeroSection 
          images={[
            '/static/images/about/objective_500x600.jpg 500w',
            '/static/images/about/objective_1000x650.jpg 1000w',
            '/static/images/about/objective_1920x700.jpg 1920w'
          ]}
        /> 

        <section className={classNames(CSS.centered, CSS.partners)}>
          <h1 ref={ref => this['section-partners'] = ref}>
            Our Partners
          </h1>

          <h2>Organic Chemical Solutions LLC</h2>
          <p>
            Organic Chemical Solutions LLC offers unique natural product technologies made with many all natural ingrediants for the improvement of growth and feed conversion, decreased mortality, and the amelioration of pain and suffering for you and your beloved pets. 
          </p>
          <p>
            Organic Chemical Solutions LLC provides cutting edge technologies for today’s highly competitive animal livestock production, elevating the standards for quality achievements in animal production efficiency at all levels.
          </p>
          <a href="http://ocsllc.net" target="_new">www.ocsllc.net</a>		
          
          <h2>Laboratories Calier</h2>
          <p>
            Laboratorios Calier, one of the companies that forms the Indukern Group, is dedicated to the research, development, and marketing of veterinary products, particularly for use in breeding and domestic animals. 
          </p>
          <p>
            Founded in 1969, a progressive and continuous growth has elevated the laboratory to a leading position in the ranking of Spain’s integrated 28 companies that participate and compete with multinational companies. 
          </p>
          <a href="http://calier.es" target="_new">www.calier.es</a>

          <h2>Dex Ibérica</h2>
          <p>
            Over twenty-five years of activity working with rigor towards innovation and improvement have situated Dex Ibérica in a leading position in the market. 
          </p>
          <p>
            Rapidly growing on the international scene, the company has consolidated its activity worldwide, assuring stability and continuity. 
          </p>
          <p>
            Dex Ibérica's central office is located in Industrial Polygon Estación industrial park in the municipal of Vila-Seca, Tarragona, Spain. Dex Ibérica's premixtures factory is equipped with innovative technology and has been built following the strictest standards of efficiency and safety. 
          </p>
          <a href="http://dexiberica.com" target="_new">www.dexiberica.com</a>

          <h2>Framelco</h2>
          <p>
            Framelco is known as a flexible, innovative company. Since its inception in 2002, Framelco has been one of the leading innovators of feed additives for animal feed. 
          </p>
          <p>
            Balance in the animal body is of great importance, and Framelco believes in a similar balance between carefully selected experienced personnel and young energetic employees. This philosophy combined with a client orientated business attitude enables Framelco to continuously offer revolutionary solutions. 
          </p>
          <p>
            Starting with the production and blending of Mono-, di- and tri-glycerides of fatty acids and essential oils, Framelco constantly seeks to meet their customers' needs. Framelco launched a broad range of tailor made options that embodies the idea of offering clients solutions, not just products.
          </p>
          <a href="http://framelco.com" target="_new">www.framelco.com</a>			

          <h2>AGRANA Group</h2>
          <p>
            Framelco is known as a flexible, innovative company. Since its inception in 2002, Framelco has been one of the leading innovators of feed additives for animal feed. 
          </p>
          <p>
            Balance in the animal body is of great importance, and Framelco believes in a similar balance between carefully selected experienced personnel and young energetic employees. This philosophy combined with a client orientated business attitude enables Framelco to continuously offer revolutionary solutions. 
          </p>
          <p>
            Starting with the production and blending of Mono-, di- and tri-glycerides of fatty acids and essential oils, Framelco constantly seeks to meet their customers' needs. Framelco launched a broad range of tailor made options that embodies the idea of offering clients solutions, not just products.
          </p>
          <a href="http://framelco.com" target="_new">www.framelco.com</a>	

          <h2>OX Group</h2>
          <p>
            OX Group has more than 15 years of experience and is headquartered in the Walqa Technology Park in Huesca (Spain). OX Group’s practices faithfully reflect the company's values by being entirely bio-sustainable. 
          </p>
          <p>
            The company was created to supply the market with a range of ecological and biodegradable biocidal products and services whose fields of application include overall health and prevention, whilst maintaining their commitment to caring for the environment.
          </p>
          <a href="http://grupoox.com" target="_new">www.grupoox.com</a>			

          <h2>Ecolex</h2>
          <p>
            Established in 2005, Ecolex is a dedicated producer that offers 100% vegetable-based, certified GMO-free products, originating from palm oil. They are allied with one of the largest palm oil players in the world, giving them a unique position in raw material sourcing and integrated manufacturing capabilities. The Ecolex manufacturing site is strategically located at West Port, Klang, Malaysia, one of the region's busiest ports and is well placed to service export markets globally.
          </p>
          <a href="http://ecolexanimalnutrition.com" target="_new">www.ecolexanimalnutrition.com</a>		
        </section>
			</main>
    )
  }
}

export default connect(
  state => ({
    pageType: state.project.pageType,
  })
)(About)