import React from 'react'
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import Modal from "../Modal/Modal";
import { Settings } from '../Icons/Settings';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [isModalOpen, setIsModalOpen] = useState(false);


  // metodo para mostrar el modal desde el dropdown
  const showModal = () => {
    setIsModalOpen(true);
  };
  
  console.log(isModalOpen);

  return (
    <>
      {isModalOpen && <Modal onClose={showModal} />}

      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="">
            <Settings/>
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={showModal}
                    // href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Configuración de cuenta
                  </a>
                )}
              </Menu.Item>

              <form method="POST" action="/">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="submit"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full px-4 py-2 text-left text-sm"
                      )}
                    >
                     Cerrar sesión
                    </button>
                  )}
                </Menu.Item>
              </form>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}