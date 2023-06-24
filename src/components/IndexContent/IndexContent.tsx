import { getPostLinks } from '@/scripts/helperPost'
import React from 'react'

type Props = {
  slug: string
}

export default function IndexContent({slug}: Props) {
const navigationLinks = getPostLinks(slug)  

  return (
  <nav>

    </nav>
  )
}
