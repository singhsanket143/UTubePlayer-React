import React from "react";

class VideoDetail extends React.Component {
  render() {
    const video = this.props.video;
    if (!video) {
      return <div>Loading..</div>;
    }
    return (
      <div>
        <div className="ui embed">
          <iframe
            title="video player"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
          />
        </div>
        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
  }
}

export default VideoDetail;
