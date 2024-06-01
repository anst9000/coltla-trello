"use client"

import { useState, useEffect } from "react"
import { Fragment } from "react"
import { CardModal } from "@/components/modals/card-modal"
import { ProModal } from "@/components/modals/pro-modal"

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Fragment>
      <CardModal />
      <ProModal />
    </Fragment>
  )
}
