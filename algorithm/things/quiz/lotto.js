const LOTTO_PRICE = 1000

const data = {
  MATCH_THREE: 3,
  MATCH_FOUR: 4,
  MATCH_FIVE: 5,
  MATCH_SIX: 6,
  THREE_PRIZEMONEY: 5000,
  FOUR_PRIZEMONEY: 50000,
  FIVE_PRIZEMONEY: 1500000,
  SIX_PRIZEMONEY: 2000000000
}

const buyLottos = moneyPaid => {
  const numberOfLottos = moneyPaid / LOTTO_PRICE
  const lottos = makeLottos(numberOfLottos)

  logBuyLottos(lottos, moneyPaid)
  return lottos
}

const makeLottos = number => {
  const lottos = []
  // 이 코드는 빈 배열에 number만큼 넣어야 하는 코드라서, forEach나 for-of, for-in 같은 메서드를 못써서, 어쩔수 없이 for문을 썻는데 더 좋은 방법이 있을까요...?
  for (let i = 0; i < number; i++) {
    lottos.push(makeLotto())
  }
  return lottos
}

const makeLotto = () => {
  let lotto = new Set()
  const lottoLength = 6
  while (lotto.size < lottoLength) {
    lotto.add(getRandomNumber())
  }
  return [...lotto]
}

const getRandomNumber = () => {
  const maxNumber = 45
  const minNumber = 1
  return Math.floor(Math.random() * maxNumber) + minNumber
}

const logBuyLottos = (lottos, moneyPaid) => {
  console.log(`> buyLottos(${moneyPaid});`)
  console.log(`> 로또 ${lottos.length}개를 발행했습니다.`)
  lottos.forEach(lotto => console.log(lotto))
}

// 요구사항으로 주신 setLuckeyNumber는 luckey number를 set하는 역할만 해야하는거 같아서요... ㅠ 혹시 function으로 class 처럼 만들어서 코딩해야하나요...?
const setLuckeyNumber = luckeyNumber => luckeyNumber

const compareLottos = (lottos, luckeyNumber) => {
  const matchedCountsOfLotto = lottos.map(lotto => getMatchCount(lotto, luckeyNumber))
  const lottoResults = getLottoResults(matchedCountsOfLotto)
  logLottoResult(lottoResults);
}

const getMatchCount = (lotto, luckeyNumber) => {
  const allNumber = [...lotto, ...luckeyNumber]
  const removedDuplicationNumbers = new Set(allNumber)
  const matchCount = allNumber.length - removedDuplicationNumbers.size
  return matchCount
}

const getLottoResults = matchedCounts => {
  const totalPrizeMoney = getTotalPrizeMoney(matchedCounts)
  const matchData = getMatchData(matchedCounts)
  const profitRate = getProfitRate(matchedCounts, totalPrizeMoney)
  return { matchData, profitRate }
}

const getTotalPrizeMoney = (matchedCounts) => {
  return matchedCounts.reduce((totalPrizeMoney, matchedCount) => {
    switch (matchedCount) {
      case data['MATCH_THREE']:
        return totalPrizeMoney + (data['THREE_PRIZEMONEY'] * data['MATCH_THREE'])
      case data['MATCH_FOUR']:
        return totalPrizeMoney + (data['FOUR_PRIZEMONEY'] * data['MATCH_FOUR'])
      case data['MATCH_FIVE']:
        return totalPrizeMoney + (data['FIVE_PRIZEMONEY'] * data['MATCH_FIVE'])
      case data['MATCH_SIX']:
        return totalPrizeMoney + (data['SIX_PRIZEMONEY'] * data['MATCH_SIX'])
      default: 
        return totalPrizeMoney
    }
  }, 0)
}

const getMatchData = (matchedCounts) => {
  const matchData = {
    THREE: 0,
    FOUR: 0,
    FIVE: 0,
    SIX: 0,
  }
  matchedCounts.forEach((matchedCount) => {
    switch (matchedCount) {
      case data['MATCH_THREE']: return matchData['THREE']++
      case data['MATCH_FOUR']: return matchData['FOUR']++
      case data['MATCH_FIVE']: return matchData['FIVE']++
      case data['MATCH_SIX']: return matchData['SIX']++
      default: return matchData
    }
  })
  return matchData
}

const getProfitRate = (matchedCounts, totalPrizeMoney) => {
  const lottoCounts = matchedCounts.length
  const inputMoney = lottoCounts * LOTTO_PRICE
  const PERCENT = 100
  return Math.floor(totalPrizeMoney / inputMoney  * PERCENT)
}

const logLottoResult = ({ matchData, profitRate}) => {
  console.log(`\n > 당첨 통계 \n ------------ \n 3개 일치 (5000원) - ${matchData['THREE']}개 \n 4개 일치 (50000원) - ${matchData['FOUR']}개 \n 5개 일치 (1500000원) - ${matchData['FIVE']}개 \n 6개 일치 (2000000000원) - ${matchData['SIX']}개 \n 나의 수익률은 ${profitRate}%입니다.`)
}

const lottos = buyLottos(14000)
const luckeyNumber = setLuckeyNumber([13, 22, 6, 34, 18, 43])
compareLottos(lottos, luckeyNumber)
