import { usePlaybackState } from "react-spotify-web-playback-sdk";
import { Card } from "react-bootstrap";
import PauseResumeButton from './PauseResumeButton'
const SongTitle = () => {
    const playbackState = usePlaybackState();

    if (playbackState === null) return null;

    return <>Current song: {playbackState.track_window.current_track.name}
        <PauseResumeButton />
        </>;
};
export default SongTitle;