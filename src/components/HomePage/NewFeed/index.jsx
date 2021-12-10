<<<<<<< HEAD
=======
import React, { useEffect, useState } from "react";
>>>>>>> 74116d9099fb08d7106f6ab9d1592e7da8910975
import Posts from "./Posts";
import Story from "./Story";
import classes from "./NewFeed.module.scss";
import Card from "../../UI/Card";
import UserSideBar from "../UserSideBar";
import clsx from "clsx";
import useViewPort from "../../../custom-hooks/useViewPort";

const NewFeed = () => {
  const { isTabletMobile, isMobile } = useViewPort();
<<<<<<< HEAD

=======
  console.log(isTabletMobile)
>>>>>>> 74116d9099fb08d7106f6ab9d1592e7da8910975
  return (
    <section className={clsx(classes.newFeed, {[classes.isMobile] : isMobile})}>
      <div
        className={clsx(classes.content, {
          [classes.center]: isTabletMobile,
          [classes.isMobile]: isMobile,
        })}
      >
        <Card>
          <Story />
        </Card>
        <Posts />
      </div>
      {!isTabletMobile && <UserSideBar />}
    </section>
  );
};

export default NewFeed;