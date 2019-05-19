import React from 'react'
import { Layer } from '../recoil2/components/Layer/Layer'
import ReactFullpage from '@fullpage/react-fullpage'
import { TextMast } from '../components/TextMask'
import TextLoop from 'react-text-loop'
import { GlobalStyle } from '../styles/globalStyle'
import { dimensions } from '../recoil2/styles/classList'

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
              <div className="section green">
                <Layer fill={1} flexCenter>
                  <Layer fill={1} flex={'row'}>
                    <Layer className="border-green" style={{ ...dimensions('50%', '100%', 1) }} flexCenter>
                      <h1>
                        You have a{' '}
                        <TextLoop>
                          <span className="color-green">Juicy</span>
                          <span className="color-green">Sweet</span>
                          <span className="color-green">Amazing</span>
                        </TextLoop>{' '}
                        idea.
                      </h1>
                    </Layer>
                    <Layer style={{ ...dimensions('50%', '100%', 1) }} flexCenter align={'center'}>
                      <img width={600} src={'/img/juicy.jpg'} />
                    </Layer>
                  </Layer>

                  <div className="box-green" />
                </Layer>
              </div>

              <div className="section red">
                <Layer fill={1} flexCenter>
                  <Layer fill={1} flex={'row'}>
                    <Layer
                      className="border-red"
                      style={{ ...dimensions('50%', '100%', 1) }}
                      flexCenter
                      align={'center'}>
                      <img width={600} src={'/img/phone.jpg'} />
                    </Layer>
                    <Layer style={{ ...dimensions('50%', '100%', 1) }} flexCenter>
                      <h1>
                        You need help{' '}
                        <TextLoop>
                          <span className="color-red">creating</span>
                          <span className="color-red">designing</span>
                          <span className="color-red">visualizing</span>
                        </TextLoop>{' '}
                        it.
                      </h1>
                    </Layer>
                  </Layer>
                </Layer>
              </div>

              <div className="section blue">
                <Layer fill={1} flexCenter>
                  <Layer fill={1} flex={'row'}>
                    <Layer className="border-blue" style={{ ...dimensions('50%', '100%', 1) }} flexCenter>
                      <h1>
                        We build you an amazing{' '}
                        <TextLoop>
                          <span className="color-blue">product.</span>
                          <span className="color-blue">wireframe.</span>
                          <span className="color-blue">prototype.</span>
                        </TextLoop>{' '}
                      </h1>
                    </Layer>
                    <Layer style={{ ...dimensions('50%', '100%', 1) }} flexCenter align={'center'}>
                      <img width={600} src={'/img/sweet.jpg'} />
                    </Layer>
                  </Layer>
                  <div className="box-blue" />
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
