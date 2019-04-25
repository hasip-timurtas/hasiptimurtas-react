import React from 'react'
import Layout from './layout'
const videos = (props) => {
  
  return (
    <Layout className="home"> 
        <div className="education-videos">
            <div className="container">
                <h2>Educational Videos</h2>
                <div className="row">
                    <div className="col-md-12">
                        <div className="education-video col-md-4">
                            <iframe src="https://www.youtube.com/embed/nz2p9xIT2es" classNameName="embed-responsive-item"
                                    allowfullscreen>
                            </iframe>
                            <h5>How to Deploy Meteorjs Application</h5>
                        </div>
                        <div className="education-video col-md-4">
                            <iframe src="https://www.youtube.com/embed/IylVwlyR9-4" classNameName="embed-responsive-item"
                                    allowfullscreen>
                            </iframe>
                            <h5>Create Ubuntu server on Digital Ocean</h5>
                        </div>
                        <div className="education-video col-md-4">
                            <iframe src="https://www.youtube.com/embed/TEdDaJpZfss" classNameName="embed-responsive-item"
                                    allowfullscreen>
                            </iframe>
                            <h5>Visual Studio Console Application</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>

    
  )
};

export default videos;