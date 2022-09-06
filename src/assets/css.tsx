import * as React from 'react';
import { SVGProps } from 'react';

const CSS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={90}
    height={100}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m89.088 0-8.033 89.99L44.946 100 8.937 90.004.913 0h88.175Z"
      fill="#264DE4"
    />
    <path d="m74.177 84.26 6.865-76.9H45v84.988l29.177-8.089Z" fill="#2965F1" />
    <path
      d="m19.308 40.74.99 11.039H45V40.74H19.308ZM45 18.398H17.32l1.004 11.038H45V18.398ZM45 80.893V69.408l-.048.013-12.294-3.32-.786-8.803H20.791l1.546 17.332 22.612 6.277.051-.014Z"
      fill="#EBEBEB"
    />
    <path
      d="m58.555 51.779-1.282 14.316-12.311 3.323v11.484l22.63-6.272.166-1.865 2.594-29.06.269-2.965 1.993-22.342H44.962v11.038h15.554L59.512 40.74h-14.55v11.038h13.593Z"
      fill="#fff"
    />
  </svg>
);

export default CSS;
