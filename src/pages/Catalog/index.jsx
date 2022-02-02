import React, { useEffect } from "react";
import CatalogList from "../../components/organisms/CatalogList";

export default function Catalog() {
  useEffect(() => {
    document.title = "NusaFood - Food Catalog";
  }, []);

  return (
    <main>
      <CatalogList />
    </main>
  );
}
