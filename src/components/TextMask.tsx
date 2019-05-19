import React from 'react'

export const TextMast = () => {
  return (
    <div className="wrapper">
      <video data-keepplaying loop autoPlay>
        >
        <source src="http://mazwai.com/system/posts/videos/000/000/148/preview_mp4/kenji_kawasawa-106_balloons.mp4?1419192915" />
      </video>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285 80" preserveAspectRatio="xMidYMid slice">
        <defs>
          <mask id="mask" x="0" y="0" width="100%" height="100%">
            <rect x="0" y="0" width="100%" height="100%" />
            <text x="5mm" y="2.1cm">
              One,
              <tspan y="1.6cm">Two,</tspan>
              <tspan y="1.1cm">Three!</tspan>
            </text>
          </mask>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" />
      </svg>
    </div>
  )
}
