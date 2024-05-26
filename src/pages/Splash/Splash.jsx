import "./Splash.css";

import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import { useNavigate } from "react-router-dom";

export default function Splash() {
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setRedirect(true), 5500);

    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    if (redirect) {
      navigate("/main");
    }
  }, [redirect, navigate]);

  return (
    <div className="logo_wrapper">
      <div className="screen">
        <Loader />
      </div>
    </div>
  );
}
