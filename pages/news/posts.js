export const getStaticProps = async () => {
   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
   const data = await res.json();

   return {
      props: {
         postsList: data
      }
   }
}


export default function Posts ( {postsList} ) {

   return (
      <div>
         <h2>Posts:</h2>
         <hr/>
         <ul>
            {postsList.map(item => (
               <li key={item.id}>{item.title}</li>
            ))}
         </ul>
      </div>
   )
}