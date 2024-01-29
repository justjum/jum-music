import { Outlet, Link } from "react-router-dom"

export default function Music() {
    return (
        <>
            <h2>music</h2>
            <button className="music-link"><Link to={"Originals"}>Original Songs</Link></button>
            <button className="music-link"><Link to={"Covers"}>Cover Songs</Link></button>
        </>
    )
}
