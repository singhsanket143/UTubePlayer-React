import React from "react";
import "./VideoItem.css";
class VideoItem extends React.Component {
  onVideoSelect = video => {
    this.props.onVideoSelect(this.props.video); // Can Also be used if callback is handled outside jsx ans this onVideoSelect is of the app component
  };
  render() {
    return (
      //   <div onClick={this.onVideoSelect} className="video-item item">
      <div
        onClick={() => this.props.onVideoSelect(this.props.video)}
        className="video-item item"
      >
        <img
          className="ui image"
          src={this.props.video.snippet.thumbnails.medium.url}
          alt="from-youtube"
        />
        <div className="content">
          <div className="header">{this.props.video.snippet.title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
