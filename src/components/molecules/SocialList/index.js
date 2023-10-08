const SocialList = () => {
    return (
      <ul className="socials-list">
        <li className="inline-block">
          <a href="https://facebook.com" target="_blank">
            <i className="fa fa-facebook"></i>
          </a>
        </li>
        <li className="inline-block">
          <a href="https://twitter.com/" target="_blank">
            <i className="fa fa-twitter"></i>
          </a>
        </li>
        <li className="inline-block">
          <a href="https://www.instagram.com/" target="_blank">
            <i className="fa fa-instagram"></i>
          </a>
        </li>
        <li className="inline-block">
          <a href="https://www.youtube.com/" target="_blank">
            <i className="fa fa-youtube-play"></i>
          </a>
        </li>
      </ul>
    );
}

export default SocialList;