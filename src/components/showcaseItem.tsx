import React from "react";

interface showcaseItem{
  img: any,
  title: string,
  description: string,
  view?: string,
  code?: string
}

export const ShowcaseItem = (props: showcaseItem) => {
  return (
    <article className="grid-item">
      <div className="overlay-container">
        <img src={props.img} alt="project screenshot" className='grid-img' />
        <div className="overlay">
          <p className="overlay-text">{props.title}</p>
        </div>
      </div>
      <div className="grid-item-body">
        <p>{props.description}</p>
        <div className="grid-buttons">
          { props.view ? <a href={props.view} className="button" target="_blank" rel="noreferrer">View</a>
            : null}
          { props.code ? <a href={props.code} className="button" target="_blank" rel="noreferrer">Code</a> : null}
        </div>
      </div>
    </article>
  )
}