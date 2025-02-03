import birdlanding from "../assets/birdlanding.mp4"

const Background = () => {
  return (
    <div className="background">
<video src={birdlanding} autoPlay loop muted/>

    </div>
  )
}

export default Background