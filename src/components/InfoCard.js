import * as React from "react"

const InfoCard = ({title, link, image, description}) =>
  link ? 
  <a href={link} className='InfoCard' target='_blank' rel='noreferrer noopener' >
    <div>
        <strong>{title}</strong>
        {image ? <img src={image} alt={description}/> : null}
        <p>{description}</p>
    </div>
  </a> :
  <span className='InfoCard'>
    <div>
      {title ? <strong>{title}</strong> : null}
      {image ? <img src={Map} alt={description}/> : null}
      {description ? <p>{description}</p> : null}
    </div>
  </span>
export default InfoCard
