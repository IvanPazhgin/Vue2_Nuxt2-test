// отслеживаем момент запуска приложения
export const actions = {
// метод будет вызван только 1 раз и только на сервере
  nuxtServerInit({dispatch}) {
    console.log(`nuxtServerInit`)
  }
}
