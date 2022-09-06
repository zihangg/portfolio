import * as React from 'react';
import { SVGProps } from 'react';

const Solidity = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={100}
    height={96}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 523.9 813"
    {...props}
  >
    <style>
      {
        '.st0,.st1,.st2{opacity:.45;enable-background:new}.st1,.st2{opacity:.6}.st2{opacity:.8}'
      }
    </style>
    <path className="st0" d="M391.9 0 261.2 232.3H0L130.6 0h261.3" />
    <path className="st1" d="M261.2 232.3h261.3L391.9 0H130.6l130.6 232.3z" />
    <path
      className="st2"
      d="m130.6 464.5 130.6-232.2L130.6 0 0 232.3l130.6 232.2z"
    />
    <path className="st0" d="m131.9 813 130.7-232.3h261.3L393.2 813H131.9" />
    <path className="st1" d="M262.6 580.7H1.3L131.9 813h261.3L262.6 580.7z" />
    <path
      className="st2"
      d="M393.2 348.5 262.6 580.7 393.2 813l130.7-232.3-130.7-232.2z"
    />
  </svg>
);

export default Solidity;
