import Image from "next/image";
import Script from "next/script";

const FacebookChat = () => {
    // const [hover, setHover] = useState(false);

    return (
        <div className="position-fixed">
            <div id="fb-root">
                {/* <style jsx>
                    {`
                        .animate > img {
                            animation: pulse 1s linear 4;
                        }
                        @keyframes pulse {
                            0% {
                                transform: scale(1);
                            }
                            25% {
                                transform: scale(1.1);
                            }
                            50% {
                                transform: scale(1);
                            }
                            75% {
                                transform: scale(0.9);
                            }
                            100% {
                                transform: scale(1);
                            }
                        }
                    `}
                </style> */}
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
                    }}
                    onClick={(e) => {
                        // e.target.classList.add("animate");
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
            <div id="fb-customer-chat" className="fb-customerchat w-50"></div>
            <Script id="facebook-messager" strategy="lazyOnload">{`
                var chatbox = document.getElementById('fb-customer-chat');
                chatbox.setAttribute("page_id", "525721164174881");
                chatbox.setAttribute("attribution", "biz_inbox");
                chatbox.setAttribute("greeting_dialog_display", "hide");

                window.fbAsyncInit = function() {
                    FB.init({
                        status           : true,
                        xfbml            :  true,
                        version          : 'v16.0'
                    });
                };

                (function(d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) return;
                    js = d.createElement(s); js.id = id;
                    js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
                    fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));
        `}</Script>
        </div>
    );
};

export default FacebookChat;
