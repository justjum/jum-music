import { Outlet, Link } from "react-router-dom"

export default function Music() {
    return (
        <>
            <h2>Music</h2>
            <Link to={"Originals"}>Original Songs</Link><Link to={"Covers"}>Cover Songs</Link>
            <div><Outlet /></div>
        </>
    )
}
