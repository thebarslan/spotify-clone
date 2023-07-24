import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "@headlessui/react";
const MainTop = () => {
     const navigate = useNavigate();
     return (
          <div className="mainTop flex justify-between h-16 items-center">
               <div className="left flex gap-2">
                    <button onClick={() => navigate(-1)}>
                         <div className="backButton h-8 w-8 rounded-full bg-[#0000007e] flex items-center justify-center">
                              <svg
                                   role="img"
                                   height="16"
                                   width="16"
                                   aria-hidden="true"
                                   class="Svg-sc-ytk21e-0 leya-dW IYDlXmBmmUKHveMzIPCF"
                                   viewBox="0 0 16 16"
                                   data-encore-id="icon"
                              >
                                   <path
                                        fill="#FFFFFF86"
                                        d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"
                                   ></path>
                              </svg>
                         </div>
                    </button>
                    <button onClick={() => navigate(+1)}>
                         <div className="backButton h-8 w-8 rounded-full bg-[#0000007e] flex items-center justify-center">
                              <svg
                                   role="img"
                                   height="16"
                                   width="16"
                                   aria-hidden="true"
                                   class="Svg-sc-ytk21e-0 leya-dW IYDlXmBmmUKHveMzIPCF"
                                   viewBox="0 0 16 16"
                                   data-encore-id="icon"
                              >
                                   <path
                                        fill="#FFFFFF86"
                                        d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"
                                   ></path>
                              </svg>
                         </div>
                    </button>
               </div>
               <div className="right flex gap-2">
                    <button>
                         <div className="downloadAppButton flex bg-[#0000007e] gap-1 items-center py-[6px] px-3 rounded-full">
                              <svg
                                   role="img"
                                   height="16"
                                   width="16"
                                   aria-hidden="true"
                                   viewBox="0 0 16 16"
                                   data-encore-id="icon"
                                   class="Svg-sc-ytk21e-0 haNxPq"
                              >
                                   <path
                                        fill="white"
                                        d="M4.995 8.745a.75.75 0 0 1 1.06 0L7.25 9.939V4a.75.75 0 0 1 1.5 0v5.94l1.195-1.195a.75.75 0 1 1 1.06 1.06L8 12.811l-.528-.528a.945.945 0 0 1-.005-.005L4.995 9.805a.75.75 0 0 1 0-1.06z"
                                   ></path>
                                   <path
                                        fill="white"
                                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z"
                                   ></path>
                              </svg>
                              <h2 className="text-white text-[14px] font-bold">
                                   Uygulamayı Yükle
                              </h2>
                         </div>
                    </button>
                    <Menu as={"nav"} className="relative text-white text-sm">
                         <Menu.Button>
                              <div className="profileImg h-8 w-8 rounded-full flex items-center justify-center overflow-hidden bg-[#0000007e]">
                                   <img
                                        src="https://i.scdn.co/image/ab67757000003b82e4d2b9adcdde538d7579c184"
                                        alt=""
                                        srcset=""
                                        className="h-6 w-6 rounded-full"
                                   />
                              </div>
                         </Menu.Button>
                         <Menu.Items className="absolute top-[120%] right-0 bg-[#282828] rounded w-48 flex flex-col p-1">
                              <Menu.Item className="cursor-pointer">
                                   {({ active }) => (
                                        <div
                                             className={`${
                                                  active && "bg-[#706e6e60]"
                                             } flex justify-between relative`}
                                        >
                                             <a
                                                  href="/account"
                                                  className="p-3 flex-1"
                                             >
                                                  Hesap
                                             </a>
                                             <div className="icon absolute top-3 right-3">
                                                  <svg
                                                       className="absolute top-3 right-3"
                                                       role="img"
                                                       height="16"
                                                       width="16"
                                                       aria-hidden="true"
                                                       aria-label="Harici bağlantı"
                                                       viewBox="0 0 16 16"
                                                       data-encore-id="icon"
                                                       class="Svg-sc-ytk21e-0 haNxPq"
                                                  >
                                                       <path
                                                            fill="white"
                                                            d="M1 2.75A.75.75 0 0 1 1.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V2.75z"
                                                       ></path>
                                                       <path
                                                            fill="white"
                                                            d="M15 1v4.993a.75.75 0 1 1-1.5 0V3.56L8.78 8.28a.75.75 0 0 1-1.06-1.06l4.72-4.72h-2.433a.75.75 0 0 1 0-1.5H15z"
                                                       ></path>
                                                  </svg>
                                             </div>
                                        </div>
                                   )}
                              </Menu.Item>
                              <Menu.Item className="cursor-pointer">
                                   {({ active }) => (
                                        <a
                                             className={`${
                                                  active && "bg-[#706e6e60]"
                                             } p-3 `}
                                             href="/profile"
                                        >
                                             Profil
                                        </a>
                                   )}
                              </Menu.Item>
                              <Menu.Item className="cursor-pointer">
                                   {({ active }) => (
                                        <a
                                             className={`${
                                                  active && "bg-[#706e6e60]"
                                             } p-3 `}
                                             href="/settings"
                                        >
                                             Ayarlar
                                        </a>
                                   )}
                              </Menu.Item>
                              <div className="wrapper h-px border-t-[#ffffff25] border-t px-4"></div>
                              <Menu.Item className="cursor-pointer">
                                   {({ active }) => (
                                        <a
                                             className={`${
                                                  active && "bg-[#706e6e60]"
                                             } p-3`}
                                             href="/signout"
                                        >
                                             Oturumu kapat
                                        </a>
                                   )}
                              </Menu.Item>
                         </Menu.Items>
                    </Menu>
               </div>
          </div>
     );
};

export default MainTop;
