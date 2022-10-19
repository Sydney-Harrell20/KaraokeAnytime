import { useSpotifyPlayer } from "react-spotify-web-playback-sdk";
import { Button } from "react-bootstrap";
const PauseResumeButton = () => {
    const player = useSpotifyPlayer();

    if (player === null) return null;

    return (
        <div >
            <Button style={{ margin: '3px'}} variant={'success'} onClick={() => player.resume()}>Resume</Button>
            <Button style={{ margin: '3px' }} variant={'success'} onClick={() => player.pause()}>Pause</Button>
        </div>
    );
};
export default PauseResumeButton;