// Q8: Pass if marks >= 40
function Result({ marks }) {
  const isPass = marks >= 40;
  return (
    <p>
      Marks: {marks} -{" "}
      <span className={isPass ? "pass" : "fail"}>{isPass ? "Pass" : "Fail"}</span>
    </p>
  );
}

export default Result;
