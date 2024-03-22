import React from "react";
import Layout from "./layout";
import axios from "axios";

export default class Videos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videos: null };
    this.youtubeApiKey = "";
    this.youtubeChannelId = "";
  }

  componentDidMount() {
    axios
      .get(`https://www.googleapis.com/youtube/v3/search?key=${this.youtubeApiKey}&channelId=${this.youtubeChannelId}&part=snippet,id&order=date`)
      .then((response) => this.setState({ videos: response }));
  }

  render() {
    const { videos } = this.state;
    const videosData =
      videos &&
      videos.data.items.map((e, i) => (
        <div key={i} className="education-video">
          <iframe
            width="300"
            height="175"
            src={"https://www.youtube.com/embed/" + e.id.videoId}
            className="embed-responsive-item"
            allowFullScreen
          ></iframe>
          <h5>{e.snippet.title}</h5>
        </div>
      ));

    return (
      <Layout className="home">
        <div className="education-videos">
          <div className="container">
            <h2>Educational Videos</h2>
            <div className="row">
              <div className="col-md-12">
                <div className="row">{videosData}</div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
