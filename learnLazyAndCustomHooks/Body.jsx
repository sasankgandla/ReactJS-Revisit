import Header from "./Header";
import { lazy, Suspense, useState } from "react";
const Middle = lazy(() => import("./Middle"));

export default function Body() {
  const [load, setLoad] = useState(false);
  return (
    <>
      <Header />
      <button onClick={() => setLoad(!load)}>Load</button> <br />
      {load ? (
        <Suspense fallback="Loading the component">
          <Middle />
        </Suspense>
      ) : null}
    </>
  );
}
