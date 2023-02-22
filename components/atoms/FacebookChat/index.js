import Image from "next/image";
import Script from "next/script";
import { useEffect } from "react";

// flag to identify wether or not messenger chat is mounted
let isMounted = false;

export const setVisible = () => {
    const css = `
        .fb_reset {
            visibility: visible  !important;
        }`;

    const style = document.createElement("style");
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
};

export const setBottomSpacing = (bottomSpacing) => {
    const css = `
        [data-testid="bubble_iframe"] {
            visibility: visible !important;
            bottom: 0 !important;
            transform: translateY(${-bottomSpacing}px) !important;
            transition: transform 0.3s !important;
        }
        [data-testid='dialog_iframe'] {
            bottom: ${bottomSpacing + 56}px !important;
        }`;

    const style = document.createElement("style");
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
};

const FacebookChat = () => {
    // const [hover, setHover] = useState(false);
    useEffect(() => {
        try {
            initMessenger();
        } catch (err) {
            console.log(err);
        }
    }, []);

    const initMessenger = () => {
        try {
            const chatbox = document.getElementById("fb-customer-chat");

            chatbox.setAttribute("page_id", "525721164174881");
            chatbox.setAttribute("attribution", "biz_inbox");

            window.fbAsyncInit = function () {
                const css = `
                    .fb_reset {
                        visibility: hidden !important;
                    }`;

                const style = document.createElement("style");
                style.appendChild(document.createTextNode(css));
                document.head.appendChild(style);

                FB.init({
                    xfbml: true,
                    version: "v16.0",
                });

                FB.Event.subscribe("customerchat.load", () => {
                    setTimeout(() => setBottomSpacing(24), 1500);
                });

                FB.Event.subscribe("xfbml.render", () => {
                    isMounted = true;
                });

                FB.Event.subscribe("customerchat.show", () => {});

                FB.Event.subscribe("customerchat.hide", () => {});

                FB.Event.subscribe("customerchat.dialogShow", () => {
                    setVisible();
                });

                FB.Event.subscribe("customerchat.dialogHide", () => {});
            };

            (function (d, s, id) {
                let js,
                    // eslint-disable-next-line prefer-const
                    fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                // eslint-disable-next-line prefer-const
                js = d.createElement(s);
                js.id = id;
                js.src = `https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js`;
                fjs?.parentNode?.insertBefore(js, fjs);
            })(document, "script", "facebook-jssdk");
        } catch (err) {
            throw err;
        }
    };
    return (
        <div className="position-fixed">
            <div id="fb-root">
                <div
                    className="position-fixed d-flex justify-content-center align-items-center animate"
                    style={{
                        width: "60px",
                        height: "60px",
                        bottom: "24px",
                        right: "24px",
                        zIndex: "9999999999",
                        background: "#0A7CFF",
                        borderRadius: "100%",
                        cursor: "pointer",
                    }}
                    onClick={(e) => {
                        window.FB.CustomerChat.showDialog();
                    }}
                >
                    <Image
                        unoptimized={true}
                        width={36}
                        height={36}
                        src="/assets/icons/facebook-chat-new.svg"
                    />
                </div>
            </div>
            <div id="fb-customer-chat" className="fb-customerchat"></div>
        </div>
    );
};

export default FacebookChat;
