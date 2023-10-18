import styles from "./Index.module.scss";

const ShareSocialList = ({ title, url }) => {
  return (
    <div className={styles["share-socials-list"]}>
      <a
        className="facebook"
        href={`//www.facebook.com/sharer.php?s=100&title=${encodeURIComponent(
          title
        )}&url=${encodeURIComponent(url)}`}
        target="_blank"
        title="Facebook"
        onClick='window.open(this.href, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600");return false;'
      >
        <i className="fa fa-facebook"></i>
        Facebook
      </a>
      <a
        className="twitter"
        href={`//twitter.com/share?url=${encodeURIComponent(url)}`}
        target="_blank"
        title="Twitter"
        onClick='window.open(this.href, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600");return false;'
      >
        <i className="fa fa-twitter"></i>
        Twitter
      </a>
    </div>
  );
};

export default ShareSocialList;
