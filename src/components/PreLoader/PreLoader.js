import React, { useEffect, useRef, useState } from "react";
import './pre-loader.css';
import 'animate.css';
import { CSSTransition } from "react-transition-group";

const PreLoader = () => {
  const [appearance, setAppearance] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (ref) {
      setAppearance(true);
    }
    const timeoutId = setTimeout(() => {
      setAppearance(false);
    }, 4000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <section ref={ref} className="loader">
        <div className="title">
          <CSSTransition
            in={appearance}
            timeout={1500}
            mountOnEnter
            unmountOnExit
            classNames='slider'
          >
            <h2 className="slider">Ur` Wallet</h2>
          </CSSTransition>
          <br></br>
          <CSSTransition
            in={appearance}
            timeout={1500}
            mountOnEnter
            unmountOnExit
            classNames='moto'
          >
            <h2 className="moto">Manage your money</h2>
          </CSSTransition>
        </div>
      </section> 
    </>
  )
};
  
export default PreLoader;