import React, { useEffect, useRef, useState, Suspense, lazy } from 'react';

import Layout from "../components/layout"
import Seo from "../components/seo"
import Loader from '../components/Shared/Loader';
import bg from '../images/bg-kbb.webp'


// import HeroComponent from "../components/Hero/HeroComponent"
const HeroComponent = lazy(() => import("../components/Hero/HeroComponent"));
// const bg = lazy(() => import("../images/bg-kbb.webp"));



const Kbb = lazy(() => import("../components/KBB/Kbb.js"));
const Howto = lazy(() => import("../components/Howto/Howto.js"));
const InstaPosts = lazy(() => import("../components/InstaPosts/InstaPosts.js"));
const Services = lazy(() => import("../components/Services/Services.js"));
const FAQs = lazy(() => import("../components/FAQs/FAQs.js"));

// const SellersReviews = lazy(() => import("../components/SellersReviews/SellersReviews"));


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

    const currentHero = heroRef.current;
    const currentKbb = kbbRef.current;

    if (currentHero) {
      resizeObserver.observe(currentHero);
    }
    if (currentKbb) {
      resizeObserver.observe(currentKbb);
    }

    return () => {
      if (currentHero) {
        resizeObserver.unobserve(currentHero);
      }
      if (currentKbb) {
        resizeObserver.unobserve(currentKbb);
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
          <Suspense fallback={<Loader/>}>
          <Kbb />
          </Suspense>
        </div>

      </div>

      <Suspense fallback={<Loader/>}>
      <Howto />
      </Suspense>
      <div className="space-y-44">
      <Suspense fallback={<Loader/>}><InstaPosts /></Suspense>
      {/* <Suspense fallback={<Loader/>}><SellersReviews /></Suspense> */}
      </div>
      <Suspense fallback={<Loader/>}><Services /></Suspense>
      <Suspense fallback={<Loader/>}><FAQs /></Suspense>
    </Layout>
  )
}


export const Head = () => <Seo title="Home" />

export default IndexPage