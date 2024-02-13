"use client"

import { motion, useScroll } from 'framer-motion';
import Link from 'next/link';
import RollingButton from '../RollingButton';

export default function LinkToContact({ text }) {

  return (
    <div className="aboutme-link" >
      <Link href="/contact">
        <RollingButton className="send-button" text="CONTACT" />
      </Link>
    </div>
  )
}