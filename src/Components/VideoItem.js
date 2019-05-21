import React from "react";

class VideoItem extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.video.snippet.thumbnails.medium.url}
          alt="from-youtube"
        />
        {this.props.video.snippet.title}
      </div>
    );
  }
}

export default VideoItem;
