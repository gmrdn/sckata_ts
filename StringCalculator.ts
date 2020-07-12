class StringCalculator {
  add(numbers: string) {
    if (numbers == "") {
      return 0;
    }

    let values_as_numbers;
    if (numbers.substr(0, 2) == "//") {
      let custom_delimiter = ";";
      values_as_numbers = numbers
        .split("\n")[1]
        .split(custom_delimiter)
        .map((s) => parseInt(s));
    } else {
      const separator = /,|\n/;
      values_as_numbers = numbers.split(separator).map((s) => parseInt(s));
    }
    return values_as_numbers.reduce((x: number, acc: number) => acc + x);
  }
}

export default StringCalculator;
