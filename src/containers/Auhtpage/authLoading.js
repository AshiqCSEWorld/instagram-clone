import React from "react";
import ContentLoader from "react-content-loader";
import asyncLoad from "../../utils/asyncLoad";

export default loader => asyncLoad(loader, AuthLoading);

export function AuthLoading() {
  return (
    <ContentLoader
      style={{ height: 475, width: 350 }}
      height={475}
      width={350}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <rect x="2.52" y="-2" rx="5" ry="5" width="350" height="400" />
      <rect x="0" y="405" rx="0" ry="0" width="350" height="70" />
    </ContentLoader>
  );
}
