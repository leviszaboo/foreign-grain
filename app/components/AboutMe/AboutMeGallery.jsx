"use client"

import React from 'react'
import { animated, useInView } from '@react-spring/web'

export default function AboutMeGallery({ sources }) {

  return (
    <div className="aboutme-gallery-wrapper">
      {sources.map((source) => {
        const width = 82;

        const [ref, springs] = useInView(
          () => ({
            from: {
              opacity: 0,
            },
            to: {
              opacity: 1,
            },
          }),
          {
            rootMargin: "-18% 0%"
          }
        )

        return (
          <animated.div key={source} ref={ref} style={springs} className="aboutme-picture-wrapper">
            <img src={source} style={{width: `${width}%` }}/>
          </animated.div>
        )
      })}
    </div>
  )
}
