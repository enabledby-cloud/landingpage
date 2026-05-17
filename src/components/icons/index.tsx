'use client';

import * as React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

export const ScaleIcon = ({
  width = 32,
  height = 32,
  ...props
}: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    {...props}
  >
    <defs>
      <linearGradient id="grad-scale" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ff5e84" />
        <stop offset="100%" stopColor="#3e8bff" />
      </linearGradient>
    </defs>
    <path
      d="M12 2L2 22H22L12 2Z"
      stroke="url(#grad-scale)"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

export const SimplifyIcon = ({
  width = 32,
  height = 32,
  ...props
}: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    {...props}
  >
    <defs>
      <linearGradient id="grad-simplify" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ff5e84" />
        <stop offset="100%" stopColor="#59f4b2" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" stroke="url(#grad-simplify)" strokeWidth="2" />
  </svg>
);

export const EnableIcon = ({
  width = 32,
  height = 32,
  ...props
}: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    {...props}
  >
    <defs>
      <linearGradient id="grad-enable" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ff5e84" />
        <stop offset="100%" stopColor="#ff8e26" />
      </linearGradient>
    </defs>
    <path
      d="M12 2L20 7V17L12 22L4 17V7L12 2Z"
      stroke="url(#grad-enable)"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

export const WebsiteLogo = ({ className }: { className?: string }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#F778BA" />
        <stop offset="50%" stopColor="#A093FF" />
        <stop offset="100%" stopColor="#58A6FF" />
      </linearGradient>
    </defs>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 28L4 4L12 14.6667L20 4V28L12 17.3333L4 28Z M22 4H28V11.2L24.4 14L28 16.8V28H22V20.8L25.6 18L22 15.2V4Z"
      fill="url(#logoGradient)"
    />
  </svg>
);


