import React from "react";
import Head from "next/head";
import Link from "next/link";
function about({ comments }) {
  const [data, setData] = React.useState([]);

  return (
    <div>
      <Head>
        <title>about page testi</title>
      </Head>
      <main>
        {comments.map((comment, index) => (
          <div
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              marginBottom: "50px",
              textAlign: "justify",
            }}
            key={index}
          >
            <Link
              href={`article/[id]`}
              as={`/article/${comment.id}`}
              
            >
              {comment.body}
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
}
export async function getStaticProps() {
  const fet = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = await fet.json();
  console.log(comments);
  return {
    props: { comments },
  };
}

export default about;
