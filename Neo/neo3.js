function solution(A, D) {
  let total = 0;
  let months = {
    01: [0, 0],
    02: [0, 0],
    03: [0, 0],
    04: [0, 0],
    05: [0, 0],
    06: [0, 0],
    07: [0, 0],
    08: [0, 0],
    09: [0, 0],
    10: [0, 0],
    11: [0, 0],
    12: [0, 0],
  };

  for (let x = 0; x < A.length; x++) {
    total += A[x];
    let chosenMonth = Number(D[x].split("-")[1]);

    if (A[x] < 0) {
      months[chosenMonth][0] = months[chosenMonth][0] + A[x];
    }
    if (A[x] != 0) {
      months[chosenMonth][1]++;
    }
  }

  for (let month in months) {
    if (months[month][1] >= 3 && months[month][0] <= -100) {
    } else {
      total = total - 5;
    }
  }
  return total;
}
