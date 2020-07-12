class StringCalculator {
  add(numbers: string) {
    if (numbers == "") {
      return 0;
    }

    return numbers
      .split(",")
      .map((s) => parseInt(s))
      .reduce((x, acc) => acc + x);
  }
}

export default StringCalculator;
