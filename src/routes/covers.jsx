import ReactPlayer from "react-player"
import Wish from "../assets/videos/Wish You Were Here 480.mp4"
import YourSong from "../assets/videos/Your Song 420.mp4"

export default function Covers() {
    return (
        <div className="videos">
            <Video video={Wish} title={'Jum sings...Pink Floyd - Wish You Were Here'}/>
            <Video video={YourSong} title={'Jum sings...Elton John - Your Song'} />
        </div>
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