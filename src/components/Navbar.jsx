'use client';
import { useState } from 'react';
import { Dropdown, Navbar, TextInput } from 'flowbite-react';
import NavLogo from '../assets/logo-navbar.png';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IconContext } from 'react-icons';

const NavbarCustom = () => {
  const [toggle, setToggle] = useState(false);
  const customTextInput = {
    base: 'w-[500px]',
    field: {
      base: 'relative w-full',
      input: {
        base: 'bg-black w-full',
        colors: {
          gray: 'text-white placeholder-gray-400',
        },
      },
    },
  };
  return (
    <Navbar
      fluid={true}
      rounded={false}
      className="bg-black px-5 py-[5px]"
    >
      <Navbar.Brand className="container flex flex-wrap items-center justify-between mx-auto overflow-visible relative">
        <Link
          to="/"
          className="relative overflow-visible bg-transparent w-[85px] lg:w-[100px] h-8"
        >
          <img
            src={NavLogo}
            className="absolute top-0 left-0 z-10"
            alt="Logo"
            height="174px"
          />
        </Link>
        <div className="hidden lg:flex gap-5 items-center font-clashdisplay font-medium">
          <Link className="text-[#EDBF7D] p-5" to="/katalog">
            New Sales!
          </Link>
          <div className="text-white mr-2">
            <Dropdown inline label="Top Collection">
              {/* <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Dropdown.Header> */}
              <Dropdown.Item>Collection 1</Dropdown.Item>
              <Dropdown.Item>Collection 2</Dropdown.Item>
              <Dropdown.Item>Collection 3</Dropdown.Item>
              <Dropdown.Item>Collection 4</Dropdown.Item>
              <Dropdown.Item>Collection 5</Dropdown.Item>
            </Dropdown>
          </div>
          <div className="text-white">
            <Dropdown inline label="Category">
              {/* <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Dropdown.Header> */}
              <Dropdown.Item>Category 1</Dropdown.Item>
              <Dropdown.Item>Category 2</Dropdown.Item>
              <Dropdown.Item>Category 3</Dropdown.Item>
              <Dropdown.Item>Category 4</Dropdown.Item>
              <Dropdown.Item>Category 5</Dropdown.Item>
            </Dropdown>
          </div>
        </div>
        <TextInput
          theme={customTextInput}
          id="password1"
          type="text"
          placeholder="Search"
          className="hidden lg:block text-sm text-white border border-gray-300 rounded-lg"
        />
        <div className="flex md:order-2">
          {/* {theme === 'dark' ? (
                        <button
                            onClick={handleThemeSwitch}
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Light Mode
                        </button>
                    ) : (
                        <button
                            onClick={handleThemeSwitch}
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Dark Mode
                        </button>
                    )} */}
          <div className="lg:hidden flex align-middle justify-center p-1 text-white">
            <IconContext.Provider value={{ size: 30 }}>
              <GiHamburgerMenu onClick={(e) => setToggle(!toggle)} />
            </IconContext.Provider>
          </div>
        </div>
      </Navbar.Brand>
      {toggle ? (
        <div className="bg-black rounded-lg text-white w-full lg:hidden">
          <div className="flex flex-col justify-center items-start font-clashdisplay font-medium text-center pl-32">
            <Link className="text-[#EDBF7D] mb-5" to="/katalog">
              New Sales!
            </Link>
            <div className="text-white mb-5">
              <Dropdown inline label="Top Collection">
                {/* <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Dropdown.Header> */}
                <Dropdown.Item>Collection 1</Dropdown.Item>
                <Dropdown.Item>Collection 2</Dropdown.Item>
                <Dropdown.Item>Collection 3</Dropdown.Item>
                <Dropdown.Item>Collection 4</Dropdown.Item>
                <Dropdown.Item>Collection 5</Dropdown.Item>
              </Dropdown>
            </div>
            <div className="text-white mb-10">
              <Dropdown inline label="Category">
                {/* <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Dropdown.Header> */}
                <Dropdown.Item>Category 1</Dropdown.Item>
                <Dropdown.Item>Category 2</Dropdown.Item>
                <Dropdown.Item>Category 3</Dropdown.Item>
                <Dropdown.Item>Category 4</Dropdown.Item>
                <Dropdown.Item>Category 5</Dropdown.Item>
              </Dropdown>
            </div>
          </div>
        </div>
      ) : null}
    </Navbar>
  );
};

export default NavbarCustom;
