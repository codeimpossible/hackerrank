
Function.prototype.bench = function() {
  var now = window.performance.now();
  var result = this.apply(this, arguments);
  console.log('took: ', window.performance.now() - now, 'ms');
  return result;
};

var set = [6,5,3,1,8,7,2,4];

set = new Array(100000).join('1,').split(',').map(function() {
  return Math.floor((Math.random() * 65535) + 1);
});

var merge_sort = function(list) {
  if(list.length <= 1) return list;
  var left = list.slice(0, list.length / 2);
  var right = list.slice(list.length / 2);

  left = merge_sort(left);
  right = merge_sort(right);

  return merge(left, right);
};

var merge = function(left, right) {
  var result = [];
  while(left.length > 0 || right.length > 0) {
    if(left.length > 0 && right.length > 0) result.push((left[0] <= right[0] ? left : right).shift());
    else if(left.length > 0) result.push(left.shift());
    else if(right.length > 0) result.push(right.shift());
  }
  return result;
};

console.log(merge_sort.bench(set));
