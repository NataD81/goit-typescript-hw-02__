import { TailSpin } from "react-loader-spinner";
import s from "./Loader.module.css";
import React from "react";

const Loader: React.FC = () => {
  return (
    <div className={s.loader}>
      <TailSpin color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default Loader;
