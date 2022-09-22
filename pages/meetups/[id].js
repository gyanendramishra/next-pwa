import { Fragment } from "react";
import Head from "next/head";

import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const result = await fetch(`${process.env.domain}/api/meetups/all`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { data = [] } = await result.json();

  return {
    fallback: "blocking",
    paths: data.map((meetup) => ({
      params: { id: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.id;

  const result = await fetch(
    `${process.env.domain}/api/meetups/filter?id=${meetupId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const { data = {} } = await result.json();
  return {
    props: {
      meetupData: {
        id: data._id.toString(),
        title: data.title,
        address: data.address,
        image: data.image,
        description: data.description,
      },
    },
  };
}

export default MeetupDetails;
