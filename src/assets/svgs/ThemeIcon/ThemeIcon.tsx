import { FC } from 'react'
import {
  ISvgSizeInput,
  useSvgSizeAndPathScaleGetter,
} from '../../../services/hooks/useSvgSizeAndPathScaleGetter'
import svgStyles from '../Svg.module.scss'

const SVG_DATA: ISvgSizeInput = {
  svgSize: { width: 32, height: 32 },
  sizesInRelativeUnits: {
    mobile: 0.078125,
    tablet: 0.0387,
    desktop: 0.0222,
  },
}

export const ThemeIcon: FC = () => {
  const { size, scaleRatio } = useSvgSizeAndPathScaleGetter(SVG_DATA)

  return (
    <svg
      width={size.width}
      height={size.height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={svgStyles.path}
        d="M1.5 16C1.5 7.99187 7.99187 1.5 16 1.5H16.8132C17.6433 1.5 18.4562 1.56961 19.2466 1.70307C16.3805 3.79206 14.5118 7.17711 14.5118 11C14.5118 17.3527 19.6693 22.5 26.0191 22.5C27.4659 22.5 28.8532 22.2322 30.132 21.7426C27.9071 26.896 22.7793 30.5 16.8132 30.5H16C7.99187 30.5 1.5 24.0081 1.5 16Z"
        stroke="var(--primary)"
        strokeWidth="3"
        transform={`scale(${scaleRatio})`}
      />
    </svg>
  )
}
