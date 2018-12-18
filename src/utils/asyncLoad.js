import React, { useEffect } from "react";
import Loadable from "react-loadable";
import nprogress from "nprogress";

export default (loader, Loading = () => <div>Loading...</div>) =>
  Loadable({
    loader,
    loading: () => {
      useEffect(() => {
        nprogress.start();
        return () => nprogress.done();
      }, []);

      return <Loading />;
    }
  });
