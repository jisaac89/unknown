import React, { useEffect } from 'react'
import { Layer } from '../recoil2/components/Layer/Layer'
import ReactFullpage from '@fullpage/react-fullpage'
import { TextMast } from '../components/TextMask'
import TextLoop from 'react-text-loop'
import { GlobalStyle } from '../styles/globalStyle'
import { dimensions, mb, mt, p, textAlign } from '../recoil2/styles/classList'

export default () => {
  const onSlideLeave = (origin, destination: { index: number }, direction) => {
    console.log(destination.index)
  }

  return (
    <Layer flex={'column'} fill={1}>
      <ReactFullpage
        licenseKey={'57D2108D-112842B2-B568E697-8ACF77D5'}
        onLeave={onSlideLeave}
        render={({ state, fullpageApi }) => {
          const moveTo = () => {
            fullpageApi.moveTo(5)
          }

          return (
            <Layer fill={1}>
              {/* <div className="home-header">
                <button className="btn-primary">Contact Us</button>
              </div> */}
              <ReactFullpage.Wrapper>
                <div className="section green">
                  <Layer fill={1} flexCenter>
                    <Layer fill={1} flex={'row'}>
                      <Layer className="border-green" style={{ ...dimensions('50%', '100%', 1) }} flexCenter>
                        {/* <img width={300} src={'/img/logo.png'} /> */}

                        <h1 style={{ ...mt('10px') }}>
                          You have a <br />
                          <TextLoop>
                            <span className="color-green">Juicy</span>
                            <span className="color-green">Amazing</span>
                            <span className="color-green">World-changing</span>
                          </TextLoop>{' '}
                          idea.
                        </h1>

                        <h3 style={{ ...mt('10px') }}>Lets build it together</h3>

                        <button onClick={moveTo} className="btn-primary">
                          Contact Us
                        </button>
                      </Layer>
                      <Layer style={{ ...dimensions('50%', '100%', 1) }} flexCenter align={'center'}>
                        <img width={600} src={'/img/juicy.png'} />
                      </Layer>
                    </Layer>
                  </Layer>
                  <img
                    style={{ position: 'absolute', top: 0, left: 0, ...dimensions('100%', '100%', 0) }}
                    width={600}
                    src={'/img/back1.png'}
                  />
                </div>
                <div className="section red">
                  <Layer fill={1} flexCenter>
                    <Layer fill={1} flex={'row'}>
                      <Layer
                        className="border-red"
                        style={{ ...dimensions('50%', '100%', 1) }}
                        flexCenter
                        align={'center'}>
                        <img width={600} src={'/img/phone.png'} />
                      </Layer>
                      <Layer style={{ ...dimensions('50%', '100%', 1) }} flexCenter>
                        <h1>
                          You need help <br />
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
                  <img
                    style={{ position: 'absolute', top: 0, left: 0, ...dimensions('100%', '100%', 0) }}
                    width={600}
                    src={'/img/back2.png'}
                  />
                </div>
                <div className="section blue">
                  <Layer fill={1} flexCenter>
                    <Layer fill={1} flex={'row'}>
                      <Layer className="border-blue" style={{ ...dimensions('50%', '100%', 1) }} flexCenter>
                        <h1>
                          We build you <br /> a sweet{' '}
                          <TextLoop>
                            <span className="color-blue">product.</span>
                            <span className="color-blue">brand.</span>
                            <span className="color-blue">wireframe.</span>
                            <span className="color-blue">prototype.</span>
                            <span className="color-blue">logo.</span>
                            <span className="color-blue">design.</span>
                          </TextLoop>{' '}
                        </h1>
                      </Layer>
                      <Layer style={{ ...dimensions('50%', '100%', 1) }} flexCenter align={'center'}>
                        <img width={600} src={'/img/sweet.png'} />
                      </Layer>
                    </Layer>
                  </Layer>
                  <img
                    style={{ position: 'absolute', top: 0, left: 0, ...dimensions('100%', '100%', 0) }}
                    width={600}
                    src={'/img/back3.png'}
                  />
                </div>
                <div className="section blue border-tb">
                  <Layer fill={1} flexCenter>
                    <Layer fill={1} flex={'row'}>
                      <Layer className="border-all" style={{ ...dimensions('50%', '100%', 1) }} flexCenter>
                        <h1 className="color-green">UX & Design</h1>
                      </Layer>
                      <Layer
                        className="border-all home-shadow-both"
                        style={{ ...dimensions('50%', '100%', 1) }}
                        flexCenter>
                        <h1 className="color-red">Development</h1>
                      </Layer>
                      <Layer className="border-all" style={{ ...dimensions('50%', '100%', 1) }} flexCenter>
                        <h1 className="color-blue">Marketing</h1>
                      </Layer>
                    </Layer>
                  </Layer>
                </div>
                <div className="section blue">
                  <Layer fill={1} flexCenter>
                    <Layer fill={1} flex={'row'}>
                      <Layer className="border-all" style={{ ...dimensions('100%', '100%', 1) }} flexCenter>
                        <h1>CONTACT US</h1>
                      </Layer>
                    </Layer>
                  </Layer>
                </div>
              </ReactFullpage.Wrapper>
              <div className={`home-box home-box-${state.origin ? state.origin.index : 0}`} />
            </Layer>
          )
        }}
      />
      {/* <div className="home-logo-bottom">
        <img width={200} src={'/img/logo.png'} />
      </div> */}
      <GlobalStyle />
    </Layer>
  )
}
