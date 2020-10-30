import React from "react";
import { LockBody, ReleaseBody, Spinner, Picture } from "./styles/loading";

const Loading = ({ src, ...restProps }) => (
  <Spinner {...restProps}>
    <LockBody />
    <Picture src={`/images/users/${src}.png`} data-testid="loading-picture" />
  </Spinner>
);

Loading.ReleaseBody = () => <ReleaseBody />;

export default Loading;
