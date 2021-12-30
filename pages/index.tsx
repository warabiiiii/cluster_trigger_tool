import { css } from "@emotion/css";
import type { NextPage } from "next";

const title = css`
  margin-bottom: 16px;
`;
const body = css`
  padding: 16px;
`;

const Home: NextPage = () => {
  return (
    <div>
      <h1 className={title}>Home</h1>
      <div className={body}>body</div>
    </div>
  );
};

export default Home;
