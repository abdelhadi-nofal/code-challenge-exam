function inv(arr) {
  arr.forEach((element) => {
    if (element.includes("A" || "a")) {
      let newArr = arr.push(element);
      return newArr;
    }
  });
}

inv();
