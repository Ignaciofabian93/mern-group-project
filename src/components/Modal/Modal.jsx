import React from "react";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import useMessage from "../../hooks/useMessage";
import Textfield from "../Textfield/Textfield";
import { ButtonModal } from "../Buttons/ButtonModal";

export default function Example() {
  const [open, setOpen] = useState(true);
  const { user } = useMessage();
  const cancelButtonRef = useRef(null);
  console.log(open);

  // file input
  const fileInputRef = useRef(null);
  const handleFileButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (e) => {
    // Aquí puedes manejar la lógica cuando se selecciona un archivo
    const selectedFile = e.target.files[0];
    console.log("Selected File:", selectedFile);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="cursor-pointer" onClick={() => setOpen(false)}>
              
            </div>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 flex items-center justify-center">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0">
                      <Dialog.Title
                        as="h3"
                        className="font-semibold leading-6 text-3xl text-gray-900 pt-5 pb-10"
                      >
                        Modificar cuenta
                      </Dialog.Title>

                      <div className="gap-5 flex flex-col items-center justify-center text-left">
                        <div className="flex gap-2 ">
                          <div>
                            <input
                              type="file"
                              className="input-field"
                              hidden
                              onChange={handleFileInputChange}
                              ref={fileInputRef}
                            />
                            <div
                              className="flex flex-col items-center"
                              type="button"
                              onClick={handleFileButtonClick}
                            >
                              <img
                                className="h-15 w-15 rounded-full opacity-80"
                                src={user.photo}
                                alt="photo"
                              />
                              <p className=" text-gray-500 text-sm">
                                Cambiar foto de perfil
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col gap-2">
                          <Textfield placeholder={"Nombre"} />
                          <Textfield placeholder={"Contraseña"} />
                          <Textfield placeholder={"Confirmar Contraseña"} />
                          <div className="py-3 ">
                            <ButtonModal
                              type={"button"}
                              onClick={() => setOpen(false)}
                              text={"Actualizar"}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
