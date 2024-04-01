function calculations (typeRisk , max_power_hp , cityRiskIndex ) {
  const multipier = randomNumberInRange = 0.9 + Math.random() * 0.2
  const  base = typeRisk + (max_power_hp * 0.15) + cityRiskIndex
  const result = base * multipier
  return result
}
module.exports = calculations