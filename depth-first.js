'use strict';

var Node = function(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var Tree = function(val) {
  this.root = new Node(val);
  this.root.left = new Node(7);
  this.root.right = new Node(15);
  this.root.right.left = new Node(3);
  this.root.left.left = new Node(16);
  this.root.left.right = new Node(30);
  this.root.left.right.left = new Node(11);
  this.root.left.right.right = new Node(25);
  this.root.right.left.left = new Node(50);
  this.root.left.right.left.left = new Node(22);
};

let tree = new Tree(42);

function preOrder(node) {
  console.log(node);
  if(node.left) preOrder(node.left);
  if(node.right) preOrder(node.right);
}

function inOrder(node) {
  if(node.left) inOrder(node.left);
  console.log(node);
  if(node.right) inOrder(node.right);
}

function postOrder(node) {
  if(node.left) postOrder(node.left);
  if(node.right) postOrder(node.right);
  console.log(node);
}
