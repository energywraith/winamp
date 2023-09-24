type List = {
  [key: string]: string | number;
}[];

function sortByKey<ListWithKey extends List>(list: ListWithKey, key: string) {
  return list.sort(function (a, b) {
    var x = a[key];
    var y = b[key];
    return x < y ? -1 : x > y ? 1 : 0;
  });
}

export { sortByKey };
