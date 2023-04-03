import { Fragment, useEffect, useState } from "react";

const Media = ({ data }) => {
    const [canvas, setCanvas] = useState(null);
    const [frame, setFrame] = useState(null);
    const [constraints, setContraints] = useState(null);
    const [stream, setStream] = useState(null);
    const [recorder, setRecorder] = useState(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const [start, setStart] = useState(false);
    const [chunks, setChunks] = useState([]);

    useEffect(() => {
        // let canvas = document.createElement("canvas");
        // document.body.appendChild(canvas);

        if (canvas) {
            // canvas.width = document.body.clientWidth;
            // canvas.height = document.body.clientHeight;

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Get the stream
            const _stream = canvas.captureStream(60); // 60 FPS
            // and then every time you want to capture a frame (in your render loop for example):
            _stream.getVideoTracks()[0].requestFrame();
            setStream(_stream);

            // let context = canvas.getContext("2d");

            // canvas.addEventListener("mousemove", (event) => {
            //     let { pageX: x, pageY: y } = event;

            //     context.moveTo(position.x, position.y);
            //     context.lineTo(x, y);
            //     context.stroke();

            //     let _position = { x, y };
            //     setPosition(_position);
            // });

            // canvas.addEventListener("mousedown", (event) => {
            //     let { pageX: x, pageY: y } = event;
            //     let _position = { x, y };
            //     setPosition(_position);
            // });
        }
    }, [canvas]);

    useEffect(() => {
        if (frame) {
            setContraints({
                video: {
                    width: frame.style.width,
                    height: frame.style.height,
                    // type: "screen",
                    // withoutExtension: true,
                    // displaySurface: "browser",
                },
            });
        }
    }, [frame]);

    const handleStart = (e) => {
        if (constraints) {
            try {
                // navigator.mediaDevices
                //     .getUserMedia(constraints)
                //     .then((stream) => {
                //         console.log("stream", stream);
                //         if (stream) {
                //             setStream(stream);
                //         }
                //     });
                // navigator.mediaDevices
                //     .getDisplayMedia(constraints)
                //     .then((stream) => {
                //         if (stream) {
                //             setStream(stream);
                //         }
                //     });
                
                setStart(true);
            } catch (e) {
                console.error(e);
            }
        }
    };

    const handleStop = (e) => {
        stream.getTracks().forEach(function (track) {
            track.stop();
        });
        frame.srcObject = null;
        setFrame(frame);
    };

    const handleRecord = (e) => {
        let options = {
            mimeType: "video/webm;codecs=vp9,opus",
        };
        let _recoder = null;

        try {
            frame.srcObject = stream;
            _recoder = new MediaRecorder(stream, options);

            _recoder.ondataavailable = function (e) {
                const _chunks = [...chunks];
                _chunks.push(e.data);
                setChunks(_chunks);
            };
            // _recoder.onstop = function (e) {
            //     // other types are available such as 'video/webm' for instance, see the doc for more info
            //     const blob = new Blob(chunks, { type: "video/mp4" });
            //     const videoURL = URL.createObjectURL(blob);
            //     frame.src = videoURL;
            //     setChunks([]);
            // };

            setFrame(frame);
            setRecorder(_recoder);
        } catch (e) {
            console.error(e);
        }

        _recoder.start();
    };

    const handleStopRecord = (e) => {
        recorder.stop();
        setStart(false);
    };

    const handleMouseMove = (event) => {
        let context = canvas.getContext("2d");
        let { pageX: x, pageY: y } = event;

        context.moveTo(position.x, position.y);
        context.lineTo(x, y);
        context.stroke();

        let _position = { x, y };
        setPosition(_position);
    };

    const handleMouseDown = (event) => {
        let { pageX: x, pageY: y } = event;
        let _position = { x, y };
        setPosition(_position);
    };

    return (
        <Fragment>
            <canvas
                ref={(el) => {
                    if (!el) return;
                    setCanvas(el);
                }}
                onMouseMove={(e) => {
                    start && handleMouseMove(e);
                }}
                onMouseDown={(e) => {
                    start && handleMouseDown(e);
                }}
                className="position-absolute"
                style={{ zIndex: "9999" }}
            ></canvas>
            <video
                ref={(el) => {
                    if (!el) return;
                    setFrame(el);
                }}
                playsInline
                autoPlay
                muted
                className="position-absolute left-0"
                style={{ zIndex: "1000", width: "200px", height: "120px" }}
            ></video>
            <div
                className="position-relative vw-100 d-flex justify-content-center items-align-center"
                style={{ zIndex: "9999" }}
            >
                <button onClick={(e) => handleStart(e)}>Start camera</button>
                <button onClick={(e) => handleStop(e)}>Stop</button>
                <button onClick={(e) => handleRecord(e)}>Record</button>
                <button onClick={(e) => handleStopRecord(e)}>
                    Stop Recording
                </button>
                <button>Play</button>
                <button>Download</button>
            </div>
        </Fragment>
    );
};

export default Media;
