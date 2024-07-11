import React, { useEffect, useRef } from "react"

export function Comments() {
  const commentsRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    console.log("Adding script")
    const commentScript = document.createElement("script")
    commentScript.setAttribute("src", "https://utteranc.es/client.js")
    commentScript.setAttribute("repo", "sundaray/hemantasundaray.com-comments")
    commentScript.setAttribute("issue-term", "pathname")
    commentScript.setAttribute("theme", "preferred-color-scheme")
    commentScript.setAttribute("crossorigin", "anonymous")
    commentScript.async = true

    if (commentsRef.current) {
      commentsRef.current.appendChild(commentScript)
      console.log("Script added")
    }

    // Store the current value of commentsRef.current in a variable
    const commentsNode = commentsRef.current

    // Cleanup function
    return () => {
      console.log("Cleaning up")
      if (commentsNode) {
        while (commentsNode.firstChild) {
          commentsNode.removeChild(commentsNode.firstChild)
        }
        console.log("Cleanup done")
      }
    }
  }, [])

  return <div ref={commentsRef} />
}
