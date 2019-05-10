import React from 'react'
import { Layer } from '../recoil2/components/Layer/Layer'
import ReactFullpage from '@fullpage/react-fullpage'

export default () => {
  const onSlideLeave = (origin, destination: { index: number }, direction) => {
    console.log(destination.index)
  }

  return (
    <ReactFullpage
      licenseKey={'57D2108D-112842B2-B568E697-8ACF77D5'}
      onLeave={onSlideLeave}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <p>Section 1 (welcome to fullpage.js)</p>
              <button onClick={() => fullpageApi.moveSectionDown()}>Click me to move down</button>
            </div>
            <div className="section">
              <p>Section 2</p>
            </div>
          </ReactFullpage.Wrapper>
        )
      }}
    />
  )
}
