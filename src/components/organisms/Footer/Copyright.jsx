import React from "react";

export default function Copyright() {
  return (
    <div
      className="text-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
    >
      Copyright &copy; {new Date().getFullYear()} NusaFood - Developed with{" "}
      <span className="text-danger">🖤</span> by{" "}
      <a
        href="https://github.com/andry-pebrianto"
        target="_blank"
        rel="noReferrer"
        className="text-reset"
      >
        Andry Pebrianto
      </a>{" "}
      in Trenggalek
    </div>
  );
}
