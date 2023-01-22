"use client";

import {
  ChartPieIcon,
  HomeModernIcon,
  CogIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

type pagelink = "/" | "/statistics" | "/settings" | "/profile";

const Paginator = () => {
  const [page, setPage] = useState<pagelink>("/");
  const [active, setActive] = useState<pagelink | "">("");

  return (
    <div className="flex items-center justify-center container">
      <Link
        href="/"
        onClick={() => setPage("/")}
        className={`${
          active === "/" || (page === "/" && active === "" && "page_icon_bg")
            ? "page_icon_bg"
            : ""
        } p-2`}
        onMouseEnter={() => setActive("/")}
        onMouseLeave={() => setActive("")}
      >
        <HomeModernIcon
          className={`page_icon ${
            active === "/" || (page === "/" && active === "" && "page_icon_bg")
          }`}
        />
      </Link>
      <Link
        href="/statistics"
        onClick={() => setPage("/statistics")}
        className={`${
          active === "/statistics" ||
          (page === "/statistics" && active === "" && "page_icon_bg")
            ? "page_icon_bg"
            : ""
        } p-2`}
        onMouseEnter={() => setActive("/statistics")}
        onMouseLeave={() => setActive("")}
      >
        <ChartPieIcon className="page_icon" />
      </Link>
      <Link
        href="/settings"
        onClick={() => setPage("/settings")}
        className={`${
          active === "/settings" ||
          (page === "/settings" && active === "" && "page_icon_bg")
            ? "page_icon_bg"
            : ""
        } p-2`}
        onMouseEnter={() => setActive("/settings")}
        onMouseLeave={() => setActive("")}
      >
        <CogIcon className="page_icon" />
      </Link>
      <Link
        href="/profile"
        onClick={() => setPage("/profile")}
        className={`${
          active === "/profile" ||
          (page === "/profile" && active === "" && "page_icon_bg")
            ? "page_icon_bg"
            : ""
        } p-2`}
        onMouseEnter={() => setActive("/profile")}
        onMouseLeave={() => setActive("")}
      >
        <UserIcon className="page_icon" />
      </Link>
    </div>
  );
};

export default Paginator;
