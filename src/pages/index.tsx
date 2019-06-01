import React, { useEffect, useState } from 'react'
import { Layer } from '../recoil2/components/Layer/Layer'
import ReactFullpage from '@fullpage/react-fullpage'
import { TextMast } from '../components/TextMask'
import TextLoop from 'react-text-loop'
import { GlobalStyle } from '../styles/globalStyle'
import { dimensions, mb, mt, w } from '../recoil2/styles/classList'
import { useMedia } from 'use-media'
import { Helmet } from 'react-helmet'

export default () => {
  const isMobile = useMedia({ maxWidth: 800 })
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ReactFullpage
        licenseKey={'57D2108D-112842B2-B568E697-8ACF77D5'}
        render={({ state, fullpageApi }) => {
          const moveTo = () => {
            fullpageApi.moveTo(5)
          }
          return (
            <ReactFullpage.Wrapper>
              <div className="section green">
                <div className="box-green" />
                <video muted data-autoplay className="home-video video-container video-container-overlay" autoPlay loop>
                  <source src={'/thinking.mp4'} type="video/mp4" />
                </video>
                {isMobile ? (
                  <Layer fill={1}>
                    <h1 style={{ ...mt('10px') }}>
                      You have a <br />
                      Juicy <br />
                      <TextLoop>
                        <span className="color-green">Idea</span>
                        <span className="color-green">Concept</span>
                        <span className="color-green">Promotion</span>
                      </TextLoop>
                    </h1>
                    <img className="" width={'300px'} src={'/img/juicy.png'} />
                  </Layer>
                ) : (
                  <Layer fill={1} flex={'row'}>
                    <Layer className="border-green" style={{ ...dimensions('50%', '100%', 1) }} flexCenter>
                      <div style={{ ...w('100%') }}>
                        <h1 style={{ ...mt('10px') }}>
                          You have a <br />
                          Juicy{' '}
                          <TextLoop>
                            <span className="color-green">Idea</span>
                            <span className="color-green">Concept</span>
                            <span className="color-green">Promotion</span>
                          </TextLoop>
                        </h1>

                        <p>
                          From logo and UX design to web development. We have you covered. <br />
                          Codeboot is media agency, but the slaves love what they do, <br />
                          and they get paid too... so like— maybe not like a slave trade.
                        </p>

                        <button className="btn-primary">Contact Us</button>
                      </div>
                    </Layer>
                    <Layer style={{ ...dimensions('50%', '100%', 1) }} flexCenter align={'center'}>
                      <img className="" width={'600px'} src={'/img/juicy.png'} />
                    </Layer>
                  </Layer>
                )}
              </div>
              <div className="section red">
                <Layer fill={1} flexCenter>
                  <div style={{ ...dimensions('1400px', '100%', 1) }}>
                    <Layer fill={1} flex={'row'}>
                      <Layer
                        className="border-red"
                        style={{ ...dimensions('50%', '100%', 1) }}
                        flexCenter
                        align={'center'}>
                        <img className="" width={600} src={'/img/phone.png'} />
                        <img className="proj1" src={'/img/project1.png'} />
                        <img className="proj2" src={'/img/project2.png'} />
                        <img className="proj3" src={'/img/project3.png'} />
                        <img className="proj4" src={'/img/project4.png'} />
                      </Layer>
                      <Layer style={{ ...dimensions('50%', '100%', 1) }} flexCenter>
                        <div style={{ ...w('100%') }}>
                          <h1>
                            You need help <br />
                            <TextLoop>
                              <span className="color-red">creating</span>
                              <span className="color-red">designing</span>
                              <span className="color-red">visualizing</span>
                            </TextLoop>{' '}
                            it.
                          </h1>

                          <p>
                            We build beautiful brands and products from the ground up. <br /> Every problem has a
                            elengant solution and we beleive that research is the key to success.
                          </p>
                        </div>
                      </Layer>
                    </Layer>
                  </div>
                </Layer>
              </div>
              <div className="section blue">
                <div className="box-blue" />
                <video muted data-autoplay className="home-video video-container video-container-overlay" autoPlay loop>
                  <source src={'/happy.mp4'} type="video/mp4" />
                </video>
                <Layer fill={1} flexCenter>
                  <div style={{ ...dimensions('1400px', '100%', 1) }}>
                    <Layer fill={1} flex={'row'}>
                      <Layer className="border-blue" style={{ ...dimensions('50%', '100%', 1) }} flexCenter>
                        <div style={{ ...w('100%') }}>
                          <h1>
                            We build you <br /> a sweet <br />
                            <TextLoop>
                              <span className="color-blue">product.</span>
                              <span className="color-blue">brand.</span>
                              <span className="color-blue">wireframe.</span>
                              <span className="color-blue">prototype.</span>
                              <span className="color-blue">logo.</span>
                              <span className="color-blue">design.</span>
                            </TextLoop>{' '}
                          </h1>

                          <p>
                            From logo and UX design to web development. We have you covered. <br />
                            Codeboot is media agency, but the slaves love what they do, <br />
                            and they get paid too... so like— maybe not like a slave trade.
                          </p>
                        </div>
                      </Layer>
                      <Layer style={{ ...dimensions('50%', '100%', 1) }} flexCenter align={'center'}>
                        <img className="" width={'600px'} src={'/img/sweet.png'} />
                      </Layer>
                    </Layer>
                  </div>
                </Layer>
              </div>
            </ReactFullpage.Wrapper>
          )
        }}
      />
      <GlobalStyle />
    </>
  )
}
