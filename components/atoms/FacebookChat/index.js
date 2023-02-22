import Script from "next/script";
import { useEffect } from "react";

// flag to identify wether or not messenger chat is mounted
let isMounted = false;

export const showBubble = (bottom) => {
    const css = `
        .fb_reset {
            visibility: visible  !important;
        }
        [data-testid="bubble_iframe"] {
            visibility: visible !important;
            bottom: 0 !important;
            transform: translateY(${-bottom}px) !important;
            transition: transform 0.3s !important;
        }
        [data-testid='dialog_iframe'] {
            bottom: ${bottom + 56}px !important;
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
                    }
                    [data-testid="bubble_iframe"] {
                        visibility: hidden !important;
                    }`;

                const style = document.createElement("style");
                style.appendChild(document.createTextNode(css));
                document.head.appendChild(style);

                FB.init({
                    xfbml: true,
                    version: "v16.0",
                });

                // FB.Event.subscribe("customerchat.load", () => {
                //     setTimeout(() => showBubble(0, 40), 1500);
                // });

                FB.Event.subscribe("xfbml.render", () => {
                    isMounted = true;
                });

                FB.Event.subscribe("customerchat.show", () => {
                    setTimeout(() => showBubble(120), 1500);
                });

                FB.Event.subscribe("customerchat.hide", () => {});

                FB.Event.subscribe("customerchat.dialogShow", () => {});

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
            <div id="fb-root"></div>
            <div id="fb-customer-chat" className="fb-customerchat"></div>
        </div>
    );
};

export default FacebookChat;
