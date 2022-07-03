import { FC } from 'react'
import {
  ISvgSizeInput,
  useSvgSizeAndPathScaleGetter,
} from '../../../services/hooks/useSvgSizeAndPathScaleGetter'
import styles from './BgText.module.scss'
import svgStyles from '../Svg.module.scss'

const SVG_DATA: ISvgSizeInput = {
  svgSize: { width: 7144, height: 174 },
  sizesInRelativeUnits: { mobile: 7.44375, tablet: 8.567, desktop: 5.84375 },
}

export const StartSectionMobileBgText: FC = () => {
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
          d="M51.8059 51.323L45.146 84.7094H103.644L98.7846 108.17H40.6462L31.4664 154.189H2.1272L27.3265 27.8623H122.544L117.684 51.323H51.8059ZM242.902 67.0237C242.902 78.8142 239.722 88.9203 233.362 97.3421C227.002 105.764 218.182 111.719 206.903 115.208L228.862 154.189H198.083L178.283 118.818H153.444L146.424 154.189H117.085L142.284 27.8623H193.583C209.183 27.8623 221.302 31.2912 229.942 38.1489C238.582 45.0067 242.902 54.6316 242.902 67.0237ZM182.783 95.5375C192.503 95.5375 200.003 93.3117 205.283 88.8602C210.682 84.4087 213.382 78.0321 213.382 69.7307C213.382 63.7151 211.342 59.2034 207.263 56.1956C203.183 53.1878 197.363 51.684 189.803 51.684H166.764L157.944 95.5375H182.783ZM314.783 156.355C302.183 156.355 291.264 154.069 282.024 149.497C272.784 144.925 265.704 138.489 260.784 130.187C255.865 121.886 253.405 112.321 253.405 101.493C253.405 87.1758 256.645 74.3025 263.124 62.8729C269.724 51.323 278.904 42.2395 290.664 35.6224C302.543 29.0053 316.103 25.6967 331.343 25.6967C343.942 25.6967 354.862 27.9826 364.102 32.5544C373.341 37.1263 380.421 43.5629 385.341 51.8644C390.261 60.1659 392.721 69.7307 392.721 80.5587C392.721 94.8757 389.421 107.809 382.821 119.359C376.341 130.789 367.162 139.812 355.282 146.429C343.522 153.046 330.023 156.355 314.783 156.355ZM317.303 131.45C326.543 131.45 334.642 129.225 341.602 124.773C348.562 120.322 353.902 114.366 357.622 106.907C361.342 99.4476 363.202 91.2063 363.202 82.1829C363.202 72.558 360.202 64.9182 354.202 59.2636C348.202 53.4886 339.742 50.6012 328.823 50.6012C319.583 50.6012 311.483 52.8269 304.523 57.2784C297.563 61.73 292.224 67.6854 288.504 75.1447C284.784 82.604 282.924 90.8453 282.924 99.8687C282.924 109.494 285.924 117.194 291.924 122.968C297.923 128.623 306.383 131.45 317.303 131.45ZM542.072 27.8623L516.872 154.189H492.933L445.954 75.1447L430.115 154.189H401.316L426.515 27.8623H450.634L497.613 107.087L513.273 27.8623H542.072ZM593.121 51.684H552.803L557.662 27.8623H667.459L662.6 51.684H622.461L601.941 154.189H572.782L593.121 51.684ZM707.448 51.323L702.048 78.754H760.546L756.047 101.493H697.368L691.608 130.729H760.366L755.507 154.189H657.949L683.149 27.8623H778.366L773.506 51.323H707.448ZM919.464 27.8623L894.265 154.189H870.325L823.346 75.1447L807.507 154.189H778.708L803.907 27.8623H828.026L875.005 107.087L890.665 27.8623H919.464ZM949.274 27.8623H1002.01C1014.85 27.8623 1025.89 30.0279 1035.13 34.3591C1044.49 38.57 1051.63 44.6457 1056.55 52.5863C1061.59 60.5268 1064.11 69.851 1064.11 80.5587C1064.11 95.2367 1060.81 108.17 1054.21 119.359C1047.61 130.428 1038.37 139.03 1026.49 145.166C1014.73 151.181 1001.11 154.189 985.633 154.189H924.075L949.274 27.8623ZM986.533 130.187C996.373 130.187 1004.89 128.142 1012.09 124.051C1019.41 119.84 1024.99 114.126 1028.83 106.907C1032.67 99.5679 1034.59 91.3266 1034.59 82.1829C1034.59 72.6783 1031.53 65.2791 1025.41 59.9854C1019.29 54.5714 1010.41 51.8644 998.773 51.8644H973.754L958.094 130.187H986.533ZM1229.59 89.0406C1234.99 91.2062 1239.13 94.4547 1242.01 98.7859C1245.01 102.997 1246.51 108.17 1246.51 114.306C1246.51 127.42 1241.35 137.346 1231.03 144.083C1220.71 150.821 1206.97 154.189 1189.82 154.189H1123.76L1148.96 27.8623H1209.79C1223.35 27.8623 1233.79 30.3888 1241.11 35.4419C1248.43 40.3747 1252.09 47.4731 1252.09 56.737C1252.09 64.437 1250.05 71.0541 1245.97 76.5884C1242.01 82.0024 1236.55 86.1532 1229.59 89.0406ZM1173.44 49.8793L1167.5 79.6564H1197.19C1204.87 79.6564 1210.81 78.1525 1215.01 75.1447C1219.33 72.0166 1221.49 67.5651 1221.49 61.7901C1221.49 53.8496 1215.31 49.8793 1202.95 49.8793H1173.44ZM1191.62 132.172C1199.77 132.172 1206.13 130.608 1210.69 127.48C1215.25 124.352 1217.53 119.84 1217.53 113.945C1217.53 105.283 1211.23 100.951 1198.63 100.951H1163.36L1157.24 132.172H1191.62ZM1351.03 127.119H1292.35L1275.97 154.189H1244.83L1326.37 27.8623H1355.17L1386.13 154.189H1356.97L1351.03 127.119ZM1346.17 104.922L1335.55 56.1956L1305.85 104.922H1346.17ZM1463.68 156.355C1451.08 156.355 1440.04 154.069 1430.56 149.497C1421.2 144.925 1414 138.489 1408.96 130.187C1403.92 121.886 1401.4 112.321 1401.4 101.493C1401.4 87.1758 1404.64 74.3025 1411.12 62.8729C1417.72 51.323 1426.96 42.2395 1438.84 35.6224C1450.72 29.0053 1464.34 25.6967 1479.7 25.6967C1490.98 25.6967 1500.94 27.6217 1509.58 31.4716C1518.22 35.3216 1524.76 40.8559 1529.2 48.0746L1508.14 65.3995C1501.42 55.5339 1491.28 50.6012 1477.72 50.6012C1468.48 50.6012 1460.32 52.7668 1453.24 57.098C1446.16 61.4292 1440.64 67.3244 1436.68 74.7837C1432.84 82.243 1430.92 90.5445 1430.92 99.6882C1430.92 109.433 1433.98 117.194 1440.1 122.968C1446.34 128.623 1455.04 131.45 1466.2 131.45C1479.52 131.45 1490.68 126.578 1499.68 116.833L1516.96 134.518C1504.48 149.076 1486.72 156.355 1463.68 156.355ZM1606.49 86.3336L1650.23 154.189H1617.47L1585.07 104.741L1564.73 122.788L1558.43 154.189H1529.45L1554.65 27.8623H1583.63L1572.11 85.7922L1637.45 27.8623H1672.73L1606.49 86.3336ZM1712.19 51.323L1706.79 78.754H1765.28L1760.78 101.493H1702.11L1696.35 130.729H1765.1L1760.24 154.189H1662.69L1687.89 27.8623H1783.1L1778.24 51.323H1712.19ZM1924.2 27.8623L1899 154.189H1875.06L1828.08 75.1447L1812.25 154.189H1783.45L1808.65 27.8623H1832.76L1879.74 107.087L1895.4 27.8623H1924.2ZM1954.01 27.8623H2006.75C2019.59 27.8623 2030.63 30.0279 2039.87 34.3591C2049.23 38.57 2056.37 44.6457 2061.29 52.5863C2066.33 60.5268 2068.85 69.851 2068.85 80.5587C2068.85 95.2367 2065.55 108.17 2058.95 119.359C2052.35 130.428 2043.11 139.03 2031.23 145.166C2019.47 151.181 2005.85 154.189 1990.37 154.189H1928.81L1954.01 27.8623ZM1991.27 130.187C2001.11 130.187 2009.63 128.142 2016.83 124.051C2024.15 119.84 2029.73 114.126 2033.57 106.907C2037.41 99.5679 2039.33 91.3266 2039.33 82.1829C2039.33 72.6783 2036.27 65.2791 2030.15 59.9854C2024.03 54.5714 2015.15 51.8644 2003.51 51.8644H1978.49L1962.83 130.187H1991.27ZM2187.89 156.355C2172.05 156.355 2159.63 152.445 2150.63 144.625C2141.63 136.684 2137.13 125.856 2137.13 112.14C2137.13 108.17 2137.62 103.658 2138.58 98.6054L2152.61 27.8623H2181.95L2167.91 98.064C2167.19 102.034 2166.83 105.583 2166.83 108.712C2166.83 116.291 2168.87 122.006 2172.95 125.856C2177.15 129.586 2183.21 131.45 2191.13 131.45C2200.01 131.45 2207.09 128.804 2212.37 123.51C2217.65 118.216 2221.49 109.734 2223.89 98.064L2237.93 27.8623H2266.55L2252.33 99.8687C2244.65 137.526 2223.17 156.355 2187.89 156.355ZM2295.55 27.8623H2324.89L2299.69 154.189H2270.35L2295.55 27.8623ZM2448.06 2.23596H2474.34L2381.82 172.236H2355.72L2448.06 2.23596ZM2561.24 156.355C2545.4 156.355 2532.98 152.445 2523.98 144.625C2514.98 136.684 2510.48 125.856 2510.48 112.14C2510.48 108.17 2510.96 103.658 2511.92 98.6054L2525.96 27.8623H2555.3L2541.26 98.064C2540.54 102.034 2540.18 105.583 2540.18 108.712C2540.18 116.291 2542.22 122.006 2546.3 125.856C2550.5 129.586 2556.56 131.45 2564.48 131.45C2573.36 131.45 2580.44 128.804 2585.72 123.51C2591 118.216 2594.84 109.734 2597.24 98.064L2611.28 27.8623H2639.9L2625.68 99.8687C2618 137.526 2596.52 156.355 2561.24 156.355ZM2720.06 90.4844L2754.62 154.189H2723.12L2700.8 111.238L2662.64 154.189H2627.72L2688.02 88.6797L2655.44 27.8623H2686.58L2707.64 68.4674L2744.36 27.8623H2777.47L2720.06 90.4844ZM2846.61 27.8623H2899.34C2912.18 27.8623 2923.22 30.0279 2932.46 34.3591C2941.82 38.57 2948.96 44.6457 2953.88 52.5863C2958.92 60.5268 2961.44 69.851 2961.44 80.5587C2961.44 95.2367 2958.14 108.17 2951.54 119.359C2944.94 130.428 2935.7 139.03 2923.82 145.166C2912.06 151.181 2898.44 154.189 2882.96 154.189H2821.41L2846.61 27.8623ZM2883.86 130.187C2893.7 130.187 2902.22 128.142 2909.42 124.051C2916.74 119.84 2922.32 114.126 2926.16 106.907C2930 99.5679 2931.92 91.3266 2931.92 82.1829C2931.92 72.6783 2928.86 65.2791 2922.74 59.9854C2916.62 54.5714 2907.74 51.8644 2896.1 51.8644H2871.08L2855.43 130.187H2883.86ZM3019.61 51.323L3014.21 78.754H3072.71L3068.21 101.493H3009.53L3003.77 130.729H3072.53L3067.67 154.189H2970.11L2995.31 27.8623H3090.53L3085.67 51.323H3019.61ZM3134.79 156.355C3124.83 156.355 3115.29 155.031 3106.17 152.385C3097.05 149.738 3089.73 146.369 3084.21 142.278L3096.09 119.72C3101.85 123.931 3108.33 127.179 3115.53 129.465C3122.73 131.751 3130.11 132.894 3137.67 132.894C3145.71 132.894 3152.07 131.571 3156.75 128.924C3161.43 126.277 3163.77 122.668 3163.77 118.096C3163.77 114.366 3161.91 111.539 3158.19 109.614C3154.47 107.569 3148.53 105.403 3140.37 103.117C3132.21 100.711 3125.55 98.4249 3120.39 96.2593C3115.23 93.9734 3110.73 90.6047 3106.89 86.1532C3103.17 81.7016 3101.31 75.8064 3101.31 68.4674C3101.31 59.9253 3103.65 52.4058 3108.33 45.909C3113.13 39.4122 3119.85 34.4193 3128.49 30.9302C3137.25 27.4412 3147.39 25.6967 3158.91 25.6967C3167.43 25.6967 3175.47 26.6592 3183.03 28.5842C3190.59 30.3888 3197.07 33.0357 3202.47 36.5247L3191.49 58.9026C3186.81 55.6542 3181.53 53.248 3175.65 51.684C3169.77 49.9996 3163.65 49.1574 3157.29 49.1574C3149.01 49.1574 3142.47 50.6012 3137.67 53.4886C3132.87 56.3761 3130.47 60.1057 3130.47 64.6776C3130.47 67.4447 3131.49 69.7908 3133.53 71.7158C3135.57 73.5205 3138.15 75.0244 3141.27 76.2275C3144.39 77.3103 3148.77 78.6337 3154.41 80.1978C3162.45 82.3634 3169.05 84.5891 3174.21 86.875C3179.37 89.0406 3183.75 92.289 3187.35 96.6203C3191.07 100.831 3192.93 106.426 3192.93 113.404C3192.93 122.066 3190.53 129.646 3185.73 136.143C3180.93 142.519 3174.15 147.512 3165.39 151.121C3156.63 154.61 3146.43 156.355 3134.79 156.355ZM3230.85 27.8623H3260.19L3234.99 154.189H3205.65L3230.85 27.8623ZM3362.99 89.0406H3389.63L3379.19 141.015C3372.83 145.948 3365.45 149.738 3357.05 152.385C3348.65 155.031 3339.95 156.355 3330.95 156.355C3318.35 156.355 3307.37 154.069 3298.01 149.497C3288.65 144.925 3281.39 138.489 3276.23 130.187C3271.19 121.886 3268.67 112.321 3268.67 101.493C3268.67 87.1758 3271.97 74.2423 3278.57 62.6924C3285.17 51.1425 3294.47 42.1192 3306.47 35.6224C3318.47 29.0053 3332.27 25.6967 3347.87 25.6967C3359.87 25.6967 3370.25 27.5615 3379.01 31.2912C3387.89 35.0208 3395.03 40.495 3400.43 47.7137L3379.55 64.6776C3375.35 59.7448 3370.61 56.1956 3365.33 54.03C3360.05 51.7441 3353.81 50.6012 3346.61 50.6012C3337.01 50.6012 3328.55 52.7668 3321.23 57.098C3313.91 61.3089 3308.21 67.144 3304.13 74.6033C3300.17 82.0626 3298.19 90.4242 3298.19 99.6882C3298.19 109.433 3301.31 117.194 3307.55 122.968C3313.91 128.623 3322.97 131.45 3334.73 131.45C3342.17 131.45 3349.13 129.947 3355.61 126.939L3362.99 89.0406ZM3544.33 27.8623L3519.13 154.189H3495.2L3448.22 75.1447L3432.38 154.189H3403.58L3428.78 27.8623H3452.9L3499.88 107.087L3515.53 27.8623H3544.33ZM3649.6 51.323L3642.94 84.7094H3701.44L3696.58 108.17H3638.44L3629.26 154.189H3599.92L3625.12 27.8623H3720.34L3715.48 51.323H3649.6ZM3840.69 67.0237C3840.69 78.8142 3837.51 88.9203 3831.15 97.3421C3824.8 105.764 3815.98 111.719 3804.7 115.208L3826.66 154.189H3795.88L3776.08 118.818H3751.24L3744.22 154.189H3714.88L3740.08 27.8623H3791.38C3806.98 27.8623 3819.1 31.2912 3827.73 38.1489C3836.37 45.0067 3840.69 54.6316 3840.69 67.0237ZM3780.58 95.5375C3790.3 95.5375 3797.8 93.3117 3803.08 88.8602C3808.48 84.4087 3811.18 78.0321 3811.18 69.7307C3811.18 63.7151 3809.14 59.2034 3805.06 56.1956C3800.98 53.1878 3795.16 51.684 3787.6 51.684H3764.56L3755.74 95.5375H3780.58ZM3912.58 156.355C3899.98 156.355 3889.06 154.069 3879.82 149.497C3870.58 144.925 3863.5 138.489 3858.58 130.187C3853.66 121.886 3851.2 112.321 3851.2 101.493C3851.2 87.1758 3854.44 74.3025 3860.92 62.8729C3867.52 51.323 3876.7 42.2395 3888.46 35.6224C3900.34 29.0053 3913.9 25.6967 3929.14 25.6967C3941.74 25.6967 3952.65 27.9826 3961.89 32.5544C3971.13 37.1263 3978.21 43.5629 3983.13 51.8644C3988.05 60.1659 3990.51 69.7307 3990.51 80.5587C3990.51 94.8757 3987.21 107.809 3980.61 119.359C3974.13 130.789 3964.95 139.812 3953.07 146.429C3941.32 153.046 3927.82 156.355 3912.58 156.355ZM3915.1 131.45C3924.34 131.45 3932.44 129.225 3939.4 124.773C3946.36 120.322 3951.69 114.366 3955.41 106.907C3959.13 99.4476 3960.99 91.2063 3960.99 82.1829C3960.99 72.558 3957.99 64.9182 3951.99 59.2636C3946 53.4886 3937.54 50.6012 3926.62 50.6012C3917.38 50.6012 3909.28 52.8269 3902.32 57.2784C3895.36 61.73 3890.02 67.6854 3886.3 75.1447C3882.58 82.604 3880.72 90.8453 3880.72 99.8687C3880.72 109.494 3883.72 117.194 3889.72 122.968C3895.72 128.623 3904.18 131.45 3915.1 131.45ZM4139.87 27.8623L4114.67 154.189H4090.73L4043.75 75.1447L4027.91 154.189H3999.11L4024.31 27.8623H4048.43L4095.41 107.087L4111.07 27.8623H4139.87ZM4190.91 51.684H4150.6L4155.46 27.8623H4265.25L4260.39 51.684H4220.25L4199.73 154.189H4170.58L4190.91 51.684ZM4305.24 51.323L4299.84 78.754H4358.34L4353.84 101.493H4295.16L4289.4 130.729H4358.16L4353.3 154.189H4255.74L4280.94 27.8623H4376.16L4371.3 51.323H4305.24ZM4517.26 27.8623L4492.06 154.189H4468.12L4421.14 75.1447L4405.3 154.189H4376.5L4401.7 27.8623H4425.82L4472.8 107.087L4488.46 27.8623H4517.26ZM4547.07 27.8623H4599.81C4612.65 27.8623 4623.69 30.0279 4632.92 34.3591C4642.28 38.57 4649.42 44.6457 4654.34 52.5863C4659.38 60.5268 4661.9 69.851 4661.9 80.5587C4661.9 95.2367 4658.6 108.17 4652 119.359C4645.4 130.428 4636.16 139.03 4624.28 145.166C4612.53 151.181 4598.91 154.189 4583.43 154.189H4521.87L4547.07 27.8623ZM4584.33 130.187C4594.17 130.187 4602.69 128.142 4609.89 124.051C4617.21 119.84 4622.79 114.126 4626.63 106.907C4630.47 99.5679 4632.38 91.3266 4632.38 82.1829C4632.38 72.6783 4629.32 65.2791 4623.2 59.9854C4617.09 54.5714 4608.21 51.8644 4596.57 51.8644H4571.55L4555.89 130.187H4584.33ZM4827.39 89.0406C4832.79 91.2062 4836.93 94.4547 4839.81 98.7859C4842.81 102.997 4844.31 108.17 4844.31 114.306C4844.31 127.42 4839.15 137.346 4828.83 144.083C4818.51 150.821 4804.77 154.189 4787.61 154.189H4721.55L4746.75 27.8623H4807.59C4821.15 27.8623 4831.59 30.3888 4838.91 35.4419C4846.23 40.3747 4849.89 47.4731 4849.89 56.737C4849.89 64.437 4847.85 71.0541 4843.77 76.5884C4839.81 82.0024 4834.35 86.1532 4827.39 89.0406ZM4771.23 49.8793L4765.29 79.6564H4794.99C4802.67 79.6564 4808.61 78.1525 4812.81 75.1447C4817.13 72.0166 4819.29 67.5651 4819.29 61.7901C4819.29 53.8496 4813.11 49.8793 4800.75 49.8793H4771.23ZM4789.41 132.172C4797.57 132.172 4803.93 130.608 4808.49 127.48C4813.05 124.352 4815.33 119.84 4815.33 113.945C4815.33 105.283 4809.03 100.951 4796.43 100.951H4761.15L4755.03 132.172H4789.41ZM4948.82 127.119H4890.14L4873.76 154.189H4842.62L4924.16 27.8623H4952.96L4983.92 154.189H4954.76L4948.82 127.119ZM4943.96 104.922L4933.34 56.1956L4903.64 104.922H4943.96ZM5061.47 156.355C5048.87 156.355 5037.83 154.069 5028.35 149.497C5018.99 144.925 5011.79 138.489 5006.75 130.187C5001.71 121.886 4999.19 112.321 4999.19 101.493C4999.19 87.1758 5002.43 74.3025 5008.91 62.8729C5015.51 51.323 5024.75 42.2395 5036.63 35.6224C5048.51 29.0053 5062.13 25.6967 5077.49 25.6967C5088.77 25.6967 5098.73 27.6217 5107.37 31.4716C5116.01 35.3216 5122.55 40.8559 5126.99 48.0746L5105.93 65.3995C5099.21 55.5339 5089.07 50.6012 5075.51 50.6012C5066.27 50.6012 5058.11 52.7668 5051.03 57.098C5043.95 61.4292 5038.43 67.3244 5034.47 74.7837C5030.63 82.243 5028.71 90.5445 5028.71 99.6882C5028.71 109.433 5031.77 117.194 5037.89 122.968C5044.13 128.623 5052.83 131.45 5063.99 131.45C5077.31 131.45 5088.47 126.578 5097.47 116.833L5114.75 134.518C5102.27 149.076 5084.51 156.355 5061.47 156.355ZM5204.28 86.3336L5248.02 154.189H5215.26L5182.86 104.741L5162.52 122.788L5156.22 154.189H5127.24L5152.44 27.8623H5181.42L5169.9 85.7922L5235.24 27.8623H5270.52L5204.28 86.3336ZM5309.98 51.323L5304.58 78.754H5363.08L5358.58 101.493H5299.9L5294.14 130.729H5362.9L5358.04 154.189H5260.48L5285.68 27.8623H5380.9L5376.04 51.323H5309.98ZM5522 27.8623L5496.8 154.189H5472.86L5425.88 75.1447L5410.04 154.189H5381.24L5406.44 27.8623H5430.56L5477.54 107.087L5493.2 27.8623H5522ZM5551.81 27.8623H5604.54C5617.38 27.8623 5628.42 30.0279 5637.66 34.3591C5647.02 38.57 5654.16 44.6457 5659.08 52.5863C5664.12 60.5268 5666.64 69.851 5666.64 80.5587C5666.64 95.2367 5663.34 108.17 5656.74 119.359C5650.14 130.428 5640.9 139.03 5629.02 145.166C5617.26 151.181 5603.64 154.189 5588.16 154.189H5526.61L5551.81 27.8623ZM5589.06 130.187C5598.9 130.187 5607.42 128.142 5614.62 124.051C5621.94 119.84 5627.52 114.126 5631.36 106.907C5635.2 99.5679 5637.12 91.3266 5637.12 82.1829C5637.12 72.6783 5634.06 65.2791 5627.94 59.9854C5621.82 54.5714 5612.94 51.8644 5601.3 51.8644H5576.28L5560.63 130.187H5589.06ZM5785.69 156.355C5769.85 156.355 5757.43 152.445 5748.43 144.625C5739.43 136.684 5734.93 125.856 5734.93 112.14C5734.93 108.17 5735.41 103.658 5736.37 98.6054L5750.41 27.8623H5779.75L5765.71 98.064C5764.99 102.034 5764.63 105.583 5764.63 108.712C5764.63 116.291 5766.67 122.006 5770.75 125.856C5774.95 129.586 5781.01 131.45 5788.93 131.45C5797.81 131.45 5804.89 128.804 5810.17 123.51C5815.45 118.216 5819.29 109.734 5821.69 98.064L5835.73 27.8623H5864.34L5850.13 99.8687C5842.45 137.526 5820.97 156.355 5785.69 156.355ZM5893.34 27.8623H5922.68L5897.48 154.189H5868.14L5893.34 27.8623ZM6045.85 2.23596H6072.13L5979.62 172.236H5953.52L6045.85 2.23596ZM6159.04 156.355C6143.2 156.355 6130.78 152.445 6121.78 144.625C6112.78 136.684 6108.28 125.856 6108.28 112.14C6108.28 108.17 6108.76 103.658 6109.72 98.6054L6123.76 27.8623H6153.1L6139.06 98.064C6138.34 102.034 6137.98 105.583 6137.98 108.712C6137.98 116.291 6140.02 122.006 6144.1 125.856C6148.3 129.586 6154.36 131.45 6162.28 131.45C6171.16 131.45 6178.24 128.804 6183.52 123.51C6188.8 118.216 6192.64 109.734 6195.04 98.064L6209.07 27.8623H6237.69L6223.47 99.8687C6215.79 137.526 6194.32 156.355 6159.04 156.355ZM6317.85 90.4844L6352.41 154.189H6320.91L6298.59 111.238L6260.43 154.189H6225.51L6285.81 88.6797L6253.23 27.8623H6284.37L6305.43 68.4674L6342.15 27.8623H6375.27L6317.85 90.4844ZM6444.4 27.8623H6497.14C6509.98 27.8623 6521.02 30.0279 6530.26 34.3591C6539.62 38.57 6546.76 44.6457 6551.68 52.5863C6556.72 60.5268 6559.24 69.851 6559.24 80.5587C6559.24 95.2367 6555.94 108.17 6549.34 119.359C6542.74 130.428 6533.5 139.03 6521.62 145.166C6509.86 151.181 6496.24 154.189 6480.76 154.189H6419.2L6444.4 27.8623ZM6481.66 130.187C6491.5 130.187 6500.02 128.142 6507.22 124.051C6514.54 119.84 6520.12 114.126 6523.96 106.907C6527.8 99.5679 6529.72 91.3266 6529.72 82.1829C6529.72 72.6783 6526.66 65.2791 6520.54 59.9854C6514.42 54.5714 6505.54 51.8644 6493.9 51.8644H6468.88L6453.22 130.187H6481.66ZM6617.41 51.323L6612 78.754H6670.5L6666 101.493H6607.33L6601.57 130.729H6670.32L6665.46 154.189H6567.91L6593.11 27.8623H6688.32L6683.46 51.323H6617.41ZM6732.58 156.355C6722.62 156.355 6713.08 155.031 6703.96 152.385C6694.84 149.738 6687.52 146.369 6682 142.278L6693.88 119.72C6699.64 123.931 6706.12 127.179 6713.32 129.465C6720.52 131.751 6727.9 132.894 6735.46 132.894C6743.5 132.894 6749.86 131.571 6754.54 128.924C6759.22 126.277 6761.56 122.668 6761.56 118.096C6761.56 114.366 6759.7 111.539 6755.98 109.614C6752.26 107.569 6746.32 105.403 6738.16 103.117C6730 100.711 6723.34 98.4249 6718.18 96.2593C6713.02 93.9734 6708.52 90.6047 6704.68 86.1532C6700.96 81.7016 6699.1 75.8064 6699.1 68.4674C6699.1 59.9253 6701.44 52.4058 6706.12 45.909C6710.92 39.4122 6717.64 34.4193 6726.28 30.9302C6735.04 27.4412 6745.18 25.6967 6756.7 25.6967C6765.22 25.6967 6773.26 26.6592 6780.82 28.5842C6788.38 30.3888 6794.86 33.0357 6800.26 36.5247L6789.28 58.9026C6784.6 55.6542 6779.32 53.248 6773.44 51.684C6767.56 49.9996 6761.44 49.1574 6755.08 49.1574C6746.8 49.1574 6740.26 50.6012 6735.46 53.4886C6730.66 56.3761 6728.26 60.1057 6728.26 64.6776C6728.26 67.4447 6729.28 69.7908 6731.32 71.7158C6733.36 73.5205 6735.94 75.0244 6739.06 76.2275C6742.18 77.3103 6746.56 78.6337 6752.2 80.1978C6760.24 82.3634 6766.84 84.5891 6772 86.875C6777.16 89.0406 6781.54 92.289 6785.14 96.6203C6788.86 100.831 6790.72 106.426 6790.72 113.404C6790.72 122.066 6788.32 129.646 6783.52 136.143C6778.72 142.519 6771.94 147.512 6763.18 151.121C6754.42 154.61 6744.22 156.355 6732.58 156.355ZM6828.65 27.8623H6857.99L6832.79 154.189H6803.45L6828.65 27.8623ZM6960.78 89.0406H6987.42L6976.98 141.015C6970.62 145.948 6963.24 149.738 6954.85 152.385C6946.45 155.031 6937.75 156.355 6928.75 156.355C6916.15 156.355 6905.17 154.069 6895.81 149.497C6886.45 144.925 6879.19 138.489 6874.03 130.187C6868.99 121.886 6866.47 112.321 6866.47 101.493C6866.47 87.1758 6869.77 74.2423 6876.37 62.6924C6882.97 51.1425 6892.27 42.1192 6904.27 35.6224C6916.27 29.0053 6930.07 25.6967 6945.67 25.6967C6957.66 25.6967 6968.04 27.5615 6976.8 31.2912C6985.68 35.0208 6992.82 40.495 6998.22 47.7137L6977.34 64.6776C6973.14 59.7448 6968.4 56.1956 6963.12 54.03C6957.84 51.7441 6951.61 50.6012 6944.41 50.6012C6934.81 50.6012 6926.35 52.7668 6919.03 57.098C6911.71 61.3089 6906.01 67.144 6901.93 74.6033C6897.97 82.0626 6895.99 90.4242 6895.99 99.6882C6895.99 109.433 6899.11 117.194 6905.35 122.968C6911.71 128.623 6920.77 131.45 6932.53 131.45C6939.97 131.45 6946.93 129.947 6953.41 126.939L6960.78 89.0406ZM7142.13 27.8623L7116.93 154.189H7092.99L7046.01 75.1447L7030.17 154.189H7001.37L7026.57 27.8623H7050.69L7097.67 107.087L7113.33 27.8623H7142.13Z"
          stroke="var(--bg-text)"
          strokeWidth="3"
        />
      </svg>
    </div>
  )
}
