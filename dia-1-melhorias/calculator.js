import { sum } from "./sum";
import { sub } from "./sub";

class Calculator {
  sum(a, b) {
    return sum(a, b);
  }
  sub(a, b) {
    return sub(a, b);
  }
}

export default Calculator;
