import { FC } from 'react'
import {
  ISvgSizeInput,
  useSvgSizeAndPathScaleGetter,
} from '../../../services/hooks/useSvgSizeAndPathScaleGetter'
import styles from './BgText.module.scss'
import svgStyles from '../Svg.module.scss'

const SVG_DATA: ISvgSizeInput = {
  svgSize: { width: 2892, height: 134 },
  sizesInRelativeUnits: { mobile: 3.0125, tablet: 3.4676259, desktop: 2.36597222 },
}

export const AboutBgTextSvg: FC = () => {
  const { size, scaleRatio } = useSvgSizeAndPathScaleGetter(SVG_DATA)

  return (
    <div className={styles.wrapper}>
      <svg
        width={size.width}
        height={size.height}
        viewBox={`0 0 ${size.width} ${size.height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          transform={`scale(${scaleRatio})`}
          className={svgStyles.path}
          d="M108.954 102.993H50.2812L33.9032 129.926H2.76709L84.297 4.23567H113.093L144.05 129.926H114.893L108.954 102.993ZM104.094 80.907L93.4758 32.4263L63.7795 80.907H104.094ZM262.947 65.1058C268.347 67.2605 272.486 70.4926 275.366 74.802C278.365 78.9917 279.865 84.139 279.865 90.244C279.865 103.292 274.706 113.168 264.387 119.871C254.068 126.575 240.33 129.926 223.172 129.926H157.12L182.317 4.23567H243.15C256.708 4.23567 267.147 6.74949 274.466 11.7771C281.785 16.685 285.444 23.7476 285.444 32.965C285.444 40.6261 283.405 47.2099 279.325 52.7163C275.366 58.1031 269.906 62.2329 262.947 65.1058ZM206.794 26.1418L200.855 55.7688H230.551C238.23 55.7688 244.17 54.2725 248.369 51.2799C252.689 48.1675 254.848 43.7384 254.848 37.9926C254.848 30.092 248.669 26.1418 236.311 26.1418H206.794ZM224.972 108.02C233.131 108.02 239.49 106.464 244.05 103.352C248.609 100.239 250.889 95.7504 250.889 89.8848C250.889 81.2661 244.59 76.9567 231.991 76.9567H196.715L190.596 108.02H224.972ZM360.072 132.081C347.473 132.081 336.555 129.807 327.316 125.258C318.077 120.709 310.998 114.305 306.079 106.045C301.159 97.7854 298.7 88.2688 298.7 77.4953C298.7 63.2504 301.939 50.4419 308.418 39.0699C315.018 27.5782 324.196 18.5405 335.955 11.9567C347.833 5.37288 361.392 2.08098 376.63 2.08098C389.228 2.08098 400.147 4.35538 409.386 8.90419C418.625 13.453 425.704 19.8572 430.623 28.1169C435.543 36.3766 438.002 45.8931 438.002 56.6666C438.002 70.9116 434.703 83.7799 428.103 95.2716C421.624 106.644 412.445 115.621 400.567 122.205C388.808 128.789 375.31 132.081 360.072 132.081ZM362.592 107.302C371.83 107.302 379.929 105.087 386.889 100.658C393.848 96.2292 399.187 90.3038 402.907 82.8821C406.626 75.4604 408.486 67.2605 408.486 58.2826C408.486 48.7062 405.486 41.1049 399.487 35.4788C393.488 29.7329 385.029 26.86 374.11 26.86C364.871 26.86 356.772 29.0745 349.813 33.5036C342.854 37.9327 337.515 43.8581 333.795 51.2799C330.076 58.7016 328.216 66.9014 328.216 75.8793C328.216 85.4557 331.215 93.1169 337.215 98.8627C343.214 104.489 351.673 107.302 362.592 107.302ZM505.989 132.081C490.151 132.081 477.732 128.191 468.733 120.41C459.734 112.509 455.235 101.736 455.235 88.0893C455.235 84.139 455.715 79.65 456.675 74.6224L470.713 4.23567H500.049L486.011 74.0837C485.291 78.034 484.931 81.5653 484.931 84.6777C484.931 92.2191 486.971 97.9051 491.051 101.736C495.25 105.447 501.309 107.302 509.228 107.302C518.107 107.302 525.186 104.668 530.466 99.4014C535.745 94.1344 539.585 85.6952 541.984 74.0837L556.023 4.23567H584.639L570.421 75.8793C562.742 113.347 541.264 132.081 505.989 132.081ZM632.759 27.9373H592.444L597.304 4.23567H707.09L702.23 27.9373H662.095L641.578 129.926H612.422L632.759 27.9373ZM838.18 102.993H779.507L763.129 129.926H731.993L813.523 4.23567H842.319L873.275 129.926H844.119L838.18 102.993ZM833.32 80.907L822.702 32.4263L793.005 80.907H833.32ZM992.173 65.1058C997.572 67.2605 1001.71 70.4926 1004.59 74.802C1007.59 78.9917 1009.09 84.139 1009.09 90.244C1009.09 103.292 1003.93 113.168 993.613 119.871C983.294 126.575 969.556 129.926 952.398 129.926H886.346L911.543 4.23567H972.375C985.934 4.23567 996.372 6.74949 1003.69 11.7771C1011.01 16.685 1014.67 23.7476 1014.67 32.965C1014.67 40.6261 1012.63 47.2099 1008.55 52.7163C1004.59 58.1031 999.132 62.2329 992.173 65.1058ZM936.02 26.1418L930.081 55.7688H959.777C967.456 55.7688 973.395 54.2725 977.595 51.2799C981.914 48.1675 984.074 43.7384 984.074 37.9926C984.074 30.092 977.895 26.1418 965.536 26.1418H936.02ZM954.198 108.02C962.357 108.02 968.716 106.464 973.275 103.352C977.835 100.239 980.115 95.7504 980.115 89.8848C980.115 81.2661 973.815 76.9567 961.217 76.9567H925.941L919.822 108.02H954.198ZM1089.3 132.081C1076.7 132.081 1065.78 129.807 1056.54 125.258C1047.3 120.709 1040.22 114.305 1035.3 106.045C1030.39 97.7854 1027.93 88.2688 1027.93 77.4953C1027.93 63.2504 1031.16 50.4419 1037.64 39.0699C1044.24 27.5782 1053.42 18.5405 1065.18 11.9567C1077.06 5.37288 1090.62 2.08098 1105.86 2.08098C1118.45 2.08098 1129.37 4.35538 1138.61 8.90419C1147.85 13.453 1154.93 19.8572 1159.85 28.1169C1164.77 36.3766 1167.23 45.8931 1167.23 56.6666C1167.23 70.9116 1163.93 83.7799 1157.33 95.2716C1150.85 106.644 1141.67 115.621 1129.79 122.205C1118.03 128.789 1104.54 132.081 1089.3 132.081ZM1091.82 107.302C1101.06 107.302 1109.16 105.087 1116.11 100.658C1123.07 96.2292 1128.41 90.3038 1132.13 82.8821C1135.85 75.4604 1137.71 67.2605 1137.71 58.2826C1137.71 48.7062 1134.71 41.1049 1128.71 35.4788C1122.71 29.7329 1114.25 26.86 1103.34 26.86C1094.1 26.86 1086 29.0745 1079.04 33.5036C1072.08 37.9327 1066.74 43.8581 1063.02 51.2799C1059.3 58.7016 1057.44 66.9014 1057.44 75.8793C1057.44 85.4557 1060.44 93.1169 1066.44 98.8627C1072.44 104.489 1080.9 107.302 1091.82 107.302ZM1235.21 132.081C1219.38 132.081 1206.96 128.191 1197.96 120.41C1188.96 112.509 1184.46 101.736 1184.46 88.0893C1184.46 84.139 1184.94 79.65 1185.9 74.6224L1199.94 4.23567H1229.28L1215.24 74.0837C1214.52 78.034 1214.16 81.5653 1214.16 84.6777C1214.16 92.2191 1216.2 97.9051 1220.28 101.736C1224.48 105.447 1230.54 107.302 1238.45 107.302C1247.33 107.302 1254.41 104.668 1259.69 99.4014C1264.97 94.1344 1268.81 85.6952 1271.21 74.0837L1285.25 4.23567H1313.86L1299.65 75.8793C1291.97 113.347 1270.49 132.081 1235.21 132.081ZM1361.98 27.9373H1321.67L1326.53 4.23567H1436.32L1431.46 27.9373H1391.32L1370.8 129.926H1341.65L1361.98 27.9373ZM1567.41 102.993H1508.73L1492.35 129.926H1461.22L1542.75 4.23567H1571.54L1602.5 129.926H1573.34L1567.41 102.993ZM1562.55 80.907L1551.93 32.4263L1522.23 80.907H1562.55ZM1721.4 65.1058C1726.8 67.2605 1730.94 70.4926 1733.82 74.802C1736.82 78.9917 1738.32 84.139 1738.32 90.244C1738.32 103.292 1733.16 113.168 1722.84 119.871C1712.52 126.575 1698.78 129.926 1681.62 129.926H1615.57L1640.77 4.23567H1701.6C1715.16 4.23567 1725.6 6.74949 1732.92 11.7771C1740.24 16.685 1743.9 23.7476 1743.9 32.965C1743.9 40.6261 1741.86 47.2099 1737.78 52.7163C1733.82 58.1031 1728.36 62.2329 1721.4 65.1058ZM1665.25 26.1418L1659.31 55.7688H1689C1696.68 55.7688 1702.62 54.2725 1706.82 51.2799C1711.14 48.1675 1713.3 43.7384 1713.3 37.9926C1713.3 30.092 1707.12 26.1418 1694.76 26.1418H1665.25ZM1683.42 108.02C1691.58 108.02 1697.94 106.464 1702.5 103.352C1707.06 100.239 1709.34 95.7504 1709.34 89.8848C1709.34 81.2661 1703.04 76.9567 1690.44 76.9567H1655.17L1649.05 108.02H1683.42ZM1818.52 132.081C1805.93 132.081 1795.01 129.807 1785.77 125.258C1776.53 120.709 1769.45 114.305 1764.53 106.045C1759.61 97.7854 1757.15 88.2688 1757.15 77.4953C1757.15 63.2504 1760.39 50.4419 1766.87 39.0699C1773.47 27.5782 1782.65 18.5405 1794.41 11.9567C1806.29 5.37288 1819.84 2.08098 1835.08 2.08098C1847.68 2.08098 1858.6 4.35538 1867.84 8.90419C1877.08 13.453 1884.16 19.8572 1889.07 28.1169C1893.99 36.3766 1896.45 45.8931 1896.45 56.6666C1896.45 70.9116 1893.15 83.7799 1886.55 95.2716C1880.08 106.644 1870.9 115.621 1859.02 122.205C1847.26 128.789 1833.76 132.081 1818.52 132.081ZM1821.04 107.302C1830.28 107.302 1838.38 105.087 1845.34 100.658C1852.3 96.2292 1857.64 90.3038 1861.36 82.8821C1865.08 75.4604 1866.94 67.2605 1866.94 58.2826C1866.94 48.7062 1863.94 41.1049 1857.94 35.4788C1851.94 29.7329 1843.48 26.86 1832.56 26.86C1823.32 26.86 1815.22 29.0745 1808.26 33.5036C1801.31 37.9327 1795.97 43.8581 1792.25 51.2799C1788.53 58.7016 1786.67 66.9014 1786.67 75.8793C1786.67 85.4557 1789.67 93.1169 1795.67 98.8627C1801.67 104.489 1810.12 107.302 1821.04 107.302ZM1964.44 132.081C1948.6 132.081 1936.18 128.191 1927.18 120.41C1918.19 112.509 1913.69 101.736 1913.69 88.0893C1913.69 84.139 1914.17 79.65 1915.13 74.6224L1929.16 4.23567H1958.5L1944.46 74.0837C1943.74 78.034 1943.38 81.5653 1943.38 84.6777C1943.38 92.2191 1945.42 97.9051 1949.5 101.736C1953.7 105.447 1959.76 107.302 1967.68 107.302C1976.56 107.302 1983.64 104.668 1988.92 99.4014C1994.2 94.1344 1998.04 85.6952 2000.44 74.0837L2014.47 4.23567H2043.09L2028.87 75.8793C2021.19 113.347 1999.72 132.081 1964.44 132.081ZM2091.21 27.9373H2050.9L2055.76 4.23567H2165.54L2160.68 27.9373H2120.55L2100.03 129.926H2070.87L2091.21 27.9373ZM2296.63 102.993H2237.96L2221.58 129.926H2190.44L2271.97 4.23567H2300.77L2331.73 129.926H2302.57L2296.63 102.993ZM2291.77 80.907L2281.15 32.4263L2251.46 80.907H2291.77ZM2450.62 65.1058C2456.02 67.2605 2460.16 70.4926 2463.04 74.802C2466.04 78.9917 2467.54 84.139 2467.54 90.244C2467.54 103.292 2462.38 113.168 2452.06 119.871C2441.75 126.575 2428.01 129.926 2410.85 129.926H2344.8L2369.99 4.23567H2430.83C2444.39 4.23567 2454.82 6.74949 2462.14 11.7771C2469.46 16.685 2473.12 23.7476 2473.12 32.965C2473.12 40.6261 2471.08 47.2099 2467 52.7163C2463.04 58.1031 2457.58 62.2329 2450.62 65.1058ZM2394.47 26.1418L2388.53 55.7688H2418.23C2425.91 55.7688 2431.85 54.2725 2436.05 51.2799C2440.37 48.1675 2442.53 43.7384 2442.53 37.9926C2442.53 30.092 2436.35 26.1418 2423.99 26.1418H2394.47ZM2412.65 108.02C2420.81 108.02 2427.17 106.464 2431.73 103.352C2436.29 100.239 2438.57 95.7504 2438.57 89.8848C2438.57 81.2661 2432.27 76.9567 2419.67 76.9567H2384.39L2378.27 108.02H2412.65ZM2547.75 132.081C2535.15 132.081 2524.23 129.807 2514.99 125.258C2505.75 120.709 2498.68 114.305 2493.76 106.045C2488.84 97.7854 2486.38 88.2688 2486.38 77.4953C2486.38 63.2504 2489.62 50.4419 2496.1 39.0699C2502.69 27.5782 2511.87 18.5405 2523.63 11.9567C2535.51 5.37288 2549.07 2.08098 2564.31 2.08098C2576.91 2.08098 2587.82 4.35538 2597.06 8.90419C2606.3 13.453 2613.38 19.8572 2618.3 28.1169C2623.22 36.3766 2625.68 45.8931 2625.68 56.6666C2625.68 70.9116 2622.38 83.7799 2615.78 95.2716C2609.3 106.644 2600.12 115.621 2588.24 122.205C2576.49 128.789 2562.99 132.081 2547.75 132.081ZM2550.27 107.302C2559.51 107.302 2567.61 105.087 2574.57 100.658C2581.52 96.2292 2586.86 90.3038 2590.58 82.8821C2594.3 75.4604 2596.16 67.2605 2596.16 58.2826C2596.16 48.7062 2593.16 41.1049 2587.16 35.4788C2581.17 29.7329 2572.71 26.86 2561.79 26.86C2552.55 26.86 2544.45 29.0745 2537.49 33.5036C2530.53 37.9327 2525.19 43.8581 2521.47 51.2799C2517.75 58.7016 2515.89 66.9014 2515.89 75.8793C2515.89 85.4557 2518.89 93.1169 2524.89 98.8627C2530.89 104.489 2539.35 107.302 2550.27 107.302ZM2693.67 132.081C2677.83 132.081 2665.41 128.191 2656.41 120.41C2647.41 112.509 2642.91 101.736 2642.91 88.0893C2642.91 84.139 2643.39 79.65 2644.35 74.6224L2658.39 4.23567H2687.73L2673.69 74.0837C2672.97 78.034 2672.61 81.5653 2672.61 84.6777C2672.61 92.2191 2674.65 97.9051 2678.73 101.736C2682.93 105.447 2688.99 107.302 2696.91 107.302C2705.78 107.302 2712.86 104.668 2718.14 99.4014C2723.42 94.1344 2727.26 85.6952 2729.66 74.0837L2743.7 4.23567H2772.32L2758.1 75.8793C2750.42 113.347 2728.94 132.081 2693.67 132.081ZM2820.44 27.9373H2780.12L2784.98 4.23567H2894.77L2889.91 27.9373H2849.77L2829.26 129.926H2800.1L2820.44 27.9373Z"
          stroke="var(--bg-text)"
          strokeWidth="3"
        />
      </svg>
    </div>
  )
}