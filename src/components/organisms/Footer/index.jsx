import React from "react";
import Social from "./Social";
import Info from "./Info";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <Social />
      <Info />
      <Copyright />
    </footer>
  );
}
