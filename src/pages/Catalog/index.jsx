import React, { useEffect } from "react";

export default function Catalog() {
  useEffect(() => {
    document.title = "NusaFood - Food Catalog";
  }, []);

  return (
    <main>
      <h1>Catalog</h1>
    </main>
  );
}
