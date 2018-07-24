class Space {
  constructor(type, neighbours) {
    this.type = type
    this.neighbours = neighbours // {up, down, left, right}
  }

  findAll(arr = []) {
    console.log('nb', this.neighbours)
    arr.push(this);
    ['up', 'down', 'left', 'right']
      .map(k => this.neighbours[k])
      .filter(n => !!n)
      .forEach(n => n.findAll(arr))

    return arr
  }
}

let findAll = (start) => start.reduce((a,b) => a.concat(b.findAll()), [])
console.log(findAll([new Space('T', {up: new Space('H', {})})]))

/*
Your previous Plain Text content is preserved below:

Define a class 'Space' which has a member string variable that indicates if the space is a "tree", a "house" or an empty space and another member variable that will store the 'space neighbors' (left, right, up and down only)

Given a 'Grid' (list) of Spaces write the code for the findAll(start) method to find all the trees and houses given a 'Space' as start point

Example, Grid of 'Spaces':

T 0 0 H 0
0 0 0 0 0
H H T H 0

Where Ts are trees and Hs are houses


// example

// example,
 H
TTH
 O

be a tree and have

left = tree
Up = house
right = house
down = undefined

can a findAll method find houses and trees across empty spaces ? i dont think so.

is this correct ?

Alright high level solution

class Space() {
  constructor(type, neighbours) {
    this.type = type
    this.neighbours = neighbours // {up, down, left, right}
  }

  findAll = () => //traverse thruough all neigboures recursively (exciting stuff)
}


 */
