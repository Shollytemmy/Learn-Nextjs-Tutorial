import Image from 'next/image'
import { useRouter } from 'next/router'
import React, {useEffect, useState} from 'react'
import styles from "@/Components/Card/Card.module.css"

  const ProductsDetail = () => {

    const [products, setProducts] = useState(null)

    const router = useRouter()

    const {id} = router.query


    const getSingleProduct = async() => {
        const response =  fetch(`/api/gadget/${id}`)
        const data = await (await response).json()
        console.log(data);
        setProducts(data)
        
       
    }

    useEffect(() => {
    getSingleProduct()
    
    
}, []);
  return (
    <div className={styles.card}>
        {
            products && (
                <article style={{display: "flex", gap: "25px"}}>
                    <Image src={products.image.url} alt={products.image.alt} width={500} height={300} />
                    <aside>
                        <header style={{ alignItems: "center", gap: "10px", marginBottom: "25px"}}>
                        <h3 style={{marginBottom: "15px"}}>{products.name}</h3>
                        <h4>{products.price}</h4>
                    </header>
                    <div className={styles.para}>
                        <p>{products.desc}</p>
                    </div>

                    </aside>
                    
                </article>

            )
        }
    </div>
  )
}



export default ProductsDetail