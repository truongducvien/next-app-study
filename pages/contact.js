import { useState } from 'react'
import Alert from '../components/alert';
import styles from '../styles/contact.module.scss';

export default function Contact () {
   const [info, setInfo] = useState({name: "truong vien", age: 25})
   const [isDisplay, setIsDisplay] = useState(false)
   const [isLogin, setIsLogin] = useState(false)

   const handleClick = () => {
      setIsLogin(!isLogin)
      setIsDisplay(true)
   }

   return (
      <div className={`${styles.contact} thichthinhich`}>
         Contact field:
         <p>Name: {info.name}</p>
         <span>Age: {info.age}</span>

         <hr/>
         <button onClick={handleClick}>Login</button>
         
         {isDisplay? (
            <Alert 
               type={isLogin? `success`:`fail`}
               children = {
                  <>
                     {isLogin? (
                        <p>You've just logged in</p>
                     ):(
                        <p>You have not logged in</p>
                     )}
                  </>
               }
            />
         ) : (<></>)}

      </div>
   )
}