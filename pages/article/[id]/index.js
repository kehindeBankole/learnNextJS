import React from 'react'

function article({comments}) {
    return (
        <div>
           <main>
               {comments.email}
           </main>
        </div>
    )
}

export async function getServerSideProps(context) {
    const fet = await fetch(`https://jsonplaceholder.typicode.com/comments/${context.params.id}`);
    const comments = await fet.json();
    console.log(comments);
    return {
      props:{ comments}
    }
  }

export default article
