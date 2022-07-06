import { useState, useEffect } from "react";
import ScrollTopButton from "../components/ScrollTopButton";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

import styles from "../styles/Layout.module.css";

const AppLayout = () => {
  const [viewportHeight, setViewportHeight] = useState(0);

  const handleScroll = () => setViewportHeight(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {viewportHeight > 1200 && <ScrollTopButton />}

      <Header />
      <NavBar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
