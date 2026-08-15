import { useScrollReveal } from "../../hooks/useScrollReveal.js";
import "./SectionHeading.css";

function SectionHeading({sheet,title,description,align="left" ,tone="ink"}){
  const [ref,inView]=useScrollReveal()

  return (
    <div className={`section-heading section-heading--${align} section-heading--${tone} reveal ${inview ? 'is-visible':''}`}>
      <span className="section-heading-sheet">{sheet}</span>
      <h2 className="section-heading-sheet">{title}</h2>
      {description ? <p className="section-heading-desc">{description}</p>:null}
    </div>
  )

}