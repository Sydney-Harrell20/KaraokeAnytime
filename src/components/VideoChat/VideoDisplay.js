import React, { useState, useEffect, useRef } from "react";
import { Container, Card } from 'react-bootstrap';

import { io } from 'socket.io-client';
import Peer from 'simple-peer';

const Video = (props) => {
    const ref = useRef();

    useEffect(() => {
        props.peer.on("stream", stream => {
            
            ref.current.srcObject = stream;
        
        })
    }, []);

    return (
        <video style={{ display: "flex", justifyContent: 'center', maxHeight: '600px', maxWidth: "700px", height: '60vh', width: '70vw' }} playsInline ref={ref} autoPlay />
    );
}

const VideoDisplay = (props) => {
    const [peers, setPeers] = useState([]);
    const socketRef = useRef();
    const myVideo = useRef();
    const peersRef = useRef([]);
    const roomID = props.genre;
    const [myStream, setStream] = useState([]);

    useEffect(() => {
        socketRef.current = io.connect("http://localhost:5000");
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
            myVideo.current.srcObject = stream;
            setStream(stream);
            socketRef.current.emit("join room", roomID);
            socketRef.current.on("all users", users => {
                const peers1 = [];
                console.log("unique Ids:")
                
                let uniqueIds = [];
                    users.forEach((userID) => {
                        if (!uniqueIds.includes(userID)) {
                            uniqueIds.push(userID);
                            console.log(userID);
                        }
                    });
                
                console.log("Current Users in room: ")
                uniqueIds.forEach(userID => {
                        console.log("userID coming from all users:" + userID)
                    
                        const peer = createPeer(userID, socketRef.current.id, stream);
                        peersRef.current.push({
                            peerID: userID,
                            peer,
                        })
                        /*peers1.push({
                            peerID: userID,
                            peer,
                        });*/
                   console.log(peersRef.current)
                })
                const newPeers = [...peersRef.current];
                setPeers(newPeers);
                
                
            })

            socketRef.current.on("user joined", (payload) => {
                if (peersRef.current.filter(p => p.peerID === payload.callerID).length > 0) {
                    return;
                }
                
                const peer = addPeer(payload.signal, payload.callerID, stream);
                peersRef.current.push({
                    peerID: payload.callerID,
                    peer,
                });
                const peerObj = {
                    peerID: payload.callerID,
                    peer,
                };
                const newPeers = [...peersRef.current];
                setPeers(newPeers);

            });

            socketRef.current.on("receiving returned signal", payload => {
                const item = peersRef.current.find(p => p.peerID === payload.id);
                console.log(item)
                console.log(item.peer.peerID + " and " + payload.id)
                const peer = item.peer;
                const signal1 = payload.signal;
                peer.signal(signal1)


               
            });

            socketRef.current.on("user left", id => {
                console.log(id)
                const peerObj = peersRef.current.find(p => p.peerID === id);
                if (peerObj) {
                    if(!peerObj.peer.destroyed)
                        peerObj.peer.destroy();
                }
                console.log(peersRef)
                const newPeers = peersRef.current.filter(p => p.peerID !== id);
                console.log(newPeers)
                peersRef.current = newPeers;
                setPeers(newPeers);
            });
        })
    }, []);

    function createPeer(userToSignal, callerID, stream) {
        const peer = new Peer({
            initiator: true,
            trickle: false,
            stream,
        });

        peer.on("signal", signal => {
            socketRef.current.emit("sending signal", { userToSignal, callerID, signal })
        })

        return peer;
    }

    function addPeer(incomingSignal, callerID, stream) {
        const peer = new Peer({
            initiator: false,
            trickle: false,
            stream,
        })

        peer.on("signal", signal => {
            console.log("sending signal to joiner")
            socketRef.current.emit("returning signal", { signal, callerID })
        })

        peer.signal(incomingSignal);

        return peer;
    }

    return (
        <Container>
            <video style={{ display: "flex", justifyContent: 'center', maxHeight: '600px', maxWidth: "700px", height: '60vh', width: '70vw' }} playsInline muted ref={myVideo} autoPlay />
            {peers.map((peer) => {
                return (
                    <>
                        Size = {peers.length} |||| 
                        {peer.peerID}
                        <Video key={peer.peerID} peer={peer.peer} />
                        </>
                );
            })}
        </Container>
    );
};
export default VideoDisplay;