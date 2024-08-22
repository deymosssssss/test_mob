import "primereact/resources/themes/lara-light-cyan/theme.css";
import { useEffect, useState } from "react";
import CardList from "./main/CardList/CardList";
import LoadingPage from "./main/LoadingPage/LoadingPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      {loading && <LoadingPage />}
      {!loading && <CardList />}
    </>
  );
}

export default App;
