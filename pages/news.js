import Link from 'next/link';

export default function News () {
   return (
      <div>
         New field: 
         <hr/>
         <Link href='/news/general'>Go to General news &rarr;</Link> <br/><br/>
         <Link href='/news/comments'>Go to Comments &rarr;</Link><br/><br/>
         <Link href='/news/posts'>Go to Posts &rarr;</Link>
      </div>
   )
}