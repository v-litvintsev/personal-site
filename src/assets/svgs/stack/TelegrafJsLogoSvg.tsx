import { FC } from 'react'
import {
  ISvgSizeInput,
  useSvgSizeAndPathScaleGetter,
} from '../../../services/hooks/useSvgSizeAndPathScaleGetter'
import svgStyles from '../Svg.module.scss'

const SVG_DATA: ISvgSizeInput = {
  svgSize: { width: 202, height: 234 },
  sizesInRelativeUnits: {
    mobile: 0,
    tablet: 0,
    desktop: 0.134722,
  },
}

export const TelegrafJsLogoSvg: FC = () => {
  const { size, scaleRatio } = useSvgSizeAndPathScaleGetter(SVG_DATA)

  return (
    <svg
      width={size.width}
      height={size.height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform={`scale(${scaleRatio})`}
    >
      <g opacity="0.3">
        <path
          d="M101 116.771L52.603 88.8286L101 60.8857L149.397 88.8286L101 116.771Z"
          fill="white"
          stroke="#606060"
          strokeWidth="5"
        />
        <path
          d="M101 116.772L100.999 172.656L52.6016 144.715L52.6023 88.8302L101 116.772Z"
          fill="#C6C6C6"
          stroke="#606060"
          strokeWidth="5"
        />
        <path
          d="M101 116.771L149.398 88.8298L149.398 144.714L101.001 172.656L101 116.771Z"
          fill="#919191"
          stroke="#606060"
          strokeWidth="5"
        />
        <path
          d="M101 5L197.794 60.8857V172.657L101 228.543L4.20599 172.657V60.8857L101 5Z"
          stroke="#111111"
          strokeWidth="8"
        />
        <path
          d="M4.20599 60.8857L101 116.771"
          stroke="#111111"
          strokeWidth="8"
        />
        <path
          d="M197.794 60.8857L101 116.771"
          stroke="#111111"
          strokeWidth="8"
        />
        <path d="M101 228.543V116.771" stroke="#111111" strokeWidth="8" />
      </g>
    </svg>
  )
}
