import CSS from './Head.scss'
import { connect } from 'react-redux'

export default connect(state => state.project)(
  ({ pageType, currentUrl }) => {
    return (
      <div className={CSS.switch}>
        <a href={currentUrl.replace(/vet|human/gi, pageType == 'atcohuman' ? 'vet' : 'human')}>
          Switch<br />
          to {pageType == 'atcovet' ? 'human' : 'vet'}
        </a>
      </div>
    )
  }
)

