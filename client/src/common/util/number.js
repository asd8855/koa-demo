/**
 *
 * @private
 */
const _util = {
  /**
   *
   * @param number
   * @returns {number}
   */
  getDecimals(number) {

    let numberStr = '', numberArray = []

    if (!number || isNaN(number)) {
      throw `Please input a correct number.`
      return -1
    }

    numberStr += number

    if (numberStr.indexOf('.') <= 0) {
      return 0
    }

    numberArray = numberStr.split('.')

    return numberArray[1].length
  },
  /**
   *
   * @param floatA
   * @param floatB
   * @returns {*}
   */
  formatFloat(floatA, floatB) {
    //计算小数位数和最大的小数位数
    let adLength = 0, bdLength = 0, maxLength = 0
    let ia = 0, ib = 0, transfer = 0

    if (isNaN(floatA) || isNaN(floatB)) {
      console.warn(`${floatA} or ${floatB} is not a Number.`)
      return null
    }

    adLength = this.getDecimals(floatA)
    bdLength = this.getDecimals(floatB)

    maxLength = Math.max(adLength, bdLength)

    transfer = Math.pow(10, maxLength)

    ia = floatA * transfer
    ib = floatB * transfer

    return { ia, ib, transfer }
  },
  /**
   *
   * @param floatA
   * @param floatB
   * @param type
   * @returns {number}
   */
  floatCalculate(floatA, floatB, type) {
    let fResult = 0.0

    let ffResult = _util.formatFloat(floatA, floatB)
    if (!ffResult) {
      throw `Please input a correct number.`
      return NaN
    }

    let { ia, ib, transfer } = ffResult

    switch (type) {
      case '+':
        fResult = (ia + ib) / transfer
        break
      case '-':
        fResult = (ia - ib) / transfer
        break
      case '*':
        fResult = (ia * ib) / transfer / transfer
        break
      case '/':
        break
        fResult = ia / ib
      default:
        break
    }
    return fResult
  }
}

const chineseReg = /^[\u4e00-\u9fa5]+$/

const NumberUtil = {

  /**
   * format currency
   * @param number the number that need to be formatted
   * @param decimals reserved effective number of digits
   * @param prefix currency symbol
   * @returns {string} eg: ¥1,234,567.89
   * <p>
   *     input: NumberFormat.formatCurrency(1234567.8934);
   *     output: ¥1,234,567.89
   * </p>
   */
  formatCurrency(number, decimals = 2, prefix) {

    if (isNaN(number)) {
      console.warn(`[NumberFormat.formatCurrency]: The input number ${number} cannot be converted to a number.`)
      number = 0
    }

    number = +number

    number = number.toFixed(decimals)

    if (chineseReg.test(prefix)) {
      return `${number.toLocaleString()}${prefix}`
    }
    if (prefix) {
      return `${prefix}${number.toLocaleString()}`
    }
    return `${number.toLocaleString()}`

  },
  /**
   * Plus two numbers
   * @param floatA
   * @param floatB
   */
  floatPlus(floatA = 0.0, floatB = 0.0) {

    return _util.floatCalculate(floatA, floatB, '+')

  },
  /**
   * Minus two numbers
   * @param floatA
   * @param floatB
   */
  floatMinus(floatA = 0.0, floatB = 0.0) {

    return _util.floatCalculate(floatA, floatB, '-')

  },
  /**
   * Multiplication two numbers
   * @param floatA
   * @param floatB
   * @returns {*|number}
   */
  floatMultiplication(floatA = 0.0, floatB = 0.0) {

    return _util.floatCalculate(floatA, floatB, '*')

  },
  /**
   * Division two numbers
   * @param floatA
   * @param floatB
   * @param decimals
   */
  floatDivision(floatA = 0.0, floatB = 0.0, decimals = 2) {

    let result = _util.floatCalculate(floatA, floatB, '/')

    if (isNaN(result)) {
      throw `Please input a correct number.`
      return
    }

    let { ia, ib } = _util.formatFloat(floatA, floatB)

    if (ia % ib == 0) {
      return result
    } else {
      return result.toFixed(decimals)
    }
  }
}

export default NumberUtil
