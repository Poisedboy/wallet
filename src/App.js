import React, { useEffect, useState, useRef} from 'react';
import './app.css';
import PreLoader from './components/PreLoader/PreLoader';
import Root from './routes/root';

function App() {
  const [loader, setLoader] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (ref) {
      setLoader(true);
    }
    setTimeout(() => setLoader(false), 6000);
  }, []);

  return (
    <div ref={ref}>
      {loader ? <PreLoader /> : <Root />}
    </div>
  );
};

export default App;
