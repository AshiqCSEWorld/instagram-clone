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

    importComponent().then(
      ({ default: C }) => mounted && setComponent(<C {...props} />)
    );
    // when the component unmounts
    return () => {
      nprogress.done();
      mounted = false;
    };
  }, []);

  // return the loaded component
  const Component = loadedComponent || (
    <div style={{ flexGrow: 1 }}>..</div>
  );
  return Component;
};
