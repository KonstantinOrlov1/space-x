import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Main } from "./pages/Main/Main";

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Main />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
