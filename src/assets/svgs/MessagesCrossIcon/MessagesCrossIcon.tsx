import { FC } from 'react'
import {
  ISvgSizeInput,
  useSvgSizeAndPathScaleGetter,
} from '../../../services/hooks/useSvgSizeAndPathScaleGetter'
import svgStyles from '../Svg.module.scss'

const SVG_DATA: ISvgSizeInput = {
  svgSize: { width: 11, height: 11 },
  sizesInRelativeUnits: {
    mobile: 0.034375,
    tablet: 0.01559,
    desktop: 0.0069,
  },
}

export const MessagesCrossIcon: FC = () => {
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
        d="M10.676 9.12327C11.1057 9.55293 11.1057 10.249 10.676 10.6786C10.4629 10.8934 10.1811 11 9.89923 11C9.61737 11 9.33621 10.8926 9.12173 10.6778L5.49957 7.05749L1.87776 10.6769C1.66293 10.8934 1.38142 11 1.09991 11C0.818405 11 0.537239 10.8934 0.32224 10.6769C-0.107413 10.2472 -0.107413 9.55121 0.32224 9.12155L3.94508 5.49871L0.32224 1.87759C-0.107413 1.44793 -0.107413 0.751894 0.32224 0.32224C0.751894 -0.107413 1.44793 -0.107413 1.87759 0.32224L5.49957 3.9468L9.12241 0.323959C9.55207 -0.105695 10.2481 -0.105695 10.6778 0.323959C11.1074 0.753613 11.1074 1.44965 10.6778 1.87931L7.05492 5.50215L10.676 9.12327Z"
        fill="var(--primary)"
        transform={`scale(${scaleRatio})`}
      />
    </svg>
  )
}
