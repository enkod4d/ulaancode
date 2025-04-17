"use client";
import { useState, useEffect } from "react";

import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/home4/section1";
import Section10 from "@/components/sections/home4/section10";
import Section2 from "@/components/sections/home4/section2";
import Section3 from "@/components/sections/home4/section3";
import Section4 from "@/components/sections/home4/section4";
import Section5 from "@/components/sections/home4/section5";
import Section6 from "@/components/sections/home4/section6";
import Section7 from "@/components/sections/home4/section7";
import Section8 from "@/components/sections/home4/section8";
import Section9 from "@/components/sections/home4/section9";
import Preloader from "./loading";
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time of 1 or 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // 2000ms = 2 seconds

    // Cleanup the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // You can replace this with your custom loading indicator
    return Preloader();
  }
  return (
    <>
      <Layout headerStyle={4} footerStyle={4}>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
      </Layout>
    </>
  );
}
