function Node(val){
  this.value = val;
  this.left = null;
  this.right = null;
}


function BinarySearchTree(){
  this.root = null;
}

BinarySearchTree.prototype.push = function(val){
   var root = this.root;

   if(!root){
      this.root = new Node(val);
      return;
   }

   var currentNode = root;
   var newNode = new Node(val);

   while(currentNode){
      if(val < currentNode.value){
          if(!currentNode.left){
             currentNode.left = newNode;
             break;
          }
          else{
             currentNode = currentNode.left;
        }
     }
     else{
         if(!currentNode.right){
            currentNode.right = newNode;
            break;
         }
         else{
            currentNode = currentNode.right;
         }
     }
  }
}

function dfs(node){
  if(!node) return
  console.log(node.value);
  dfs(node.left);
  dfs(node.right);
}

function dfs(node){
  if(!node) return
  console.log(node.value);
  dfs(node.left);
  dfs(node.right);
}

function postorder(node){
  if(!node) return
  postorder(node.left);
  postorder(node.right);
  console.log(node.value);
}

function bfs(startNode) {
  let arr = []
  arr.push(startNode)
  while(arr.length > 0) {
    let node = arr.shift()
    if(node.left) arr.push(node.left)
    if(node.right) arr.push(node.right)

    console.log(node.value)
  }
}

let min = (node) => {
  if(!!node && !!node.left) return min(node.left)
  return node.value
}

let max = (node) => {
  if(!!node && !!node.right) return max(node.right)
  return node.value
}

let isBST = (node) => {
  if(!node) return true

  if(!!node.right && node.right.value < node.value) return false
  if(!!node.left && node.left.value > node.value) return false

  return isBST(node.left) && isBST(node.right)
}

let maxValueOfPathSum = (node) => {
  if(!node) return 0

  return node.value + Math.max(maxValueOfPathSum(node.left), maxValueOfPathSum(node.right))
}

let getSum = (node) => {
  if(!node) return 0;
  return node.value + getSum(node.left) + getSum(node.right)
}

let isCuttable = (node, parent = {sum: 0}) => {
  if(!node) return false

  node.leftSum = getSum(node.left) // could be optimized by calcualted from parent
  node.rightSum = getSum(node.right) // could be optimized by calcualted from parent
  node.sum = parent.sum + node.value

  if(node.sum + node.rightSum === node.leftSum) return true
  if(node.sum + node.leftSum === node.rightSum) return true

  return isCuttable(node.left, node) || isCuttable(node.right, node)
}

let getMinDepth = (node, depth = 0) => {
  depth++

  switch(true) {
    case !node.left && !node.right: return depth
    case !node.left: return getMinDepth(node.right, depth)
    case !node.right: return getMinDepth(node.left, depth)
    default: return Math.min(getMinDepth(node.left, depth), getMinDepth(node.right, depth))
  }
}


var bst = new BinarySearchTree();

bst.push(4);

bst.push(3);
bst.push(2);
bst.push(1);
bst.push(0);
bst.push(-1);

console.log(JSON.stringify(bst.root, undefined, 2))
console.log('min depth', getMinDepth(bst.root))
