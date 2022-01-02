import * as React from "react"
import { navigate } from "gatsby"

import { useEffect } from "react"

const NotFoundPage = () => {
  useEffect(() => {
    navigate("/") // redirecting to home page
  }, [])
  return <div></div>
}

export default NotFoundPage
