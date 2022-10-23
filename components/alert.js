import styles from '../styles/alert.module.scss';

export default function Alert ( {children, type} ) {
   return (
      <div className={styles[type]}>
         {children}
      </div>
   )
}