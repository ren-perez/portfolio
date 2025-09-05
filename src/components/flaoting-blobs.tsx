"use client"

export function FloatingBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="floating-blob"></div>
      <div className="floating-blob"></div>
      <div className="floating-blob"></div>
    </div>
  )
}
