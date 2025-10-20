

import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar max-w-[1200px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="sm:text-[26px] font-bold cursor-pointer">
            CS — Ticket System
          </a>
        </div>

        <div className="navbar-end">
          <div className="gap-5 hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>

              <li>
                <a>Changelog</a>
              </li>

              <li>
                <a>Blog</a>
              </li>

              <li>
                <a>Download</a>
              </li>
            </ul>
          </div>
          <a className="bg-linear-65 from-[#632EE3] to-[#9F62F2] px-4 py-2 text-white rounded-sm cursor-pointer">
            + New Ticket
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar