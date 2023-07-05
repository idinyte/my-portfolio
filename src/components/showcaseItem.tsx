import React from "react";
import CSS from '../styles/showcaseItem.module.css';

interface showcaseItem{
  img: any,
  title: string,
  description: string,
  view?: string,
  code?: string
}

export const ShowcaseItem = (props: showcaseItem) => {
  return (
    <article className={CSS.gridItem}>
      <div className={CSS.overlayContainer}>
        <img src={props.img} alt="project screenshot" className={CSS.gridImg} />
        <div className={CSS.overlay}>
          <p className={CSS.overlayText}>{props.title}</p>
        </div>
      </div>
      <div className={CSS.gridItemBody}>
        <p>{props.description}</p>
        <div className={CSS.buttons}>
          { props.view ? <a href={props.view} className="button" target="_blank" rel="noreferrer">View</a>
            : null}
          { props.code ? <a href={props.code} className="button" target="_blank" rel="noreferrer">Code</a> : null}
        </div>
      </div>
    </article>
  )
}