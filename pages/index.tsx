import type { NextPage } from "next";
import { useState } from "react";
import { Card } from "../components/Card";

const Home: NextPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const onClickSwitch = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <div>
      {isAdmin ? <span>管理者です。</span> : <span>管理者以外です。</span>}
      <button onClick={onClickSwitch}>切り替え</button>
      <Card isAdmin={isAdmin} />
    </div>
  );
};

export default Home;
