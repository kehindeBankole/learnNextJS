import React from 'react'
import Head from 'next/head'
function about() {
    const[data , setData]=React.useState([])
   async function get(){
        try {
           const fet  =  await fetch('https://jsonplaceholder.typicode.com/comments') 
           const comments =await fet.json()
           console.log(comments)
           setData(comments)
        } catch (error) {
           console.log(error) 
        }
    }
    React.useEffect(() => {
       get()
    }, [])
    return (
        <div>
            <Head>
                <title>about page testi</title>
            </Head>
            <main>
                {
                    data.map(comment =>(
                        comment.body
                    ))
                }
            </main>
        </div>
    )
}

export default about
