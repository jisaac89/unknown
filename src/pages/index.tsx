import React from 'react'
import { Layer } from '../recoil2/components/Layer/Layer'
import ReactFullpage from '@fullpage/react-fullpage'
import { TextMast } from '../components/TextMask'
import { GlobalStyle } from '../styles/globalStyle'

export default () => {
  const onSlideLeave = (origin, destination: { index: number }, direction) => {
    console.log(destination.index)
  }

  return (
    <Layer fill={1}>
      <ReactFullpage
        licenseKey={'57D2108D-112842B2-B568E697-8ACF77D5'}
        onLeave={onSlideLeave}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Layer fill={1} flexCenter>
                  <Layer flex={'column'}>
                    <Layer fill={1} flexCenter>
                      <img width={300} src={'/img/juicy.jpg'} />
                    </Layer>
                    <Layer>
                      <TextMast />
                    </Layer>
                  </Layer>
                </Layer>
              </div>

              <div className="section">
                <Layer flexCenter>
                  <img width={600} src={'/img/phone.jpg'} />
                </Layer>
              </div>

              <div className="section">
                <Layer flexCenter>
                  <img width={600} src={'/img/sweet.jpg'} />
                </Layer>
              </div>
            </ReactFullpage.Wrapper>
          )
        }}
      />
      <GlobalStyle />
    </Layer>
  )
}
