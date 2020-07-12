class StringCalculator {
  add(numbers: string) {
    if (numbers == "") {
      return 0;
    }

    let values_as_numbers;
    if (this.hasCustomDelimiter(numbers)) {
      values_as_numbers = numbers
        .split("\n")[1]
        .split(this.extractCustomDelimiter(numbers))
        .map((s) => parseInt(s));
    } else {
      const separator = /,|\n/;
      values_as_numbers = numbers.split(separator).map((s) => parseInt(s));
    }

    let negatives = values_as_numbers.filter((x) => x < 0);
    if (negatives.length > 0) {
      throw new Error(`negatives not allowed: received ${negatives}`);
    }

    return values_as_numbers.reduce((x: number, acc: number) => acc + x);
  }

  private extractCustomDelimiter(numbers: string) {
    return numbers.substr(2, 1);
  }

  private hasCustomDelimiter(numbers: string) {
    return numbers.substr(0, 2) == "//";
  }
}

export default StringCalculator;
