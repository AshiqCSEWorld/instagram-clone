import React, { useEffect, useState } from "react";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

export default importComponent => props => {
  const [loadedComponent, setComponent] = useState(null);

  // this works like componentwillMount
  if (!nprogress.isStarted()) nprogress.start();

  if (loadedComponent) nprogress.done();

  useEffect(() => {
    let mounted = true;

    mounted &&
      importComponent().then(
        ({ default: C }) => mounted && setComponent(<C {...props} />)
      );

    // componentUnMount
    return () => (mounted = false);
  }, []);

  // return the loaded component
  const Component = loadedComponent || <div style={{ flexGrow: 1 }}>..</div>;
  return Component;
};
