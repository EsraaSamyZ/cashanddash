import React, { useEffect, useRef, useState, Suspense } from 'react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import HeroComponent from "../components/Hero/HeroComponent"
import bg from '../images/bg-kbb.png'
// import Kbb from "../components/KBB/Kbb"
// import Howto from "../components/Howto/Howto"
// import InstaPosts from "../components/InstaPosts/InstaPosts"
// import SellersReviews from "../components/SellersReviews/SellersReviews"
// import Services from "../components/Services/Services"
// import FAQs from "../components/FAQs/FAQs"
const Kbb = React.lazy(() => import("../components/KBB/Kbb"));
const Howto = React.lazy(() => import("../components/Howto/Howto"));
const InstaPosts = React.lazy(() => import("../components/InstaPosts/InstaPosts"));
const SellersReviews = React.lazy(() => import("../components/SellersReviews/SellersReviews"));
const Services = React.lazy(() => import("../components/Services/Services"));
const FAQs = React.lazy(() => import("../components/FAQs/FAQs"));




const loader = () => (
  <div class="flex items-center justify-center h-screen">
    <div class="relative">
      <div class="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
      <div class="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
      </div>
    </div>
  </div>
)

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => {
  const heroRef = useRef(null);
  const kbbRef = useRef(null);
  const [parentHeight, setParentHeight] = useState(0);
  const [kbbTop, setKbbTop] = useState(0);

  useEffect(() => {
    const updateLayout = () => {
      let heroHeight = heroRef.current ? heroRef.current.offsetHeight : 0;
      let kbbHeight = kbbRef.current ? kbbRef.current.offsetHeight : 0;

      let topOffset = heroHeight * 0.82;
      let variable = heroHeight - topOffset;
      setKbbTop(topOffset);

      let totalHeight = heroHeight + (kbbHeight - variable);
      setParentHeight(totalHeight);
    };

    updateLayout();

    const resizeObserver = new ResizeObserver(() => {
      updateLayout();
    });

    if (heroRef.current) {
      resizeObserver.observe(heroRef.current);
    }
    if (kbbRef.current) {
      resizeObserver.observe(kbbRef.current);
    }

    return () => {
      if (heroRef.current) {
        resizeObserver.unobserve(heroRef.current);
      }
      if (kbbRef.current) {
        resizeObserver.unobserve(kbbRef.current);
      }
    };
  }, []);

  return (
    <Layout>

      <div className="relative" style={{ height: `${parentHeight}px` }}>

        <div className="relative z-10" ref={heroRef}>
          <HeroComponent />
        </div>

        <div className="absolute" ref={kbbRef} style={{
          right: '0',
          width: '100%',
          top: `${kbbTop}px`,
          backgroundImage: `url(${bg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}>
          <Suspense fallback={loader}>
          <Kbb className="animate-fade-up animate-duration-1000 animate-delay-300"/>
          </Suspense>
        </div>

      </div>

      <Suspense fallback={loader}>
      <Howto />
      </Suspense>
      <div className="space-y-44">
      <Suspense fallback={loader}><InstaPosts /></Suspense>
      <Suspense fallback={loader}><SellersReviews /></Suspense>
      </div>
      <Suspense fallback={loader}><Services /></Suspense>
      <Suspense fallback={loader}><FAQs /></Suspense>
    </Layout>
  )
}


export const Head = () => <Seo title="Home" />

export default IndexPage