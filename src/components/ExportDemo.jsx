// Q3: Default aur Named export ka import
import multiply, { add, subtract } from "../utils/mathUtils"; // default bina {}, named {} ke saath

function ExportDemo() {
  return (
    <div>
      <p>Default export - multiply(4, 5) = {multiply(4, 5)}</p>
      <p>Named export - add(4, 5) = {add(4, 5)}</p>
      <p>Named export - subtract(9, 5) = {subtract(9, 5)}</p>
    </div>
  );
}

export default ExportDemo;
