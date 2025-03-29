import React from 'react'
import "./Testimonalts.css"
import { TestimonaltBox } from '../../Components'


export default function Testimonalts() {
  return (
    <div className="c testimonalts_c d-flex flex-column align-items-center">
      <p className="testimonaltsTitle">WHAT DO THEY SAY?</p>
      <div className="testimonaltsBoxes d-flex align-items-center">
        <TestimonaltBox />
        <TestimonaltBox />
        <TestimonaltBox />
      </div>
    </div>
  )
}
