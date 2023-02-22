import './modal/index'
import './select/index'

const setAttributes = (element, attributes) => {
  const whiteList = ['success', 'fail', 'compelte']
  const keys = Object.keys(attributes)

  keys.forEach((key) => {
    if (whiteList.indexOf(key) > -1) return

    let value = attributes[key]
    if (typeof value === 'object') value = JSON.stringify(value)
    value && element.setAttribute(key, value)
  })
}

export default {
  multiLevelSelect(attributes) {
    const createSelect = () => {
      const el = document.createElement('private-multi-level-select')

      setAttributes(el, attributes)
      document.body.appendChild(el)

      return el
    }

    return new Promise((resolve, reject) => {
      try {
        const optionSheet = createSelect()
        optionSheet.addEventListener('select', (event: any) => {
          event.stopPropagation()
          document.body.removeChild(optionSheet)
          resolve(event && event.detail)
        })

        optionSheet.addEventListener('cancel', (event) => {
          event.stopPropagation()
          document.body.removeChild(optionSheet)
        })
      } catch (e) {
        reject(`${e}`)
      }
    })
  }
}
