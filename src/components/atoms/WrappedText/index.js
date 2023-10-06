import { Children, Fragment, cloneElement } from "react";
import styles from "./Index.module.scss";

function getIndicesOf(searchStr, str, caseSensitive) {
  var searchStrLen = searchStr.length;
  if (searchStrLen == 0) {
    return [];
  }
  var startIndex = 0,
    index,
    indices = [0];
  if (!caseSensitive) {
    str = str.toLowerCase();
    searchStr = searchStr.toLowerCase();
  }
  while ((index = str.indexOf(searchStr, startIndex)) > -1) {
    indices.push(index);
    startIndex = index + searchStrLen;
  }
  return indices;
}

const WrappedText = ({
  text,
  wordProps = {},
  charProps = {},
  isActive = false,
  effect = {
    position: "ltr",
    type: "drop",
  },
  children,
  ...props
}) => {
  let words = [];
  let indices = [];
  let charStyles = [];

  if (text) {
    words = text.split(" ");
    indices = getIndicesOf(" ", text);

    charStyles = words.map((word, idxWord) => {
      let characters = word.split("");
      return characters.map((character, idxCharacter) => {
        return {
          animationDelay: 0.5 + (idxCharacter + indices[idxWord]) / 10 + "s",
        };
      });
    });

    if (effect.type === "" && effect.position === "rtl") {
      charStyles = charStyles
        .map((styles, index) => {
          let _styles = [...styles];
          return _styles.reverse();
        })
        .reverse();
    }
  } else {
    let _words = [];
    words = [...Children.toArray(children)];
    words.forEach((item, idx) => {
      if (item.type === Fragment) {
        _words = [..._words, ...item.props.children];
      } else {
        _words = [..._words, item];
      }
    });

    words = [..._words];
  }

  return (
    <div className="wrapped-line" {...props}>
      {words.map((word, index) => {
        if (typeof word !== "string") {
          return cloneElement(word, {
            style: { ...word.props?.style, animationDelay: "0.7s" },
            className: `${styles["wrapped-character"]} ${
              isActive
                ? styles[`wrapped-character-${effect.position}-start`]
                : styles[`wrapped-character-${effect.position}-end`]
            }`,
          });
        } else {
          const characters = word.split("");

          return (
            <Fragment key={`wrapped-word-${index}`}>
              <div
                className="wrapped-word inline-block tracking-widest"
                {...wordProps}
              >
                {characters.map((character, indexChar) => {
                  const { className: characterClass, ...charOtherProps } = {
                    ...charProps,
                  };
                  let charStyle = null;

                  if (charStyles && charStyles.length > 0) {
                    charStyle = charStyles[index];
                  }

                  return (
                    <span
                      key={`wrapped-character-${index}-${indexChar}`}
                      className={`${styles["wrapped-character"]} ${
                        characterClass ? characterClass : ""
                      } ${
                        isActive
                          ? styles[
                              `wrapped-character-${effect.type}-${effect.position}-start`
                            ]
                          : styles[
                              `wrapped-character-${effect.type}-${effect.position}-end`
                            ]
                      }`}
                      style={isActive && charStyle ? charStyle[indexChar] : {}}
                      {...charOtherProps}
                    >
                      {character}
                    </span>
                  );
                })}
              </div>
              &nbsp;
            </Fragment>
          );
        }
      })}
    </div>
  );
};

export default WrappedText;
