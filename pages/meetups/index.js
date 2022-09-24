import Head from "next/head";
import { Fragment } from "react";
import MeetupList from "../../components/meetups/MeetupList";

function Meetups(props) {
  return (
    <Fragment>
      <Head>
        <title>Gyanendra Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active Gyanendra meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

export async function getStaticProps() {
  // const result = await fetch(`/api/meetups/all`, {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });

  // const { data = [] } = await result.json();
  const data = [];

  return {
    props: {
      meetups: data.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
      })),
    },
  };
}

export default Meetups;
