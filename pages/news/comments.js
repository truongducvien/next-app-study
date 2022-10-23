import { useEffect, useState } from "react";

export default function Comments () {
   const [comments, setComments] = useState([])

   useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/comments?_limit=10&_page=2`)
         .then(res => res.json())
         .then(data => setComments(data))
   }, [])

   return (
      <div>
         Comment: <hr/>
         <ol>
            {comments != [] && comments.map(item => (
               <li key={item.id}>{item.name}</li>
            ))}
         </ol>
      </div>
   )
}