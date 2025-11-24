import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./component/Header";
import Gallery from "./component/Gallery";
import Pagination from "./component/Pagination";

function App() {
  const [data, setData] = useState([]);
  const [idx, setIdx] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${idx}&limit=12`
    );
    setData(response.data);
  };

  useEffect(
    function () {
      getData();
    },
    [idx]
  );

  return (
    <div className="min-h-screen w-full bg-[#101010] p-6 text-white md:p-10">
      <Header />
      <main className="mx-auto max-w-7xl">
        <Gallery data={data} />
      </main>
      <Pagination page={idx} setPage={setIdx} setImages={setData} />
    </div>
  );
}

export default App;
