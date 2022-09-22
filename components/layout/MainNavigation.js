import Link from "next/link";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">GKMeetups</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/meetups">All Meetups</Link>
          </li>
          <li>
            <Link href="/meetups/create">Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
