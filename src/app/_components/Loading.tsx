"use client";

import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="spinner">
        <style jsx>{`
          .spinner {
            position: relative;
            width: 15.7px;
            height: 15.7px;
          }

          .spinner div {
            animation: spinner-4t3wzl 1.875s infinite backwards;
            background-color: #25e521;
            border-radius: 50%;
            height: 100%;
            position: absolute;
            width: 100%;
          }

          .spinner div:nth-child(1) {
            animation-delay: 0.15s;
            background-color: rgba(37, 229, 33, 0.9);
          }

          .spinner div:nth-child(2) {
            animation-delay: 0.3s;
            background-color: rgba(37, 229, 33, 0.8);
          }

          .spinner div:nth-child(3) {
            animation-delay: 0.45s;
            background-color: rgba(37, 229, 33, 0.7);
          }

          .spinner div:nth-child(4) {
            animation-delay: 0.6s;
            background-color: rgba(37, 229, 33, 0.6);
          }

          .spinner div:nth-child(5) {
            animation-delay: 0.75s;
            background-color: rgba(37, 229, 33, 0.5);
          }

          @keyframes spinner-4t3wzl {
            0% {
              transform: rotate(0deg) translateY(-200%);
            }

            60%,
            100% {
              transform: rotate(360deg) translateY(-200%);
            }
          }
        `}</style>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
