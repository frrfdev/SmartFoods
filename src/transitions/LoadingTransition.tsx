import React, { useEffect, useState } from "react";
import Router from "next/router";
import { Loading } from "../components/Loading/Loading";

const LoadingTransition = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // Used for page transition
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loading isLoading noBackshadow>
          <div className="h-full bg-white"></div>
        </Loading>
      ) : (
        children
      )}
    </>
  );
};
export default LoadingTransition;
