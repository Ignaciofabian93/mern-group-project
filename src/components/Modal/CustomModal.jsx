import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Textfield from "../Textfield/Textfield";
import { CancelButton, FormButton } from "../Buttons/Button";

const CustomModal = ({ isOpen, handleClose }) => {
  const [updatePass, setUpdatePass] = useState({
    password: "",
    password2: "",
  });

  const handlePasswords = (e) => {
    const { name, value } = e.target;
    setUpdatePass({
      ...updatePass,
      [name]: value,
    });
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all flex flex-col items-center">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-medium leading-6 text-black"
                  >
                    Ajustes
                  </Dialog.Title>
                  <div className="mt-6 ">
                    <div className="my-2 ">
                      <Textfield
                        onChange={handlePasswords}
                        name={"password"}
                        type={"password"}
                        placeholder={"Contraseña"}
                        value={updatePass.password}
                      />
                    </div>
                    <div className="my-2">
                      <Textfield
                        onChange={handlePasswords}
                        name={"password"}
                        type={"password"}
                        placeholder={"Confirmar Contraseña"}
                        value={updatePass.password2}
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex w-[360px] flex-col gap-2">
                    <FormButton text={"Guardar"} onClick={() => {}} />
                    <CancelButton text={"Cancelar"} onClick={handleClose} />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CustomModal;
