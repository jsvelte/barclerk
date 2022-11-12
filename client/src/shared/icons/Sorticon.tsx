import React, { FC } from 'react'

type Props = {
  className?: string
}

const SortIcon: FC<Props> = (props): JSX.Element => {
  return (
    <svg
      className={props.className}
      viewBox="0 0 11 10"
      fill="current"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.67525 9.41551V0.856343L4.32986 2.36053C4.38381 2.40958 4.45351 2.43411 4.52544 2.43411C4.59738 2.43411 4.66708 2.40958 4.72103 2.36053C4.82894 2.26243 4.82894 2.10507 4.72103 2.00697L2.59657 0.0756358C2.49315 -0.018376 2.31106 -0.018376 2.20764 0.0756358L0.080932 2.00697C-0.0269773 2.10507 -0.0269773 2.26243 0.080932 2.36053C0.188841 2.45863 0.361946 2.45863 0.469855 2.36053L2.12446 0.856343V9.41551C2.12446 9.55448 2.24811 9.66689 2.40098 9.66689C2.5516 9.66484 2.67525 9.55244 2.67525 9.41551Z"
        fill="current"
      />
      <path
        d="M8.40334 9.59125C8.4573 9.6403 8.52699 9.66483 8.59893 9.66483C8.67087 9.66483 8.74056 9.6403 8.79451 9.59125L10.919 7.65992C11.0269 7.56182 11.0269 7.40446 10.919 7.30636C10.8111 7.20826 10.638 7.20826 10.5301 7.30636L8.87545 8.81055V0.25138C8.87545 0.112406 8.7518 0 8.59893 0C8.44606 0 8.32241 0.112406 8.32241 0.25138V8.81055L6.67005 7.30636C6.56214 7.20826 6.38904 7.20826 6.28113 7.30636C6.17322 7.40446 6.17322 7.56182 6.28113 7.65992L8.40334 9.59125Z"
        fill="current"
      />
    </svg>
  )
}

export default SortIcon