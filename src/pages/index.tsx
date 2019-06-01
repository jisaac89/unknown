import React from 'react'
import { Layer } from '../recoil2/components/Layer/Layer'
import TextLoop from 'react-text-loop'
import { dimensions, mt } from '../recoil2/styles/classList'
import { useMedia } from 'use-media'
import { Layout } from '../layout/Layout'

const project1 = '/img/project1.png'
const project2 = '/img/project2.png'
const project3 = '/img/project3.png'
const project4 = '/img/project4.png'

const juicy = '/img/juicy.png'
const phone = '/img/phone.png'
const sweet = '/img/sweet.png'

export default () => {
  const isMobile = useMedia({ maxWidth: 800 })
  const autoSizeStyle = { ...dimensions('1400px', '100%', 1), margin: '0 auto' }
  const halfBoxStyle = { ...dimensions('50%', '100%', 1) }
  const featuredImageWidth = '600px'
  return (
    <Layout title={'Home'}>
      <Layer scrollY fill={1}>
        <Layer fill={1} className="section green">
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
              <img width={'300px'} src={juicy} />
            </Layer>
          ) : (
            <Layer style={autoSizeStyle} fill={1} flex={'row'}>
              <Layer className="border-green" style={halfBoxStyle} flexCenter>
                <div>
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
              <Layer style={halfBoxStyle} flexCenter align={'center'}>
                <img width={featuredImageWidth} src={'/img/juicy.png'} />
              </Layer>
            </Layer>
          )}
        </Layer>
        <div className="section red">
          <Layer fill={1} flexCenter>
            <div style={autoSizeStyle}>
              <Layer fill={1} flex={'row'}>
                <Layer className="border-red" style={halfBoxStyle} flexCenter align={'center'}>
                  <img width={featuredImageWidth} src={phone} />
                  <img className="proj1" src={project1} />
                  <img className="proj2" src={project2} />
                  <img className="proj3" src={project3} />
                  <img className="proj4" src={project4} />
                </Layer>
                <Layer style={halfBoxStyle} flexCenter>
                  <div>
                    <h1>
                      You need help <br />
                      <TextLoop>
                        <span className="color-red">creating</span>
                        <span className="color-red">designing</span>
                        <span className="color-red">visualizing</span>
                      </TextLoop>
                      it.
                    </h1>
                    <p>
                      We build beautiful brands and products from the ground up. <br /> Every problem has a elengant
                      solution and we beleive that research is the key to success.
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
            <div style={autoSizeStyle}>
              <Layer fill={1} flex={'row'}>
                <Layer className="border-blue" style={halfBoxStyle} flexCenter>
                  <div>
                    <h1>
                      We build you <br /> a sweet <br />
                      <TextLoop>
                        <span className="color-blue">product.</span>
                        <span className="color-blue">brand.</span>
                        <span className="color-blue">wireframe.</span>
                        <span className="color-blue">prototype.</span>
                        <span className="color-blue">logo.</span>
                        <span className="color-blue">design.</span>
                      </TextLoop>
                    </h1>
                    <p>
                      From logo and UX design to web development. We have you covered. <br />
                      Codeboot is media agency, but the slaves love what they do, <br />
                      and they get paid too... so like— maybe not like a slave trade.
                    </p>
                  </div>
                </Layer>
                <Layer style={halfBoxStyle} flexCenter align={'center'}>
                  <img width={featuredImageWidth} src={sweet} />
                </Layer>
              </Layer>
            </div>
          </Layer>
        </div>
      </Layer>
    </Layout>
  )
}
