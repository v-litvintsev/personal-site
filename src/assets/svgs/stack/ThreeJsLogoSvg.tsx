import { FC } from 'react'
import {
  ISvgSizeInput,
  useSvgSizeAndPathScaleGetter,
} from '../../../services/hooks/useSvgSizeAndPathScaleGetter'
import svgStyles from '../Svg.module.scss'

const SVG_DATA: ISvgSizeInput = {
  svgSize: { width: 177, height: 179 },
  sizesInRelativeUnits: {
    mobile: 0,
    tablet: 0,
    desktop: 0.1229,
  },
}

export const ThreeJsLogoSvg: FC = () => {
  const { size, scaleRatio } = useSvgSizeAndPathScaleGetter(SVG_DATA)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size.width}
      height={size.height}
      fill="none"
    >
      <g transform={`scale(${scaleRatio})`}>
        <path
          stroke="var(--bg-text)"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M45.213 176.94 2 2l173.23 49.874L45.213 176.94Z"
          clipRule="evenodd"
          className={svgStyles.path}
        />
        <path
          stroke="var(--bg-text)"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="m88.583 26.942 21.591 87.496-86.567-24.945 64.976-62.551Z"
          clipRule="evenodd"
          className={svgStyles.path}
        />
        <path
          stroke="var(--bg-text)"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M67.103 101.36 56.379 57.895l43.008 12.346-32.284 31.119ZM45.651 14.483l10.724 43.465-43.008-12.346 32.284-31.119ZM131.663 39.26l10.724 43.465-43.008-12.346 32.284-31.119ZM67.108 101.39l10.724 43.465-43.008-12.346 32.284-31.119Z"
          clipRule="evenodd"
          className={svgStyles.path}
        />
      </g>
    </svg>
  )
}
