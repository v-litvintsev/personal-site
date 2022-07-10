import { FC } from 'react'
import {
  ISvgSizeInput,
  useSvgSizeAndPathScaleGetter,
} from '../../../services/hooks/useSvgSizeAndPathScaleGetter'
import svgStyles from '../Svg.module.scss'

const SVG_DATA: ISvgSizeInput = {
  svgSize: { width: 295, height: 178 },
  sizesInRelativeUnits: {
    mobile: 0,
    tablet: 0,
    desktop: 0.204167,
  },
}

export const NextJsLogoSvg: FC = () => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M69.46 46.318h55.521v4.413H74.549v33.213h47.424v4.413H74.549v36.465h51.01v4.412h-56.1V46.318Zm60.494 0h5.899l26.142 36.465 26.719-36.465L225.057 0l-59.708 86.615 30.768 42.619h-6.13l-27.992-38.787-28.108 38.787h-6.015l31-42.619-28.918-40.297Zm68.361 4.413v-4.413h63.271v4.413h-29.149v78.503h-5.089V50.731h-29.033ZM0 46.318h6.362l87.725 131.273-36.252-48.357L5.32 52.589l-.232 76.645H0V46.318ZM261.073 123.49c1.052 0 1.82-.806 1.82-1.847s-.768-1.847-1.82-1.847c-1.04 0-1.82.806-1.82 1.847s.78 1.847 1.82 1.847Zm5.001-4.859c0 3.074 2.216 5.082 5.447 5.082 3.441 0 5.521-2.07 5.521-5.665v-12.655h-2.773v12.643c0 1.996-1.003 3.062-2.773 3.062-1.584 0-2.661-.992-2.699-2.467h-2.723Zm14.595-.161c.198 3.198 2.859 5.243 6.82 5.243 4.234 0 6.883-2.144 6.883-5.565 0-2.69-1.51-4.177-5.174-5.033l-1.969-.483c-2.327-.545-3.268-1.277-3.268-2.553 0-1.612 1.461-2.665 3.652-2.665 2.08 0 3.516 1.028 3.776 2.677h2.698c-.161-3.012-2.81-5.132-6.437-5.132-3.899 0-6.499 2.12-6.499 5.305 0 2.628 1.473 4.19 4.704 4.946l2.303.558c2.364.558 3.404 1.376 3.404 2.739 0 1.587-1.634 2.739-3.862 2.739-2.389 0-4.048-1.078-4.283-2.776h-2.748Z"
        fill="var(--bg-text)"
        transform={`scale(${scaleRatio})`}
      />
    </svg>
  )
}
