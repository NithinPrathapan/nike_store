import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between gap-20 items-start flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/home">
            <img src={footerLogo} alt="logo" width={150} height={46} />
          </a>
          <p className="text-base font-montserrat text-white-400 mt-6 leading-7">
            Get shoes ready for the new term at your nearest Nike store. Find
            your perfect size in store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="flex justify-center">
                <img src={icon.src} alt="icon" width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white text-2xl leading-normal font-medium mb-6">{section.title}</h3>
              <ul>
                {section.links.map((item) => (
                  <li className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                    <a href="">{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
