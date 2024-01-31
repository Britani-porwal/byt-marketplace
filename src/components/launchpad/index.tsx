import Grid from "../clients/grid"
import Capabilities from "./capabilities"
import LetsTalk from "./lets-talk"
import LaunchHead from "./main"

const LaunchpadHome = () => {
    return (
        <>
            <LaunchHead />
            <Capabilities />
            <Grid />
            <LetsTalk />
        </>
    )
}

export default LaunchpadHome