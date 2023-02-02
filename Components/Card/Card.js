import React from 'react'
import styles from '@/Components/Card/Card.module.css'
import Image from 'next/image';
import { useRouter } from 'next/router';


export const Card = ({gadgets}) => {
    const router = useRouter()
    
  return (
    <>
        {
            gadgets.map((gadget) => {
              

                const {id, name, price, desc, image} = gadget;
                return(
                     <article key={id} className={styles.article} onClick={() => router.push(`/gadgets/${id}`)}>
                    <Image src={image.url} alt={image.alt} width={300} height={100} className={styles["img-pic"]} />

                    <header className={styles.header}>
                        <p>{name}</p>
                        <p className={styles["price-tag"]}>{price}</p>

                    </header>

                    <div>

                        
                       
                    </div>
                </article>
                )
               
            })
        }

    </>
  )
}
