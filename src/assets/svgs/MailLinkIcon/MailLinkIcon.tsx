import { FC } from 'react'
import {
  ISvgSizeInput,
  useSvgSizeAndPathScaleGetter,
} from '../../../services/hooks/useSvgSizeAndPathScaleGetter'
import svgStyles from '../Svg.module.scss'

const SVG_DATA: ISvgSizeInput = {
  svgSize: { width: 12, height: 10 },
  sizesInRelativeUnits: {
    mobile: 0.0375,
    tablet: 0.018,
    desktop: 0.0111,
  },
}

export const MailLinkIcon: FC = () => {
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
        d="M11.8049 4.33501L7.68011 7.7081C7.31966 8.00501 6.74992 7.76492 6.74992 7.30271V5.35966C3.1147 5.40878 1.54821 6.26823 2.61082 9.50515C2.72873 9.86434 2.2731 10.1427 1.95319 9.92082C0.927848 9.21048 0 7.85321 0 6.48031C0 3.08266 2.9858 2.36384 6.74969 2.32143V0.535988C6.74969 0.0745598 7.31872 -0.166311 7.67988 0.130592L11.8047 3.50368C12.0651 3.73674 12.0651 4.12071 11.8049 4.33501Z"
        fill="var(--primary)"
        transform={`scale(${scaleRatio})`}
      />
    </svg>
  )
}
