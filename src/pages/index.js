import React, { useEffect, useRef, useState } from 'react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Kbb from "../components/KBB/Kbb"
import Howto from "../components/Howto/Howto"
import InstaPosts from "../components/InstaPosts/InstaPosts"
import SellersReviews from "../components/SellersReviews/SellersReviews"
import Services from "../components/Services/Services"
import FAQs from "../components/FAQs/FAQs"
import HeroComponent from "../components/Hero/HeroComponent"
import bg from '../images/bg-kbb.png'

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
          <Kbb />
        </div>

      </div>

      <Howto />
      <div className="space-y-44">
        <InstaPosts />
        <SellersReviews />
      </div>
      <Services />
      <FAQs />
    </Layout>
  )
}


export const Head = () => <Seo title="Home" />

export default IndexPage