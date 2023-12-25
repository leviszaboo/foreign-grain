"use client"

import React from 'react'
import { animated, useInView } from '@react-spring/web'
import FadeIn from '../FadeIn';

export default function AboutMeGallery({ sources }) {

  return (
    <div className="aboutme-gallery-wrapper">
      {sources.map((source) => {
        const width = 82;

        return (
          <FadeIn key={source} className="aboutme-picture-wrapper">
            <img src={source} style={{width: `${width}%` }}/>
          </FadeIn>
        )
      })}
    </div>
  )
}
