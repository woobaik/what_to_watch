import React from "react"
import "../../../../node_modules/react-modal-video/scss/modal-video.scss"
import ModalVideo from "react-modal-video"

const VideoModal = props => {
  return (
    <div className="Video-modal">
      <ModalVideo
        channel="youtube"
        isOpen={props.isOpen}
        videoId={props.videoId}
        onClose={props.onClose}
      />
    </div>
  )
}

export default VideoModal
