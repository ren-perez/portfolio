'use client'

import { useEffect, useRef } from 'react'

interface TableauEmbedProps {
  embedCode: string
}

export function TableauEmbed({ embedCode }: TableauEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Set the HTML content
    containerRef.current.innerHTML = embedCode

    // Find and execute scripts - convert HTMLCollection to Array
    const scripts = Array.from(containerRef.current.getElementsByTagName('script'))

    // Use setTimeout to ensure DOM is ready
    setTimeout(() => {
      scripts.forEach((oldScript) => {
        const newScript = document.createElement('script')
        newScript.type = 'text/javascript'

        // Copy all attributes
        Array.from(oldScript.attributes).forEach((attr) => {
          newScript.setAttribute(attr.name, attr.value)
        })

        // Copy script content or src
        if (oldScript.src) {
          newScript.src = oldScript.src
        } else {
          newScript.textContent = oldScript.textContent
        }

        // Replace old script with new one to execute it
        if (oldScript.parentNode) {
          oldScript.parentNode.replaceChild(newScript, oldScript)
        }
      })
    }, 100)

    // Cleanup function
    return () => {
      // Remove any Tableau viz if it exists
      if (containerRef.current) {
        const vizElement = containerRef.current.querySelector('.tableauViz')
        if (vizElement) {
          vizElement.remove()
        }
      }
    }
  }, [embedCode])

  return <div ref={containerRef} suppressHydrationWarning />
}
