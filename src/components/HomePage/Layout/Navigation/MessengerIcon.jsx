import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavigationIconContext from "../../../../store/NavigationIconContext";
import useFillIcon from "../../../../custom-hooks/useFillIcon";
import classes from "./Navigation.module.scss";


const initPath =
  "M36.2 16.7L29 22.2c-.5.4-1.2.4-1.7 0l-5.4-4c-1.6-1.2-3.9-.8-5 .9l-6.8 10.7c-.7 1 .6 2.2 1.6 1.5l7.3-5.5c.5-.4 1.2-.4 1.7 0l5.4 4c1.6 1.2 3.9.8 5-.9l6.8-10.7c.6-1.1-.7-2.2-1.7-1.5zM24 1C11 1 1 10.5 1 23.3 1 30 3.7 35.8 8.2 39.8c.4.3.6.8.6 1.3l.2 4.1c0 1 .9 1.8 1.8 1.8.2 0 .5 0 .7-.2l4.6-2c.2-.1.5-.2.7-.2.2 0 .3 0 .5.1 2.1.6 4.3.9 6.7.9 13 0 23-9.5 23-22.3S37 1 24 1zm0 41.6c-2 0-4-.3-5.9-.8-.4-.1-.8-.2-1.3-.2-.7 0-1.3.1-2 .4l-3 1.3V41c0-1.3-.6-2.5-1.6-3.4C6.2 34 4 28.9 4 23.3 4 12.3 12.6 4 24 4s20 8.3 20 19.3-8.6 19.3-20 19.3z";
const activePath =
  "M10.2 29.8c-.7 1 .6 2.2 1.6 1.5l7.3-5.5c.5-.4 1.2-.4 1.7 0l5.4 4c1.6 1.2 3.9.8 5-.9L38 18.2c.7-1-.6-2.2-1.6-1.5L29 22.2c-.5.4-1.2.4-1.7 0l-5.4-4c-1.6-1.2-3.9-.8-5 .9l-6.7 10.7zM24 1c13 0 23 9.5 23 22.3S37 45.6 24 45.6c-2.3 0-4.6-.3-6.7-.9-.4-.1-.8-.1-1.2.1l-4.6 2c-1.1.6-2.5-.3-2.5-1.6l-.1-4.1c0-.5-.2-1-.6-1.3C3.7 35.8 1 30 1 23.3 1 10.5 11 1 24 1z";

const MessengerIcon = () => {
  const { ref, handleClick } = useFillIcon();
  const [state] = useContext(NavigationIconContext);
  const [path, setPath] = useState(initPath);

  useEffect(() => {
    if (state.id === ref.current.id) {
      setPath(activePath);
    } else setPath(initPath);
  }, [state.id, ref]);

  return (
      <div ref={ref} className={classes.navIcon} onClick={handleClick} id="messenger">
        <Link to="">
          <svg
            aria-label="Messenger"
            className="_8-yf5 "
            color="#262626"
            fill="#262626"
            height="22"
            role="img"
            viewBox="0 0 48 48"
            width="22"
          >
            <path d={path}></path>
          </svg>{" "}
        </Link>
      </div>
  );
};

export default MessengerIcon;
