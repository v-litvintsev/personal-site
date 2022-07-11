import { FC } from 'react'
import { YMInitializer } from 'react-yandex-metrika'

const YandexMetrika: FC = () => (
  <YMInitializer
    accounts={[89498283]}
    options={{
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
    }}
  />
)

export default YandexMetrika
