let VALUES = {
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  6: 5,
  7: 6,
  8: 7,
  9: 8,
  10: 9,
  "J": 10,
  "Q": 11,
  "K": 12,
  "A": 13,
}

class WinningHand {
  constructor(hand) {
  this.hand = hand;
  this.values = hand.map((card) => card.value);
  this.suits = hand.map((card) => card.suit)
  }

  royalFlush(){
    let royals = [10, 'J', 'Q', 'K', 'A']
    let suit = this.hand[0].suit

    for (let i = 0; i < royals.length; i++) {
      if (!this.values.includes(royals[i]))
        return false
    }
    return this.hand.every(card => card.suit === suit)
  };

  straightFlush() {
    return this.flush() && this.straight();
  }

  fourAandKicker() {
    let cardHash = this.values.hashCounter();
    let kicker = 0;
    Object.keys(cardHash).forEach((key) => {
      if (cardHash[key] === 1)
        kicker = key
    })

    return this.fourA() && ['2', '3', '4'].includes(kicker)
  }

  four234andKicker() {
    let cardHash = this.values.hashCounter();
    let kicker = 0;
    Object.keys(cardHash).forEach((key) => {
      if (cardHash[key] === 1)
        kicker = key
    })

    return this.four234() && ['A','2','3','4'].includes(kicker)
  }

  fourA() {
    let cardHash = this.values.hashCounter();
    Object.keys(cardHash).forEach((key) => {
      if (cardHash[key] !== 4)
        delete cardHash[key]
    })

    let keys = Object.keys(cardHash);

    return keys[0] === 'A'
  }

  four234() {
    let cardHash = this.values.hashCounter();
    Object.keys(cardHash).forEach((key) => {
      if (cardHash[key] !== 4)
        delete cardHash[key]
    })

    let keys = Object.keys(cardHash);

    return [2, 3, 4].includes(parseInt(keys[0]))
  }

  fours() {
    let cardHash = this.values.hashCounter();
    let counts = Object.values(cardHash);

    return counts.sort().equals([1, 4]);
  }

  fullHouse() {
    let cardHash = this.values.hashCounter();
    let counts = Object.values(cardHash);

    return counts.sort().equals([2, 3]);
  };

  flush() {
    let suits = new Set(this.suits)

    return suits.size === 1;
  }

  straight() {
    let order = [];
    this.values.forEach((ele) => {
      order.push(parseInt(VALUES[ele]))
    })

    let vals = new Set(order)

    let sorted = order.sort((a,b) => a -b)
  
    return (vals.size === 5 && sorted[4] - sorted[0] === 4)
  }

  threeofaKind() {
    let cardHash = this.values.hashCounter();
    let counts = Object.values(cardHash);

    return counts.sort().equals([1, 1, 3]);
  };

  twoPair() {
    let cardHash = this.values.hashCounter();
    let counts = Object.values(cardHash);

    return counts.sort().equals([1, 2, 2]);
  };

  jacksOrBetter() {
    let wins = ['J', 'Q', 'K', 'A'];
    let winningVals = [];

    for (let i = 0; i < this.values.length; i++) {
      if (wins.includes(this.values[i]))
        winningVals.push(this.values[i])
    }

    let set = new Set(winningVals)

    return (set.size === (winningVals.length - 1));
  }
}

Array.prototype.hashCounter = function() {
  let hash = {};
  for (let i = 0; i < this.length; i++) {
    if (hash[this[i]] === undefined) 
      hash[this[i]] = 1
    else
      hash[this[i]] += 1
  }

  return hash;
}

Array.prototype.equals = function(arr) {
  return this.length === arr.length && this.every((val, idx) => val === arr[idx])
}


export default WinningHand;