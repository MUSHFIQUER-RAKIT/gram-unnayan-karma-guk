"use client";
import { useState } from "react";
import Figure from "../common/Figure";
import SectionHeader from "../common/SectionHeader";

export default function Gallery() {
  const [isPhoto, setIsPhoto] = useState(true);
  return (
    <section className="p-8 max-w-7xl mx-auto space-y-8">
      <SectionHeader text="Gallery" high="Highlight" />
      <div className="flex flex-col md:flex-row">
        <div className="w-full">
          <div className="relative right-0">
            <div className="w-full">
              <div className="relative right-0">
                <ul className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-md bg-slate-100">
                  <li className="z-30 flex-auto text-center">
                    <a
                      onClick={() => setIsPhoto(true)}
                      className={`z-30 ${
                        isPhoto ? "bg-white" : ""
                      } flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 `}
                    >
                      <span className="ml-1">Photo</span>
                    </a>
                  </li>
                  <li className="z-30 flex-auto text-center">
                    <a
                      onClick={() => setIsPhoto(false)}
                      className={`z-30  ${
                        !isPhoto ? "bg-white" : ""
                      }  flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700`}
                    >
                      <span className="ml-1">Video</span>
                    </a>
                  </li>
                  <li className="z-30 flex-auto text-center">
                    <a className="z-30 text-primary-500 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-lg cursor-default  bg-inherit">
                      Highlight
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-5">
              {isPhoto ? (
                <div className=" block opacity-100">
                  <div
                    className="grid w-full grid-cols-3 gap-4 p-4 font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-max"
                    data-value="html"
                  >
                    <div>
                      <img
                        className="w-full h-40 max-w-full rounded-lg"
                        src="/gallery/378398705.jpg"
                        alt="image-photo"
                      />
                    </div>
                    <div>
                      <img
                        className="w-full h-40 max-w-full rounded-lg"
                        src="/gallery/394545910.jpg"
                        alt="image-photo"
                      />
                    </div>
                    <div>
                      <img
                        className="w-full h-40 max-w-full rounded-lg"
                        src="/gallery/4-1024x682.jpg"
                        alt="image-photo"
                      />
                    </div>
                    <div>
                      <img
                        className="w-full h-40 max-w-full rounded-lg"
                        src="/gallery/EC_Committe_of_GUK_1-1024x683.jpg"
                        alt="image-photo"
                      />
                    </div>
                    <div>
                      <img
                        className="w-full h-40 max-w-full rounded-lg"
                        src="/gallery/GC2-768x512-1.jpg"
                        alt="image-photo"
                      />
                    </div>
                    <div>
                      <img
                        className="w-full h-40 max-w-full rounded-lg"
                        src="/gallery/GC3-768x512-1.jpg"
                        alt="image-photo"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className=" block opacity-100">
                  <div
                    role="tabpanel"
                    className="grid w-full grid-cols-3 gap-4 p-4 font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-max"
                    data-value="html"
                  >
                    <div>
                      <img
                        className="w-full h-40 max-w-full rounded-lg"
                        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2762&amp;q=80"
                        alt="image-photo"
                      />
                    </div>
                    <div>
                      <img
                        className="w-full h-40 max-w-full rounded-lg"
                        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2762&amp;q=80"
                        alt="image-photo"
                      />
                    </div>
                    <div>
                      <img
                        className="w-full h-40 max-w-full rounded-lg"
                        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2762&amp;q=80"
                        alt="image-photo"
                      />
                    </div>
                    <div>
                      <img
                        className="w-full h-40 max-w-full rounded-lg"
                        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2762&amp;q=80"
                        alt="image-photo"
                      />
                    </div>
                    <div>
                      <img
                        className="w-full h-40 max-w-full rounded-lg"
                        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2762&amp;q=80"
                        alt="image-photo"
                      />
                    </div>
                    <div>
                      <img
                        className="w-full h-40 max-w-full rounded-lg"
                        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2762&amp;q=80"
                        alt="image-photo"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className=" self-center text-center">
          <Figure />
        </div>
      </div>
    </section>
  );
}
