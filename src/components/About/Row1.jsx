import Link from "@docusaurus/Link";
import React from "react";
import OpenImage from "./open.svg";

function Row1() {
  return (
    <div className="container">
      <div className="row about-row-1">
        <div className="col-9 col-xl-8">
          <div className="about-bg-shape">
            {" "}
            <svg
              class=""
              viewBox="0 0 182 182"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.74638 53.1487C16.7421 26.3041 48.7298 -13.9626 129.326 4.8307C142.678 9.51595 157.495 17.0866 164.813 30.4671C184.132 65.7879 193.093 127.155 159.342 156.174C118.364 191.406 41.4083 194.507 11.9191 140.813C-2.37716 114.783 -4.27658 79.8606 8.74638 53.1487Z"></path>
            </svg>
          </div>
          <div className="about-heading">
            <div className="about-section1-right">
              <div className="section-icon">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                  width="20"
                />
              </div>
              <h2 className="about-section1__title">
                Raise money for charity while learning awesome skills{" "}
              </h2>
              <p className="about-section1__meta">
                Open Mastery is revolutionizing fundraising
              </p>
              <p className="about-section1__desc">
                Traditional fundraising happens when good people donate money to
                a cause they are passionate about. We don't mean to disrupt this
                in any way - fundraising is a good thing.
              </p>
              <p>
                We're simply trying something different. Open Mastery is a
                learning platform focusing on text-based courses, and from
                non-intrusive advertising,{" "}
                <strong>
                  we donate <u>90%</u> of our proceeds to charity!
                </strong>{" "}
              </p>
              <p>
                Using Open Mastery is completely free, and will remain free
                forever. We will never push you to disable your adblocker (if
                you have one), but if you'd like to support our cause, we highly
                encourage whitelisting our website. Our non-intrusive
                advertising raise money for amazing causes!
              </p>
              <p>
                Best of all, we're completely open source. Anyone can view our
                code, and anyone can contribute. If you'd love to help us out,{" "}
                <a
                  href="https://github.com/chrisnmorrison/openeducation/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  find out how you can contribute
                </a>
                .{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Row1;
