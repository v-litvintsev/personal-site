import { FC } from 'react'
import {
  ISvgSizeInput,
  useSvgSizeAndPathScaleGetter,
} from '../../../services/hooks/useSvgSizeAndPathScaleGetter'
import svgStyles from '../Svg.module.scss'

const SVG_DATA: ISvgSizeInput = {
  svgSize: { width: 16, height: 16 },
  sizesInRelativeUnits: {
    mobile: 0.040625,
    tablet: 0.0191847,
    desktop: 0,
  },
}

export const ProjectPreviewIcon: FC = () => {
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
        d="M14.7984 6.79995C15.4623 6.79995 16 7.33773 16 8.00165C16.0013 8.33229 15.8659 8.63239 15.6481 8.85015C15.4304 9.06792 15.1302 9.20217 14.7985 9.2019L9.20326 9.20336L9.20141 14.7981C9.20273 15.1314 9.06757 15.4313 8.85008 15.6488C8.6326 15.8663 8.33306 16.0012 7.99966 16C7.33579 16 6.79805 15.4622 6.79805 14.7983V9.20004L1.20161 9.20137C0.537737 9.20137 2.6382e-08 8.66359 0 7.99966C2.6382e-08 7.33574 0.537737 6.79795 1.20161 6.79795L6.80005 6.79995V1.20171C6.80005 0.537781 7.33778 -4.06316e-07 8.00165 0C8.66553 -2.95503e-07 9.20326 0.537781 9.20326 1.20171V6.79995H14.7984Z"
        fill="var(--primary)"
        transform={`scale(${scaleRatio})`}
      />
    </svg>
  )
}
