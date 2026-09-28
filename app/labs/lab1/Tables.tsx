export default function Tables() {
  return (
    <div>
      <h4>Quiz grades</h4>
      <table border={1} cellPadding={5}>
        <thead>
          <tr><th>Quiz</th><th>Score</th></tr>
        </thead>
        <tbody>
          <tr><td>Q1</td><td>85</td></tr>
          <tr><td>Q2</td><td>90</td></tr>
          <tr><td>Q3</td><td>78</td></tr>
          <tr><td>Q4</td><td>88</td></tr>
          <tr><td>Q5</td><td>92</td></tr>
          <tr><td>Q6</td><td>75</td></tr>
          <tr><td>Q7</td><td>95</td></tr>
          <tr><td>Q8</td><td>80</td></tr>
          <tr><td>Q9</td><td>91</td></tr>
          <tr><td>Q10</td><td>87</td></tr>
          <tr><td><strong>Average</strong></td><td><strong>86.1</strong></td></tr>
        </tbody>
      </table>

      <h4>My table</h4>
      <table id="wd-your-table" border={1} cellPadding={5}>
        <thead>
          <tr><th>Course</th><th>Grade</th></tr>
        </thead>
        <tbody>
          <tr><td>Algorithms</td><td>A</td></tr>
          <tr><td>Numerical Analysis</td><td>A-</td></tr>
        </tbody>
      </table>
    </div>
  );
}