import React from "react";
import {  ClockLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="z-1 position-absolute top-0 bottom-0 w-100 d-flex justify-content-center align-content-center align-items-center">
      <ClockLoader size={190} speedMultiplier={3}  color="#00B853" />
    </div>
  );
}
