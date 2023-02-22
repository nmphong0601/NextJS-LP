import Image from "next/image";
import Script from "next/script";

const FacebookChat = () => {
    // const [hover, setHover] = useState(false);

    return (
        <div className="position-fixed">
            <div id="fb-root">
                <div
                    className="position-fixed d-flex justify-content-center align-items-center"
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
                        window.FB.XFBML.parse(e.target);
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
                        xfbml            :  false,
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
