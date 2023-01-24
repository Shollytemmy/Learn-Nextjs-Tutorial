import React, {useEffect} from 'react'
import { useRouter } from 'next/router'


export default function ErrorPage() {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push("/")

        }, 2000)
        


    }, [])
  return (
    <h1>Page not Found</h1>
  )
}
