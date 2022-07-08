import { FC } from 'react'
import {
  ISvgSizeInput,
  useSvgSizeAndPathScaleGetter,
} from '../../../../services/hooks/useSvgSizeAndPathScaleGetter'
import styles from './../BgText.module.scss'
import svgStyles from '../../Svg.module.scss'
import animationStyles from './ProjectsBgTextAnimations.module.scss'
import classNames from 'classnames'

const SVG_DATA: ISvgSizeInput = {
  svgSize: { width: 8777, height: 167 },
  sizesInRelativeUnits: { mobile: 9.153125, tablet: 10.52398, desktop: 0 },
}

export const MasnkiyDistrictBgTextSvg: FC = () => {
  const { size, scaleRatio } = useSvgSizeAndPathScaleGetter(SVG_DATA)

  return (
    <div
      className={classNames(styles.wrapper, animationStyles.manskiyDistrict)}
    >
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
          d="M169.198 37.7445L144.178 163.714H116.998L131.938 88.6723L83.6987 150.397H70.5588L44.639 87.7725L29.5191 163.714H2.33936L27.5391 37.7445H51.2989L82.7987 116.206L144.178 37.7445H169.198ZM267.457 136.721H208.778L192.398 163.714H161.258L242.798 37.7445H271.597L302.557 163.714H273.397L267.457 136.721ZM262.597 114.586L251.977 65.9977L222.278 114.586H262.597ZM460.025 37.7445L434.825 163.714H405.665L415.925 112.427H358.866L348.606 163.714H319.266L344.466 37.7445H373.805L363.906 87.2326H420.965L430.865 37.7445H460.025ZM532.273 165.874C519.673 165.874 508.633 163.594 499.153 159.035C489.793 154.477 482.593 148.058 477.553 139.78C472.514 131.502 469.994 121.964 469.994 111.167C469.994 96.8903 473.234 84.0534 479.713 72.6561C486.313 61.1389 495.553 52.081 507.433 45.4826C519.313 38.8842 532.933 35.585 548.293 35.585C559.573 35.585 569.533 37.5045 578.173 41.3436C586.813 45.1827 593.352 50.7014 597.792 57.8997L576.733 75.1755C570.013 65.3379 559.873 60.419 546.313 60.419C537.073 60.419 528.913 62.5785 521.833 66.8975C514.753 71.2165 509.233 77.095 505.273 84.5333C501.433 91.9715 499.513 100.25 499.513 109.367C499.513 119.085 502.573 126.823 508.693 132.582C514.933 138.22 523.633 141.04 534.793 141.04C548.113 141.04 559.273 136.181 568.273 126.463L585.553 144.099C573.073 158.616 555.313 165.874 532.273 165.874ZM685.31 99.4697L714.829 163.714H683.51L660.83 112.786H639.41L629.15 163.714H599.99L625.19 37.7445H654.35L644.09 88.6723H663.35L706.729 37.7445H739.489L685.31 99.4697ZM754.212 37.7445H783.012L766.272 119.805L842.772 37.7445H870.491L845.292 163.714H816.492L833.412 81.8339L756.732 163.714H729.013L754.212 37.7445ZM902.043 37.7445H930.843L914.103 119.805L990.602 37.7445H1018.32L993.122 163.714H964.323L981.243 81.8339L904.563 163.714H876.843L902.043 37.7445ZM961.623 30.0063C951.423 30.0063 943.683 28.1468 938.403 24.4277C933.243 20.5886 930.663 14.9499 930.663 7.51172C930.663 5.23226 930.783 3.49268 931.023 2.29297H949.563C949.443 2.89282 949.383 3.73262 949.383 4.81236C949.383 8.29153 950.523 11.0509 952.803 13.0904C955.203 15.0099 958.623 15.9697 963.063 15.9697C967.743 15.9697 971.583 14.83 974.583 12.5505C977.703 10.1511 979.683 6.73191 980.522 2.29297H999.422C997.862 11.6507 993.962 18.6091 987.722 23.168C981.483 27.7269 972.783 30.0063 961.623 30.0063ZM1030.61 101.809H1081.55L1077.05 124.304H1026.11L1030.61 101.809ZM1169.35 37.7445C1185.07 37.7445 1197.19 41.2236 1205.71 48.182C1214.35 55.0203 1218.67 64.618 1218.67 76.9751C1218.67 87.5325 1216.15 96.7703 1211.11 104.688C1206.19 112.487 1199.11 118.485 1189.87 122.684C1180.75 126.883 1169.95 128.983 1157.47 128.983H1129.39L1122.55 163.714H1093.21L1118.41 37.7445H1169.35ZM1158.73 105.228C1168.45 105.228 1175.95 103.009 1181.23 98.5699C1186.51 94.131 1189.15 87.7725 1189.15 79.4945C1189.15 73.4959 1187.11 68.997 1183.03 65.9977C1179.07 62.9984 1173.31 61.4988 1165.75 61.4988H1142.89L1134.07 105.228H1158.73ZM1309.66 136.721H1250.98L1234.6 163.714H1203.46L1285 37.7445H1313.8L1344.75 163.714H1315.6L1309.66 136.721ZM1304.8 114.586L1294.18 65.9977L1264.48 114.586H1304.8ZM1386.84 37.7445H1415.64L1398.9 119.805L1475.4 37.7445H1503.12L1477.92 163.714H1449.12L1466.04 81.8339L1389.36 163.714H1361.64L1386.84 37.7445ZM1446.42 30.0063C1436.22 30.0063 1428.48 28.1468 1423.2 24.4277C1418.04 20.5886 1415.46 14.9499 1415.46 7.51172C1415.46 5.23226 1415.58 3.49268 1415.82 2.29297H1434.36C1434.24 2.89282 1434.18 3.73262 1434.18 4.81236C1434.18 8.29153 1435.32 11.0509 1437.6 13.0904C1440 15.0099 1443.42 15.9697 1447.86 15.9697C1452.54 15.9697 1456.38 14.83 1459.38 12.5505C1462.5 10.1511 1464.48 6.73191 1465.32 2.29297H1484.22C1482.66 11.6507 1478.76 18.6091 1472.52 23.168C1466.28 27.7269 1457.58 30.0063 1446.42 30.0063ZM1574.27 165.874C1561.67 165.874 1550.75 163.594 1541.51 159.035C1532.27 154.477 1525.19 148.058 1520.27 139.78C1515.35 131.502 1512.89 121.964 1512.89 111.167C1512.89 96.8903 1516.13 84.0534 1522.61 72.6561C1529.21 61.1389 1538.39 52.081 1550.15 45.4826C1562.03 38.8842 1575.59 35.585 1590.83 35.585C1603.43 35.585 1614.35 37.8644 1623.59 42.4234C1632.83 46.9823 1639.91 53.4007 1644.83 61.6787C1649.75 69.9568 1652.21 79.4945 1652.21 90.2919C1652.21 104.568 1648.91 117.465 1642.31 128.983C1635.83 140.38 1626.65 149.378 1614.77 155.976C1603.01 162.575 1589.51 165.874 1574.27 165.874ZM1576.79 141.04C1586.03 141.04 1594.13 138.82 1601.09 134.381C1608.05 129.942 1613.39 124.004 1617.11 116.566C1620.83 109.127 1622.69 100.909 1622.69 91.9115C1622.69 82.3138 1619.69 74.6956 1613.69 69.057C1607.69 63.2984 1599.23 60.419 1588.31 60.419C1579.07 60.419 1570.97 62.6385 1564.01 67.0775C1557.05 71.5164 1551.71 77.455 1547.99 84.8932C1544.27 92.3314 1542.41 100.549 1542.41 109.547C1542.41 119.145 1545.41 126.823 1551.41 132.582C1557.41 138.22 1565.87 141.04 1576.79 141.04ZM1802.63 37.7445L1777.43 163.714H1748.27L1758.53 112.427H1701.47L1691.21 163.714H1661.87L1687.07 37.7445H1716.41L1706.51 87.2326H1763.57L1773.47 37.7445H1802.63ZM1819.26 165.154C1814.46 165.154 1810.5 163.654 1807.38 160.655C1804.26 157.536 1802.7 153.637 1802.7 148.958C1802.7 143.439 1804.5 138.94 1808.1 135.461C1811.7 131.982 1816.14 130.242 1821.42 130.242C1826.22 130.242 1830.12 131.742 1833.12 134.741C1836.24 137.741 1837.8 141.64 1837.8 146.438C1837.8 151.837 1835.94 156.336 1832.22 159.935C1828.62 163.414 1824.3 165.154 1819.26 165.154ZM1931.53 37.7445C1947.25 37.7445 1959.37 41.2236 1967.89 48.182C1976.53 55.0203 1980.85 64.618 1980.85 76.9751C1980.85 87.5325 1978.33 96.7703 1973.29 104.688C1968.37 112.487 1961.29 118.485 1952.05 122.684C1942.93 126.883 1932.13 128.983 1919.65 128.983H1891.57L1884.73 163.714H1855.39L1880.59 37.7445H1931.53ZM1920.91 105.228C1930.63 105.228 1938.13 103.009 1943.41 98.5699C1948.69 94.131 1951.33 87.7725 1951.33 79.4945C1951.33 73.4959 1949.29 68.997 1945.21 65.9977C1941.25 62.9984 1935.49 61.4988 1927.93 61.4988H1905.07L1896.25 105.228H1920.91ZM2151.74 91.9115C2151.74 104.389 2148.56 115.306 2142.2 124.664C2135.96 134.021 2126.96 141.4 2115.2 146.798C2103.44 152.077 2089.52 155.016 2073.44 155.616L2070.74 169.293H2043.92L2046.62 155.436C2028.38 154.117 2014.46 149.498 2004.86 141.58C1995.26 133.662 1990.46 122.864 1990.46 109.187C1990.46 96.9503 1993.52 86.1529 1999.64 76.7951C2005.88 67.4374 2014.88 60.0591 2026.64 54.6604C2038.4 49.1417 2052.44 45.9625 2068.76 45.1227L2071.28 32.3458H2098.1L2095.58 45.3027C2113.7 46.6223 2127.56 51.2412 2137.16 59.1593C2146.88 67.0774 2151.74 77.9948 2151.74 91.9115ZM2077.94 132.762C2092.82 131.562 2104.04 127.843 2111.6 121.604C2119.16 115.366 2122.94 106.788 2122.94 95.8706C2122.94 87.3526 2120.3 80.8741 2115.02 76.4352C2109.86 71.8763 2101.82 69.117 2090.9 68.1572L2077.94 132.762ZM2019.26 105.228C2019.26 113.506 2021.84 119.925 2027 124.484C2032.28 128.923 2040.38 131.682 2051.3 132.762L2064.08 68.1572C2034.2 70.7966 2019.26 83.1536 2019.26 105.228ZM2378.4 37.7445L2353.38 163.714H2326.2L2341.14 88.6723L2292.9 150.397H2279.76L2253.84 87.7725L2238.72 163.714H2211.54L2236.74 37.7445H2260.5L2292 116.206L2353.38 37.7445H2378.4ZM2476.66 136.721H2417.98L2401.6 163.714H2370.46L2452 37.7445H2480.8L2511.76 163.714H2482.6L2476.66 136.721ZM2471.8 114.586L2461.18 65.9977L2431.48 114.586H2471.8ZM2669.22 37.7445L2644.02 163.714H2614.86L2625.12 112.427H2568.06L2557.81 163.714H2528.47L2553.67 37.7445H2583L2573.1 87.2326H2630.16L2640.06 37.7445H2669.22ZM2741.47 165.874C2728.87 165.874 2717.83 163.594 2708.35 159.035C2698.99 154.477 2691.79 148.058 2686.75 139.78C2681.71 131.502 2679.19 121.964 2679.19 111.167C2679.19 96.8903 2682.43 84.0534 2688.91 72.6561C2695.51 61.1389 2704.75 52.081 2716.63 45.4826C2728.51 38.8842 2742.13 35.585 2757.49 35.585C2768.77 35.585 2778.73 37.5045 2787.37 41.3436C2796.01 45.1827 2802.55 50.7014 2806.99 57.8997L2785.93 75.1755C2779.21 65.3379 2769.07 60.419 2755.51 60.419C2746.27 60.419 2738.11 62.5785 2731.03 66.8975C2723.95 71.2165 2718.43 77.095 2714.47 84.5333C2710.63 91.9715 2708.71 100.25 2708.71 109.367C2708.71 119.085 2711.77 126.823 2717.89 132.582C2724.13 138.22 2732.83 141.04 2743.99 141.04C2757.31 141.04 2768.47 136.181 2777.47 126.463L2794.75 144.099C2782.27 158.616 2764.51 165.874 2741.47 165.874ZM2894.51 99.4697L2924.03 163.714H2892.71L2870.03 112.786H2848.61L2838.35 163.714H2809.19L2834.39 37.7445H2863.55L2853.29 88.6723H2872.55L2915.93 37.7445H2948.69L2894.51 99.4697ZM2963.41 37.7445H2992.21L2975.47 119.805L3051.97 37.7445H3079.69L3054.49 163.714H3025.69L3042.61 81.8339L2965.93 163.714H2938.21L2963.41 37.7445ZM3111.24 37.7445H3140.04L3123.3 119.805L3199.8 37.7445H3227.52L3202.32 163.714H3173.52L3190.44 81.8339L3113.76 163.714H3086.04L3111.24 37.7445ZM3170.82 30.0063C3160.62 30.0063 3152.88 28.1468 3147.6 24.4277C3142.44 20.5886 3139.86 14.9499 3139.86 7.51172C3139.86 5.23226 3139.98 3.49268 3140.22 2.29297H3158.76C3158.64 2.89282 3158.58 3.73262 3158.58 4.81236C3158.58 8.29153 3159.72 11.0509 3162 13.0904C3164.4 15.0099 3167.82 15.9697 3172.26 15.9697C3176.94 15.9697 3180.78 14.83 3183.78 12.5505C3186.9 10.1511 3188.88 6.73191 3189.72 2.29297H3208.62C3207.06 11.6507 3203.16 18.6091 3196.92 23.168C3190.68 27.7269 3181.98 30.0063 3170.82 30.0063ZM3239.81 101.809H3290.75L3286.25 124.304H3235.31L3239.81 101.809ZM3378.55 37.7445C3394.27 37.7445 3406.39 41.2236 3414.91 48.182C3423.55 55.0203 3427.87 64.618 3427.87 76.9751C3427.87 87.5325 3425.35 96.7703 3420.31 104.688C3415.39 112.487 3408.31 118.485 3399.07 122.684C3389.95 126.883 3379.15 128.983 3366.67 128.983H3338.59L3331.75 163.714H3302.41L3327.61 37.7445H3378.55ZM3367.93 105.228C3377.65 105.228 3385.15 103.009 3390.43 98.5699C3395.71 94.131 3398.35 87.7725 3398.35 79.4945C3398.35 73.4959 3396.31 68.997 3392.23 65.9977C3388.27 62.9984 3382.51 61.4988 3374.95 61.4988H3352.09L3343.27 105.228H3367.93ZM3518.85 136.721H3460.18L3443.8 163.714H3412.66L3494.19 37.7445H3522.99L3553.95 163.714H3524.79L3518.85 136.721ZM3513.99 114.586L3503.37 65.9977L3473.68 114.586H3513.99ZM3596.04 37.7445H3624.84L3608.1 119.805L3684.6 37.7445H3712.32L3687.12 163.714H3658.32L3675.24 81.8339L3598.56 163.714H3570.84L3596.04 37.7445ZM3655.62 30.0063C3645.42 30.0063 3637.68 28.1468 3632.4 24.4277C3627.24 20.5886 3624.66 14.9499 3624.66 7.51172C3624.66 5.23226 3624.78 3.49268 3625.02 2.29297H3643.56C3643.44 2.89282 3643.38 3.73262 3643.38 4.81236C3643.38 8.29153 3644.52 11.0509 3646.8 13.0904C3649.2 15.0099 3652.62 15.9697 3657.06 15.9697C3661.74 15.9697 3665.58 14.83 3668.58 12.5505C3671.7 10.1511 3673.68 6.73191 3674.52 2.29297H3693.42C3691.86 11.6507 3687.96 18.6091 3681.72 23.168C3675.48 27.7269 3666.78 30.0063 3655.62 30.0063ZM3783.47 165.874C3770.87 165.874 3759.95 163.594 3750.71 159.035C3741.47 154.477 3734.39 148.058 3729.47 139.78C3724.55 131.502 3722.09 121.964 3722.09 111.167C3722.09 96.8903 3725.33 84.0534 3731.81 72.6561C3738.41 61.1389 3747.59 52.081 3759.35 45.4826C3771.23 38.8842 3784.79 35.585 3800.03 35.585C3812.63 35.585 3823.55 37.8644 3832.79 42.4234C3842.03 46.9823 3849.11 53.4007 3854.03 61.6787C3858.95 69.9568 3861.41 79.4945 3861.41 90.2919C3861.41 104.568 3858.11 117.465 3851.51 128.983C3845.03 140.38 3835.85 149.378 3823.97 155.976C3812.21 162.575 3798.71 165.874 3783.47 165.874ZM3785.99 141.04C3795.23 141.04 3803.33 138.82 3810.29 134.381C3817.25 129.942 3822.59 124.004 3826.31 116.566C3830.03 109.127 3831.89 100.909 3831.89 91.9115C3831.89 82.3138 3828.89 74.6956 3822.89 69.057C3816.89 63.2984 3808.43 60.419 3797.51 60.419C3788.27 60.419 3780.17 62.6385 3773.21 67.0775C3766.25 71.5164 3760.91 77.455 3757.19 84.8932C3753.47 92.3314 3751.61 100.549 3751.61 109.547C3751.61 119.145 3754.61 126.823 3760.61 132.582C3766.61 138.22 3775.07 141.04 3785.99 141.04ZM4011.83 37.7445L3986.63 163.714H3957.47L3967.73 112.427H3910.67L3900.41 163.714H3871.07L3896.27 37.7445H3925.61L3915.71 87.2326H3972.77L3982.67 37.7445H4011.83ZM4028.46 165.154C4023.66 165.154 4019.7 163.654 4016.58 160.655C4013.46 157.536 4011.9 153.637 4011.9 148.958C4011.9 143.439 4013.7 138.94 4017.3 135.461C4020.9 131.982 4025.34 130.242 4030.62 130.242C4035.42 130.242 4039.32 131.742 4042.32 134.741C4045.44 137.741 4047 141.64 4047 146.438C4047 151.837 4045.14 156.336 4041.42 159.935C4037.82 163.414 4033.5 165.154 4028.46 165.154ZM4140.73 37.7445C4156.45 37.7445 4168.57 41.2236 4177.09 48.182C4185.73 55.0203 4190.05 64.618 4190.05 76.9751C4190.05 87.5325 4187.53 96.7703 4182.49 104.688C4177.57 112.487 4170.49 118.485 4161.25 122.684C4152.13 126.883 4141.33 128.983 4128.85 128.983H4100.77L4093.93 163.714H4064.59L4089.79 37.7445H4140.73ZM4130.11 105.228C4139.83 105.228 4147.33 103.009 4152.61 98.5699C4157.89 94.131 4160.53 87.7725 4160.53 79.4945C4160.53 73.4959 4158.49 68.997 4154.41 65.9977C4150.45 62.9984 4144.69 61.4988 4137.13 61.4988H4114.27L4105.45 105.228H4130.11ZM4360.94 91.9115C4360.94 104.389 4357.76 115.306 4351.4 124.664C4345.16 134.021 4336.16 141.4 4324.4 146.798C4312.64 152.077 4298.72 155.016 4282.64 155.616L4279.94 169.293H4253.12L4255.82 155.436C4237.58 154.117 4223.66 149.498 4214.06 141.58C4204.46 133.662 4199.66 122.864 4199.66 109.187C4199.66 96.9503 4202.72 86.1529 4208.84 76.7951C4215.08 67.4374 4224.08 60.0591 4235.84 54.6604C4247.6 49.1417 4261.64 45.9625 4277.96 45.1227L4280.48 32.3458H4307.3L4304.78 45.3027C4322.9 46.6223 4336.76 51.2412 4346.36 59.1593C4356.08 67.0774 4360.94 77.9948 4360.94 91.9115ZM4287.14 132.762C4302.02 131.562 4313.24 127.843 4320.8 121.604C4328.36 115.366 4332.14 106.788 4332.14 95.8706C4332.14 87.3526 4329.5 80.8741 4324.22 76.4352C4319.06 71.8763 4311.02 69.117 4300.1 68.1572L4287.14 132.762ZM4228.46 105.228C4228.46 113.506 4231.04 119.925 4236.2 124.484C4241.48 128.923 4249.58 131.682 4260.5 132.762L4273.28 68.1572C4243.4 70.7966 4228.46 83.1536 4228.46 105.228ZM4587.6 37.7445L4562.58 163.714H4535.4L4550.34 88.6723L4502.1 150.397H4488.96L4463.04 87.7725L4447.92 163.714H4420.74L4445.94 37.7445H4469.7L4501.2 116.206L4562.58 37.7445H4587.6ZM4685.86 136.721H4627.18L4610.8 163.714H4579.66L4661.2 37.7445H4690L4720.96 163.714H4691.8L4685.86 136.721ZM4681 114.586L4670.38 65.9977L4640.68 114.586H4681ZM4878.42 37.7445L4853.22 163.714H4824.06L4834.32 112.427H4777.26L4767 163.714H4737.66L4762.86 37.7445H4792.2L4782.3 87.2326H4839.36L4849.26 37.7445H4878.42ZM4950.67 165.874C4938.07 165.874 4927.03 163.594 4917.55 159.035C4908.19 154.477 4900.99 148.058 4895.95 139.78C4890.91 131.502 4888.39 121.964 4888.39 111.167C4888.39 96.8903 4891.63 84.0534 4898.11 72.6561C4904.71 61.1389 4913.95 52.081 4925.83 45.4826C4937.71 38.8842 4951.33 35.585 4966.69 35.585C4977.97 35.585 4987.93 37.5045 4996.57 41.3436C5005.21 45.1827 5011.75 50.7014 5016.19 57.8997L4995.13 75.1755C4988.41 65.3379 4978.27 60.419 4964.71 60.419C4955.47 60.419 4947.31 62.5785 4940.23 66.8975C4933.15 71.2165 4927.63 77.095 4923.67 84.5333C4919.83 91.9715 4917.91 100.25 4917.91 109.367C4917.91 119.085 4920.97 126.823 4927.09 132.582C4933.33 138.22 4942.03 141.04 4953.19 141.04C4966.51 141.04 4977.67 136.181 4986.67 126.463L5003.95 144.099C4991.47 158.616 4973.71 165.874 4950.67 165.874ZM5103.71 99.4697L5133.23 163.714H5101.91L5079.23 112.786H5057.81L5047.55 163.714H5018.39L5043.59 37.7445H5072.75L5062.49 88.6723H5081.75L5125.13 37.7445H5157.89L5103.71 99.4697ZM5172.61 37.7445H5201.41L5184.67 119.805L5261.17 37.7445H5288.89L5263.69 163.714H5234.89L5251.81 81.8339L5175.13 163.714H5147.41L5172.61 37.7445ZM5320.44 37.7445H5349.24L5332.5 119.805L5409 37.7445H5436.72L5411.52 163.714H5382.72L5399.64 81.8339L5322.96 163.714H5295.24L5320.44 37.7445ZM5380.02 30.0063C5369.82 30.0063 5362.08 28.1468 5356.8 24.4277C5351.64 20.5886 5349.06 14.9499 5349.06 7.51172C5349.06 5.23226 5349.18 3.49268 5349.42 2.29297H5367.96C5367.84 2.89282 5367.78 3.73262 5367.78 4.81236C5367.78 8.29153 5368.92 11.0509 5371.2 13.0904C5373.6 15.0099 5377.02 15.9697 5381.46 15.9697C5386.14 15.9697 5389.98 14.83 5392.98 12.5505C5396.1 10.1511 5398.08 6.73191 5398.92 2.29297H5417.82C5416.26 11.6507 5412.36 18.6091 5406.12 23.168C5399.88 27.7269 5391.18 30.0063 5380.02 30.0063ZM5449.01 101.809H5499.95L5495.45 124.304H5444.51L5449.01 101.809ZM5587.75 37.7445C5603.47 37.7445 5615.59 41.2236 5624.11 48.182C5632.74 55.0203 5637.06 64.618 5637.06 76.9751C5637.06 87.5325 5634.54 96.7703 5629.5 104.688C5624.58 112.487 5617.5 118.485 5608.26 122.684C5599.14 126.883 5588.35 128.983 5575.87 128.983H5547.79L5540.95 163.714H5511.61L5536.81 37.7445H5587.75ZM5577.13 105.228C5586.85 105.228 5594.35 103.009 5599.63 98.5699C5604.91 94.131 5607.55 87.7725 5607.55 79.4945C5607.55 73.4959 5605.51 68.997 5601.43 65.9977C5597.47 62.9984 5591.71 61.4988 5584.15 61.4988H5561.29L5552.47 105.228H5577.13ZM5728.05 136.721H5669.37L5652.99 163.714H5621.86L5703.39 37.7445H5732.19L5763.15 163.714H5733.99L5728.05 136.721ZM5723.19 114.586L5712.57 65.9977L5682.87 114.586H5723.19ZM5805.24 37.7445H5834.04L5817.3 119.805L5893.8 37.7445H5921.52L5896.32 163.714H5867.52L5884.44 81.8339L5807.76 163.714H5780.04L5805.24 37.7445ZM5864.82 30.0063C5854.62 30.0063 5846.88 28.1468 5841.6 24.4277C5836.44 20.5886 5833.86 14.9499 5833.86 7.51172C5833.86 5.23226 5833.98 3.49268 5834.22 2.29297H5852.76C5852.64 2.89282 5852.58 3.73262 5852.58 4.81236C5852.58 8.29153 5853.72 11.0509 5856 13.0904C5858.4 15.0099 5861.82 15.9697 5866.26 15.9697C5870.94 15.9697 5874.78 14.83 5877.78 12.5505C5880.9 10.1511 5882.88 6.73191 5883.72 2.29297H5902.62C5901.06 11.6507 5897.16 18.6091 5890.92 23.168C5884.68 27.7269 5875.98 30.0063 5864.82 30.0063ZM5992.67 165.874C5980.07 165.874 5969.15 163.594 5959.91 159.035C5950.67 154.477 5943.59 148.058 5938.67 139.78C5933.75 131.502 5931.29 121.964 5931.29 111.167C5931.29 96.8903 5934.53 84.0534 5941.01 72.6561C5947.61 61.1389 5956.79 52.081 5968.55 45.4826C5980.43 38.8842 5993.99 35.585 6009.23 35.585C6021.83 35.585 6032.75 37.8644 6041.99 42.4234C6051.23 46.9823 6058.31 53.4007 6063.23 61.6787C6068.15 69.9568 6070.61 79.4945 6070.61 90.2919C6070.61 104.568 6067.31 117.465 6060.71 128.983C6054.23 140.38 6045.05 149.378 6033.17 155.976C6021.41 162.575 6007.91 165.874 5992.67 165.874ZM5995.19 141.04C6004.43 141.04 6012.53 138.82 6019.49 134.381C6026.45 129.942 6031.79 124.004 6035.51 116.566C6039.23 109.127 6041.09 100.909 6041.09 91.9115C6041.09 82.3138 6038.09 74.6956 6032.09 69.057C6026.09 63.2984 6017.63 60.419 6006.71 60.419C5997.47 60.419 5989.37 62.6385 5982.41 67.0775C5975.45 71.5164 5970.11 77.455 5966.39 84.8932C5962.67 92.3314 5960.81 100.549 5960.81 109.547C5960.81 119.145 5963.81 126.823 5969.81 132.582C5975.81 138.22 5984.27 141.04 5995.19 141.04ZM6221.03 37.7445L6195.83 163.714H6166.67L6176.93 112.427H6119.87L6109.61 163.714H6080.27L6105.47 37.7445H6134.81L6124.91 87.2326H6181.97L6191.87 37.7445H6221.03ZM6237.66 165.154C6232.86 165.154 6228.9 163.654 6225.78 160.655C6222.66 157.536 6221.1 153.637 6221.1 148.958C6221.1 143.439 6222.9 138.94 6226.5 135.461C6230.1 131.982 6234.54 130.242 6239.82 130.242C6244.62 130.242 6248.52 131.742 6251.52 134.741C6254.64 137.741 6256.2 141.64 6256.2 146.438C6256.2 151.837 6254.34 156.336 6250.62 159.935C6247.02 163.414 6242.7 165.154 6237.66 165.154ZM6349.93 37.7445C6365.65 37.7445 6377.77 41.2236 6386.29 48.182C6394.93 55.0203 6399.25 64.618 6399.25 76.9751C6399.25 87.5325 6396.73 96.7703 6391.69 104.688C6386.77 112.487 6379.69 118.485 6370.45 122.684C6361.33 126.883 6350.53 128.983 6338.05 128.983H6309.97L6303.13 163.714H6273.79L6298.99 37.7445H6349.93ZM6339.31 105.228C6349.03 105.228 6356.53 103.009 6361.81 98.5699C6367.09 94.131 6369.73 87.7725 6369.73 79.4945C6369.73 73.4959 6367.69 68.997 6363.61 65.9977C6359.65 62.9984 6353.89 61.4988 6346.33 61.4988H6323.47L6314.65 105.228H6339.31ZM6570.14 91.9115C6570.14 104.389 6566.96 115.306 6560.6 124.664C6554.36 134.021 6545.36 141.4 6533.6 146.798C6521.84 152.077 6507.92 155.016 6491.84 155.616L6489.14 169.293H6462.32L6465.02 155.436C6446.78 154.117 6432.86 149.498 6423.26 141.58C6413.66 133.662 6408.86 122.864 6408.86 109.187C6408.86 96.9503 6411.92 86.1529 6418.04 76.7951C6424.28 67.4374 6433.28 60.0591 6445.04 54.6604C6456.8 49.1417 6470.84 45.9625 6487.16 45.1227L6489.68 32.3458H6516.5L6513.98 45.3027C6532.1 46.6223 6545.96 51.2412 6555.56 59.1593C6565.28 67.0774 6570.14 77.9948 6570.14 91.9115ZM6496.34 132.762C6511.22 131.562 6522.44 127.843 6530 121.604C6537.56 115.366 6541.34 106.788 6541.34 95.8706C6541.34 87.3526 6538.7 80.8741 6533.42 76.4352C6528.26 71.8763 6520.22 69.117 6509.3 68.1572L6496.34 132.762ZM6437.66 105.228C6437.66 113.506 6440.24 119.925 6445.4 124.484C6450.68 128.923 6458.78 131.682 6469.7 132.762L6482.48 68.1572C6452.6 70.7966 6437.66 83.1536 6437.66 105.228ZM6796.8 37.7445L6771.78 163.714H6744.6L6759.54 88.6723L6711.3 150.397H6698.16L6672.24 87.7725L6657.12 163.714H6629.94L6655.14 37.7445H6678.9L6710.4 116.206L6771.78 37.7445H6796.8ZM6895.06 136.721H6836.38L6820 163.714H6788.86L6870.4 37.7445H6899.2L6930.16 163.714H6901L6895.06 136.721ZM6890.2 114.586L6879.58 65.9977L6849.88 114.586H6890.2ZM7087.62 37.7445L7062.42 163.714H7033.26L7043.52 112.427H6986.46L6976.2 163.714H6946.86L6972.06 37.7445H7001.4L6991.5 87.2326H7048.56L7058.46 37.7445H7087.62ZM7159.87 165.874C7147.27 165.874 7136.23 163.594 7126.75 159.035C7117.39 154.477 7110.19 148.058 7105.15 139.78C7100.11 131.502 7097.59 121.964 7097.59 111.167C7097.59 96.8903 7100.83 84.0534 7107.31 72.6561C7113.91 61.1389 7123.15 52.081 7135.03 45.4826C7146.91 38.8842 7160.53 35.585 7175.89 35.585C7187.17 35.585 7197.13 37.5045 7205.77 41.3436C7214.41 45.1827 7220.95 50.7014 7225.39 57.8997L7204.33 75.1755C7197.61 65.3379 7187.47 60.419 7173.91 60.419C7164.67 60.419 7156.51 62.5785 7149.43 66.8975C7142.35 71.2165 7136.83 77.095 7132.87 84.5333C7129.03 91.9715 7127.11 100.25 7127.11 109.367C7127.11 119.085 7130.17 126.823 7136.29 132.582C7142.53 138.22 7151.23 141.04 7162.39 141.04C7175.71 141.04 7186.87 136.181 7195.87 126.463L7213.15 144.099C7200.67 158.616 7182.91 165.874 7159.87 165.874ZM7312.91 99.4697L7342.43 163.714H7311.11L7288.43 112.786H7267.01L7256.75 163.714H7227.59L7252.79 37.7445H7281.95L7271.69 88.6723H7290.95L7334.33 37.7445H7367.09L7312.91 99.4697ZM7381.81 37.7445H7410.61L7393.87 119.805L7470.37 37.7445H7498.09L7472.89 163.714H7444.09L7461.01 81.8339L7384.33 163.714H7356.61L7381.81 37.7445ZM7529.64 37.7445H7558.44L7541.7 119.805L7618.2 37.7445H7645.92L7620.72 163.714H7591.92L7608.84 81.8339L7532.16 163.714H7504.44L7529.64 37.7445ZM7589.22 30.0063C7579.02 30.0063 7571.28 28.1468 7566 24.4277C7560.84 20.5886 7558.26 14.9499 7558.26 7.51172C7558.26 5.23226 7558.38 3.49268 7558.62 2.29297H7577.16C7577.04 2.89282 7576.98 3.73262 7576.98 4.81236C7576.98 8.29153 7578.12 11.0509 7580.4 13.0904C7582.8 15.0099 7586.22 15.9697 7590.66 15.9697C7595.34 15.9697 7599.18 14.83 7602.18 12.5505C7605.3 10.1511 7607.28 6.73191 7608.12 2.29297H7627.02C7625.46 11.6507 7621.56 18.6091 7615.32 23.168C7609.08 27.7269 7600.38 30.0063 7589.22 30.0063ZM7658.21 101.809H7709.15L7704.65 124.304H7653.71L7658.21 101.809ZM7796.94 37.7445C7812.66 37.7445 7824.78 41.2236 7833.3 48.182C7841.94 55.0203 7846.26 64.618 7846.26 76.9751C7846.26 87.5325 7843.74 96.7703 7838.7 104.688C7833.78 112.487 7826.7 118.485 7817.46 122.684C7808.34 126.883 7797.54 128.983 7785.06 128.983H7756.98L7750.15 163.714H7720.81L7746 37.7445H7796.94ZM7786.32 105.228C7796.04 105.228 7803.54 103.009 7808.82 98.5699C7814.1 94.131 7816.74 87.7725 7816.74 79.4945C7816.74 73.4959 7814.7 68.997 7810.62 65.9977C7806.66 62.9984 7800.9 61.4988 7793.34 61.4988H7770.48L7761.66 105.228H7786.32ZM7937.25 136.721H7878.57L7862.19 163.714H7831.05L7912.59 37.7445H7941.39L7972.35 163.714H7943.19L7937.25 136.721ZM7932.39 114.586L7921.77 65.9977L7892.07 114.586H7932.39ZM8014.44 37.7445H8043.24L8026.5 119.805L8103 37.7445H8130.72L8105.52 163.714H8076.72L8093.64 81.8339L8016.96 163.714H7989.24L8014.44 37.7445ZM8074.02 30.0063C8063.82 30.0063 8056.08 28.1468 8050.8 24.4277C8045.64 20.5886 8043.06 14.9499 8043.06 7.51172C8043.06 5.23226 8043.18 3.49268 8043.42 2.29297H8061.96C8061.84 2.89282 8061.78 3.73262 8061.78 4.81236C8061.78 8.29153 8062.92 11.0509 8065.2 13.0904C8067.6 15.0099 8071.02 15.9697 8075.46 15.9697C8080.14 15.9697 8083.98 14.83 8086.98 12.5505C8090.1 10.1511 8092.08 6.73191 8092.92 2.29297H8111.82C8110.26 11.6507 8106.36 18.6091 8100.12 23.168C8093.88 27.7269 8085.18 30.0063 8074.02 30.0063ZM8201.87 165.874C8189.27 165.874 8178.35 163.594 8169.11 159.035C8159.87 154.477 8152.79 148.058 8147.87 139.78C8142.95 131.502 8140.49 121.964 8140.49 111.167C8140.49 96.8903 8143.73 84.0534 8150.21 72.6561C8156.81 61.1389 8165.99 52.081 8177.75 45.4826C8189.63 38.8842 8203.19 35.585 8218.43 35.585C8231.03 35.585 8241.95 37.8644 8251.19 42.4234C8260.43 46.9823 8267.51 53.4007 8272.43 61.6787C8277.35 69.9568 8279.81 79.4945 8279.81 90.2919C8279.81 104.568 8276.51 117.465 8269.91 128.983C8263.43 140.38 8254.25 149.378 8242.37 155.976C8230.61 162.575 8217.11 165.874 8201.87 165.874ZM8204.39 141.04C8213.63 141.04 8221.73 138.82 8228.69 134.381C8235.65 129.942 8240.99 124.004 8244.71 116.566C8248.43 109.127 8250.29 100.909 8250.29 91.9115C8250.29 82.3138 8247.29 74.6956 8241.29 69.057C8235.29 63.2984 8226.83 60.419 8215.91 60.419C8206.67 60.419 8198.57 62.6385 8191.61 67.0775C8184.65 71.5164 8179.31 77.455 8175.59 84.8932C8171.87 92.3314 8170.01 100.549 8170.01 109.547C8170.01 119.145 8173.01 126.823 8179.01 132.582C8185.01 138.22 8193.47 141.04 8204.39 141.04ZM8430.23 37.7445L8405.03 163.714H8375.87L8386.13 112.427H8329.07L8318.81 163.714H8289.47L8314.67 37.7445H8344.01L8334.11 87.2326H8391.17L8401.07 37.7445H8430.23ZM8446.86 165.154C8442.06 165.154 8438.1 163.654 8434.98 160.655C8431.86 157.536 8430.3 153.637 8430.3 148.958C8430.3 143.439 8432.1 138.94 8435.7 135.461C8439.3 131.982 8443.74 130.242 8449.02 130.242C8453.82 130.242 8457.72 131.742 8460.72 134.741C8463.84 137.741 8465.4 141.64 8465.4 146.438C8465.4 151.837 8463.54 156.336 8459.82 159.935C8456.22 163.414 8451.9 165.154 8446.86 165.154ZM8559.13 37.7445C8574.85 37.7445 8586.96 41.2236 8595.48 48.182C8604.12 55.0203 8608.44 64.618 8608.44 76.9751C8608.44 87.5325 8605.93 96.7703 8600.89 104.688C8595.97 112.487 8588.88 118.485 8579.65 122.684C8570.53 126.883 8559.73 128.983 8547.25 128.983H8519.17L8512.33 163.714H8482.99L8508.19 37.7445H8559.13ZM8548.51 105.228C8558.23 105.228 8565.73 103.009 8571.01 98.5699C8576.29 94.131 8578.93 87.7725 8578.93 79.4945C8578.93 73.4959 8576.89 68.997 8572.81 65.9977C8568.85 62.9984 8563.09 61.4988 8555.53 61.4988H8532.67L8523.85 105.228H8548.51ZM8779.34 91.9115C8779.34 104.389 8776.16 115.306 8769.8 124.664C8763.56 134.021 8754.56 141.4 8742.8 146.798C8731.04 152.077 8717.12 155.016 8701.04 155.616L8698.34 169.293H8671.52L8674.22 155.436C8655.98 154.117 8642.06 149.498 8632.46 141.58C8622.86 133.662 8618.06 122.864 8618.06 109.187C8618.06 96.9503 8621.12 86.1529 8627.24 76.7951C8633.48 67.4374 8642.48 60.0591 8654.24 54.6604C8666 49.1417 8680.04 45.9625 8696.36 45.1227L8698.88 32.3458H8725.7L8723.18 45.3027C8741.3 46.6223 8755.16 51.2412 8764.76 59.1593C8774.48 67.0774 8779.34 77.9948 8779.34 91.9115ZM8705.54 132.762C8720.42 131.562 8731.64 127.843 8739.2 121.604C8746.76 115.366 8750.54 106.788 8750.54 95.8706C8750.54 87.3526 8747.9 80.8741 8742.62 76.4352C8737.46 71.8763 8729.42 69.117 8718.5 68.1572L8705.54 132.762ZM8646.86 105.228C8646.86 113.506 8649.44 119.925 8654.6 124.484C8659.88 128.923 8667.98 131.682 8678.9 132.762L8691.68 68.1572C8661.8 70.7966 8646.86 83.1536 8646.86 105.228Z"
          stroke="var(--bg-text)"
          strokeWidth="3"
        />
      </svg>
    </div>
  )
}
