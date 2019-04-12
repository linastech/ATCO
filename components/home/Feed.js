import React from 'react'
import uuidv1 from  'uuid/v1'
import { Link } from 'router'
import CSS from './Feed.scss'

export default ({posts}) => (
  <>
    <div className={CSS.horLine} />
    <div className={CSS.wrapper}>
      <h1>Recent news & events</h1>

      <ul className={CSS.list}>
        {posts.map(item => (
          <li key={uuidv1()}>
            <div className={CSS.image} style={{backgroundImage: `url(${item.image})`}} />
            <div className={CSS.infoWrapper}>
              <h2>{item.title}</h2>
              <Link href={`media/post/${item.slug}`}><a>Read more -></a></Link>
            </div> 
          </li>
        ))}
      </ul>
    </div>
  </>
)