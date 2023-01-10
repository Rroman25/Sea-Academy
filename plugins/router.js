import pick from 'lodash.pick'
import { utmQueryParams } from '~/application/utm'

/**
 * @type { NuxtPlugin }
 */
export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
    const fromUtmParams = pick(from.query, utmQueryParams)
    const departureHasUmts = hasKeys(fromUtmParams)

    const toUtmParams = pick(to.query, utmQueryParams)
    const destinationHasUtms = hasKeys(toUtmParams)

    if (departureHasUmts && !destinationHasUtms && hasKeys(from.query)) {
      next({ name: to.name, query: { ...fromUtmParams, ...to.query }, params: to.params })
    } else {
      next()
    }
  })
}

const hasKeys = (obj) => {
  return Object.keys(obj).length > 0
}
