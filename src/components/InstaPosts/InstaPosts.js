import React, { useState, useEffect } from "react"
import InstaCard from "./InstaCard"
import { getPosts } from "../Shared/Api"

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

  const [currentSlide, setCurrentSlide] = useState(0);

  const moveSlide = (direction) => {
    let newSlideIndex = currentSlide + direction;
    if (newSlideIndex < 0) {
      newSlideIndex = 0;
    } else if (newSlideIndex >= posts.length) {
      newSlideIndex = posts.length - 1;
    }
    setCurrentSlide(newSlideIndex);
  };

  useEffect(() => {
    const slider = document.getElementById('slider');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  }, [currentSlide]);

  return (
    <div className="items-center text-center w-4/5 mx-auto space-y-9">
      <h2 className="text-black text-3xl md:text-5xl font-extrabold">
        Our Latest <span className="text-deep-crimson">Dashers</span>
      </h2>
      <p className="text-base md:text-2xl w-4/5 mx-auto">
        Whether you're in Ventura County, Santa Barbara County, or San Luis
        Obispo County, we've got you covered.
      </p>

      {/* slider view */}
      <div className="md:hidden relative">
        <div className="overflow-hidden">
          <div className="flex transition-transform duration-300" id="slider">
          {posts.map((post) => (
              <div className="flex-shrink-0 w-full" key={post.id}>
                <InstaCard
                  username={post.username}
                  caption={post.caption}
                  date={new Date(post.timestamp).toLocaleDateString()}
                  img={post.media_url}
                  link={post.permalink}
                />
              </div>
            ))}
          </div>
        </div>
        <button className="absolute top-1/2 left-0 z-10 p-2 text-black transform -translate-y-1/2" onClick={() => moveSlide(-1)}>
          <span className="inline-block h-8 w-8">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
              className="text-neutral-600 dark:text-neutral-300">
              <path fill="currentColor"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            </svg>
          </span>
        </button>
        <button className="absolute top-1/2 right-0 z-10 p-2 text-black transform -translate-y-1/2" onClick={() => moveSlide(1)}>
          <span className="inline-block h-8 w-8">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
              className="text-neutral-600 dark:text-neutral-300">
              <path fill="currentColor"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </span>
        </button>
      </div>

      {/* md view */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-3">
        {posts.slice(0, 6).map((post) => (
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
    </div>
  )
}

export default InstaPosts
