import { lazy, Suspense } from "react";
const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <Home />
      </Suspense>
    </>
  );
};

export default App;
