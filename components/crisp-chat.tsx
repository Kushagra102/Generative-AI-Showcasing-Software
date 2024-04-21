"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("4cecbcf1-933e-44b8-93e7-d65758e5f3b7")
    }, [])

    return null
}