import Card from "../ui/Card";
import Link from "next/link";
import Image from "next/image";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image
            src={props.image}
            alt={props.title}
            height={500}
            width={500}
            layout="responsive"
          />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <Link href={`/meetups/${props.id}`}>
            <button>Show Details</button>
          </Link>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
