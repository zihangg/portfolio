import * as React from 'react';
import { SVGProps } from 'react';

const EC2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={84}
    height={100}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m14.42 79.1-9.678 2.208V18.624l9.679 2.212V79.1ZM26.497 82.8l-12.076 3.432V13.786l12.076 3.428V82.8ZM41.99 86.6l-15.492 5.67V7.747l15.492 5.667v73.187Zm41.422-7.312L41.99 100V0l41.422 20.711v58.578Z"
      fill="#F68536"
    />
    <path
      d="M33.732 4.13 41.989 0v100l-8.257-4.128V4.13Zm-13.627 6.812 6.392-3.196v84.508l-6.392-3.196V10.942ZM9.33 16.33l5.092-2.546v72.43l-5.092-2.547V16.33Zm-4.587 2.293L.589 20.7v58.601l4.153 2.075V18.624Z"
      fill="#9D5025"
    />
  </svg>
);

export default EC2;
