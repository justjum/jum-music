import ReactPlayer from "react-player"
import Moonlight from "../assets/videos/Flitters - Moonlight Serenade 480.mp4"
import Wish from "../assets/videos/Wish You Were Here 480.mp4"
import YourSong from "../assets/videos/Your Song 420.mp4"

export default function Music() {
    return (
        <>
            <Video video={Moonlight} title={'Flitters ~ Moonlight Serenade'} />
            <Video video={Wish} title={'Jum plays...Pink Floyd - Wish You Were Here'}/>
            <Video video={YourSong} title={'Jum plays...Elton John - Your Song'} />
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