class WinningHand {
  constructor(hand) {
  this.hand = hand;
  this.payout = 0;
  this.win = "";
  this.values = hand.map((card) => card.value);
  this.suits = hand.map((card) => card.suit)
  }

  royalFlush(){
    let royals = [10, 'J', 'Q', 'K', 'A']
    console.log(this.hand)
    let suit = this.hand[0].suit

    for (let i = 0; i < royals.length; i++) {
      if (!this.values.includes(royals[i]))
        return false
    }
    return this.hand.every(card => card.suit === suit)
  };

  fours() {
    let cardHash = this.values.hashCounter();
    Object.keys(cardHash).forEach((key) => {
      if (cardHash[key] !== 4)
        delete cardHash[key]
    })

    let keys = Object.keys(cardHash);
    
    if (keys[0] === 'A') {
      console.log("its A's")
      return true
    } else if ([2, 3, 4].includes(parseInt(keys[0]))) {
      console.log("its 234")
      return true
    } else {
      console.log('its else')
      return true
    }
  }

  four234() {
    let cardHash = this.values.hashCounter();
    Object.keys(cardHash).forEach((key) => {
      if (cardHash[key] !== 4) 
        delete cardHash[key]
    })
    let keys = Object.keys(cardHash);
    let k = parseInt(keys[0])
    
    return [2,3,4].includes(k)
  }

  four5thruK() {
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
    console.log(this.suits)
    let suits = new Set(this.suits)
    console.log(suits)
    return suits.size === 1;
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