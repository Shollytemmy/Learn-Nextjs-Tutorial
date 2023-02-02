import { Card } from '@/Components/Card/Card';
import React, { useState, useEffect } from 'react';
import styles from "@/Components/Card/Card.module.css"

const Index = () => {
    const [gadgets, setGadgets] = useState([])

    const getGadgets = async() => {

        const response = await fetch('/api/gadget')
        const data = await (await response).json()
        setGadgets(data)
    }

    useEffect(() => {
        getGadgets()
    }, []);
    return (
        <div className={styles.card}>
        
        <Card gadgets = {gadgets} />
        </div>
    );
}

export default Index;
