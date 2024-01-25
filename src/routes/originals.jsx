import ReactPlayer from "react-player"
import Moonlight from "../assets/videos/Flitters - Moonlight Serenade 480.mp4"
import { Link } from "react-router-dom"

export default function Originals() {
    return (
        <>
            <Video video={Moonlight} title={'Flitters ~ Moonlight Serenade'} />
        </>
    )
}

function Video(props) {
    return (
        <>
            <h2>{props.title}</h2>
            <ReactPlayer    
                url={props.video}
                muted={false}
                playing={false}
                className="logo"
                controls={true}
                />
        </>
    )
}