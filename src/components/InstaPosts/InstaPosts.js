import React, { useState, useEffect } from "react"
import InstaCard from "./InstaCard"
import { getPosts } from "../Shared/Api"
import axios from "axios"

const InstaPosts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPosts()
        setPosts(fetchedPosts)
      } catch (error) {
        console.error("Error fetching posts:", error)
      }
    }

    fetchPosts()
  }, [])

  return (
    <div className="items-center text-center w-4/5 mx-auto space-y-9">
      <h2 className="text-black text-3xl md:text-5xl font-extrabold">
        Our Latest <span className="text-deep-crimson">Dashers</span>
      </h2>
      <p className="text-base md:text-2xl w-4/5 mx-auto">
        Whether you're in Ventura County, Santa Barbara County, or San Luis
        Obispo County, we've got you covered.
      </p>

      {/* <div className="md:grid md:grid-cols-3 md:gap-3"> */}
        <div className="md:grid md:grid-cols-3 md:gap-3">
          {posts.map(post => (
            <InstaCard
              key={post.id}
              username={post.username}
              caption={post.caption}
              date={new Date(post.timestamp).toLocaleDateString()}
              img={post.media_url}
              link={post.permalink}
            />
          ))}
        </div>
      {/* </div> */}
    </div>
  )
}

export default InstaPosts
