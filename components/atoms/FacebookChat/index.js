import Script from "next/script";

const FacebookChat = () => {
    // const [hover, setHover] = useState(false);

    return (
        <div className="position-fixed">
            <div id="fb-root"></div>
            <div id="fb-customer-chat" class="fb-customerchat"></div>
            <Script id="facebook-messager" strategy="lazyOnload">{`
                var chatbox = document.getElementById('fb-customer-chat');
                chatbox.setAttribute("page_id", "525721164174881");
                chatbox.setAttribute("attribution", "biz_inbox");
                chatbox.setAttribute("greeting_dialog_display", "Hello Hello");

                window.fbAsyncInit = function() {
                    FB.init({
                        xfbml            : true,
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
