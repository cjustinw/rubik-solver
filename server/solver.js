
const initialState = (cube) => {
  return {
    corner: [
      cube.face1.piece1 + cube.face4.piece3 + cube.face5.piece7,
      cube.face1.piece3 + cube.face2.piece1 + cube.face5.piece9,
      cube.face2.piece3 + cube.face3.piece1 + cube.face5.piece3,
      cube.face3.piece3 + cube.face4.piece1 + cube.face5.piece1,

      cube.face1.piece7 + cube.face4.piece9 + cube.face6.piece1,
      cube.face1.piece9 + cube.face2.piece7 + cube.face6.piece3,
      cube.face2.piece9 + cube.face3.piece7 + cube.face6.piece9,
      cube.face3.piece9 + cube.face4.piece7 + cube.face6.piece7
    ],
    edge: [
      cube.face1.piece2 + cube.face5.piece8,
      cube.face2.piece2 + cube.face5.piece6,
      cube.face3.piece2 + cube.face5.piece2,
      cube.face4.piece2 + cube.face5.piece4,
      
      cube.face1.piece4 + cube.face4.piece6,
      cube.face1.piece6 + cube.face2.piece4,
      cube.face3.piece4 + cube.face2.piece6,
      cube.face3.piece6 + cube.face4.piece4,
      
      cube.face1.piece8 + cube.face6.piece2,
      cube.face2.piece8 + cube.face6.piece6,
      cube.face3.piece8 + cube.face6.piece8,
      cube.face4.piece8 + cube.face6.piece4,
    ]
  };
}

const goalState = {
  corner: ["GOW", "GRW", "RBW", "BOW", "GOY", "GRY", "RBY", "BOY"],
  edge: ["GW", "RW", "BW", "OW", "GO", "GR", "BR", "BO", "GY", "RY", "BY", "OY"]
}

const sortString = str => str.split('').sort((a, b) => a.localeCompare(b)).join('');

const sortColorState = (state) => {
  let newState = {corner: [], edge: []};
  for(let i = 0; i < 8; i++){
    newState.corner.push(sortString(state.corner[i]));
  }
  for(let i = 0; i < 12; i++){
    newState.edge.push(sortString(state.edge[i]));
  }
  return newState;
}
const move = ["U'", "U", "U2", "D'", "D", "D2", "F'", "F", "F2", "B'", "B", "B2", "R'", "R", "R2", "L'", "L", "L2"];

const isGoalState = (state) => {
  for(let i = 0; i < goalState.corner.length; i++){
    if(state.corner[i] !== goalState.corner[i]){
      return false;
    }
  }
  for(let i = 0; i < goalState.edge.length; i++){
    if(state.edge[i] !== goalState.edge[i]){
      return false;
    }
  }
  return true;
}

const R = (state) => {
  let newState = {corner: {...state.corner}, edge: {...state.edge}};

  newState.corner[1] = state.corner[5][2] + state.corner[5][1] +  state.corner[5][0];
  newState.corner[2] = state.corner[1][1] + state.corner[1][2] +  state.corner[1][0];
  newState.corner[5] = state.corner[6][2] + state.corner[6][0] +  state.corner[6][1];
  newState.corner[6] = state.corner[2][0] + state.corner[2][2] +  state.corner[2][1];

  newState.edge[1] = state.edge[5][1] + state.edge[5][0];
  newState.edge[5] = state.edge[9][1] + state.edge[9][0];
  newState.edge[6] = state.edge[1][1] + state.edge[1][0];
  newState.edge[9] = state.edge[6][1] + state.edge[6][0];

  return newState;
}

const R2 = (state) => {
  return R(R(state));
}

const Rreverse = (state) => {
  let newState = {corner: {...state.corner}, edge: {...state.edge}};

  newState.corner[1] = state.corner[2][2] + state.corner[2][0] +  state.corner[2][1];
  newState.corner[2] = state.corner[6][0] + state.corner[6][2] +  state.corner[6][1];
  newState.corner[6] = state.corner[5][1] + state.corner[5][2] +  state.corner[5][0];
  newState.corner[5] = state.corner[1][2] + state.corner[1][1] +  state.corner[1][0];

  newState.edge[1] = state.edge[6][1] + state.edge[6][0];
  newState.edge[5] = state.edge[1][1] + state.edge[1][0];
  newState.edge[6] = state.edge[9][1] + state.edge[9][0];
  newState.edge[9] = state.edge[5][1] + state.edge[5][0];

  return newState;
}

const L = (state) => {
  let newState = {corner: {...state.corner}, edge: {...state.edge}};

  newState.corner[0] = state.corner[3][2] + state.corner[3][1] +  state.corner[3][0];
  newState.corner[3] = state.corner[7][2] + state.corner[7][1] +  state.corner[7][0];
  newState.corner[4] = state.corner[0][2] + state.corner[0][1] +  state.corner[0][0];
  newState.corner[7] = state.corner[4][2] + state.corner[4][1] +  state.corner[4][0];

  newState.edge[3] = state.edge[7][1] + state.edge[7][0];
  newState.edge[4] = state.edge[3][1] + state.edge[3][0];
  newState.edge[7] = state.edge[11][1] + state.edge[11][0];
  newState.edge[11] = state.edge[4][1] + state.edge[4][0];

  return newState;
}

const L2 = (state) => {
  return L(L(state));
}

const Lreverse = (state) => {
  let newState = {corner: {...state.corner}, edge: {...state.edge}};

  newState.corner[0] = state.corner[4][2] + state.corner[4][1] +  state.corner[4][0];
  newState.corner[3] = state.corner[0][2] + state.corner[0][1] +  state.corner[0][0];
  newState.corner[4] = state.corner[7][2] + state.corner[7][1] +  state.corner[7][0];
  newState.corner[7] = state.corner[3][2] + state.corner[3][1] +  state.corner[3][0];

  newState.edge[3] = state.edge[4][1] + state.edge[4][0];
  newState.edge[4] = state.edge[11][1] + state.edge[11][0];
  newState.edge[7] = state.edge[3][1] + state.edge[3][0];
  newState.edge[11] = state.edge[7][1] + state.edge[7][0];

  return newState;
}

const U = (state) => {
  let newState = {corner: {...state.corner}, edge: {...state.edge}};

  newState.corner[0] = state.corner[1][1] + state.corner[1][0] +  state.corner[1][2];
  newState.corner[1] = state.corner[2][0] + state.corner[2][1] +  state.corner[2][2];
  newState.corner[2] = state.corner[3][0] + state.corner[3][1] +  state.corner[3][2];
  newState.corner[3] = state.corner[0][1] + state.corner[0][0] +  state.corner[0][2];

  newState.edge[0] = state.edge[1];
  newState.edge[1] = state.edge[2];
  newState.edge[2] = state.edge[3];
  newState.edge[3] = state.edge[0];

  return newState;
}

const U2 = (state) => {
  return U(U(state));
}

const Ureverse = (state) => {
  let newState = {corner: {...state.corner}, edge: {...state.edge}};

  newState.corner[0] = state.corner[3][1] + state.corner[3][0] +  state.corner[3][2];
  newState.corner[1] = state.corner[0][1] + state.corner[0][0] +  state.corner[0][2];
  newState.corner[2] = state.corner[1][0] + state.corner[1][1] +  state.corner[1][2];
  newState.corner[3] = state.corner[2][0] + state.corner[2][1] +  state.corner[2][2];

  newState.edge[0] = state.edge[3];
  newState.edge[1] = state.edge[0];
  newState.edge[2] = state.edge[1];
  newState.edge[3] = state.edge[2];

  return newState;
}

const D = (state) => {
  let newState = {corner: {...state.corner}, edge: {...state.edge}};

  newState.corner[4] = state.corner[7][1] + state.corner[7][0] +  state.corner[7][2];
  newState.corner[5] = state.corner[4][1] + state.corner[4][0] +  state.corner[4][2];
  newState.corner[6] = state.corner[5][0] + state.corner[5][1] +  state.corner[5][2];
  newState.corner[7] = state.corner[6][0] + state.corner[6][1] +  state.corner[6][2];

  newState.edge[8] = state.edge[11];
  newState.edge[9] = state.edge[8];
  newState.edge[10] = state.edge[9];
  newState.edge[11] = state.edge[10];

  return newState;
}

const D2 = (state) => {
  return D(D(state));
}

const Dreverse = (state) => {
  let newState = {corner: {...state.corner}, edge: {...state.edge}};

  newState.corner[4] = state.corner[5][1] + state.corner[5][0] +  state.corner[5][2];
  newState.corner[5] = state.corner[6][0] + state.corner[6][1] +  state.corner[6][2];
  newState.corner[6] = state.corner[7][0] + state.corner[7][1] +  state.corner[7][2];
  newState.corner[7] = state.corner[4][1] + state.corner[4][0] +  state.corner[4][2];

  newState.edge[8] = state.edge[9];
  newState.edge[9] = state.edge[10];
  newState.edge[10] = state.edge[11];
  newState.edge[11] = state.edge[8];

  return newState;
}

const F = (state) => {
  let newState = {corner: {...state.corner}, edge: {...state.edge}};

  newState.corner[0] = state.corner[4][0] + state.corner[4][2] +  state.corner[4][1];
  newState.corner[1] = state.corner[0][0] + state.corner[0][2] +  state.corner[0][1];
  newState.corner[4] = state.corner[5][0] + state.corner[5][2] +  state.corner[5][1];
  newState.corner[5] = state.corner[1][0] + state.corner[1][2] +  state.corner[1][1];

  newState.edge[0] = state.edge[4];
  newState.edge[4] = state.edge[8];
  newState.edge[5] = state.edge[0];
  newState.edge[8] = state.edge[5];

  return newState;
}

const F2 = (state) => {
  return F(F(state));
}

const Freverse = (state) => {
  let newState = {corner: {...state.corner}, edge: {...state.edge}};

  newState.corner[0] = state.corner[1][0] + state.corner[1][2] +  state.corner[1][1];
  newState.corner[1] = state.corner[5][0] + state.corner[5][2] +  state.corner[5][1];
  newState.corner[4] = state.corner[0][0] + state.corner[0][2] +  state.corner[0][1];
  newState.corner[5] = state.corner[4][0] + state.corner[4][2] +  state.corner[4][1];

  newState.edge[0] = state.edge[5];
  newState.edge[4] = state.edge[0];
  newState.edge[5] = state.edge[8];
  newState.edge[8] = state.edge[4];

  return newState;
}

const B = (state) => {
  let newState = {corner: {...state.corner}, edge: {...state.edge}};

  newState.corner[2] = state.corner[6][2] + state.corner[6][1] +  state.corner[6][0];
  newState.corner[3] = state.corner[2][1] + state.corner[2][2] +  state.corner[2][0];
  newState.corner[6] = state.corner[7][2] + state.corner[7][0] +  state.corner[7][1];
  newState.corner[7] = state.corner[3][0] + state.corner[3][2] +  state.corner[3][1];

  newState.edge[2] = state.edge[6];
  newState.edge[6] = state.edge[10];
  newState.edge[7] = state.edge[2];
  newState.edge[10] = state.edge[7];

  return newState;
}

const B2 = (state) => {
  return B(B(state));
}

const Breverse = (state) => {
  let newState = {corner: {...state.corner}, edge: {...state.edge}};

  newState.corner[2] = state.corner[3][2] + state.corner[3][0] +  state.corner[3][1];
  newState.corner[3] = state.corner[7][0] + state.corner[7][2] +  state.corner[7][1];
  newState.corner[6] = state.corner[2][2] + state.corner[2][1] +  state.corner[2][0];
  newState.corner[7] = state.corner[6][1] + state.corner[6][2] +  state.corner[6][0];

  newState.edge[2] = state.edge[7];
  newState.edge[6] = state.edge[2][1] + state.edge[2][0];
  newState.edge[7] = state.edge[10];
  newState.edge[10] = state.edge[6];

  return newState;
}

const coordinate = {
  corner: [[0, 0, 0], [2, 0, 0], [2, 0, 2], [0, 0, 2], [0, 2, 0], [2, 2, 0], [2, 2, 2], [0, 2, 2]],
  edge: [[1, 0, 0], [2, 0, 1], [1, 0, 2], [0, 0, 1], [0, 1, 0], [2, 1, 0], [2, 1, 2], [0, 1, 2], [1, 2, 0], [2, 2, 1], [1, 2, 2], [0, 2, 1]]
}

const manhattanDistance = (state1, state2) => {
  if(state1 instanceof Array && state2 instanceof Array){
    return Math.abs(state1[0] - state2[0]) + Math.abs(state1[1] - state2[1]) + Math.abs(state1[2] - state2[2]);
  }
}

const heuristik = (state) => {
  let count1 = 0;
  let count2 = 0;
  let goal = sortColorState(goalState);
  let newState = sortColorState({corner: {...state.corner}, edge: {...state.edge}});
  for(let i = 0; i < newState.corner.length; i++){
    for(let j = 0; j < goal.corner.length; j++){
      if(newState.corner[i] === goal.corner[j]){
        count1 += manhattanDistance(coordinate.corner[i], coordinate.corner[j]);
        break;
      }
    }
  }
  for(let i = 0; i < newState.edge.length; i++){
    for(let j = 0; j < goal.edge.length; j++){
      if(newState.edge[i] === goal.edge[j]){
        count2 += manhattanDistance(coordinate.edge[i], coordinate.edge[j]);
        break;
      }
    }
  }
  count1 = count1/4;
  count2 = count2/4;
  return Math.max(count1, count2);
}

const isMember = (state, array) => {
  if(array instanceof Array){
    for(let i = 0; i < array.length; i++){
      let countCorner = 0;
      let countEdge = 0;
      for(let j = 0; j < 8; j++){
        if(array[i].corner[j] === state.corner[j]){
          countCorner++;
        }
      }
      for(let j = 0; j < 12; j++){
        if(array[i].edge[j] === state.edge[j]){
          countEdge++;
        }
      }
      if(countCorner === 8 && countEdge === 12){
        return true;
      }
    }
    return false;
  }
}

const moveTo = (direction, state) => {
  if(direction === "U"){
    return U(state);
  }
  else if(direction === "U'"){
    return Ureverse(state);
  }
  else if(direction === "U2"){
    return U2(state);
  }
  else if(direction === "D"){
    return D(state);
  }
  else if(direction === "D'"){
    return Dreverse(state);
  }
  else if(direction === "D2"){
    return D2(state);
  }
  else if(direction === "F"){
    return F(state);
  }
  else if(direction === "F'"){
    return Freverse(state);
  }
  else if(direction === "F2"){
    return F2(state);
  }
  else if(direction === "B"){
    return B(state);
  }
  else if(direction === "B'"){
    return Breverse(state);
  }
  else if(direction === "B2"){
    return B2(state);
  }
  else if(direction === "R"){
    return R(state);
  }
  else if(direction === "R'"){
    return Rreverse(state);
  }
  else if(direction === "R2"){
    return R2(state);
  }
  else if(direction === "L"){
    return L(state);
  }
  else if(direction === "L'"){
    return Lreverse(state);
  }
  else if(direction === "L2"){
    return L2(state);
  }
  return null;
}

const constraintMove = (arrayMove, nextMove) => {
  if(arrayMove instanceof Array){
    let lastMove = arrayMove[arrayMove.length-1];
    let lastMove2 = "";
    if(arrayMove.length > 1){
      lastMove2 = arrayMove[arrayMove.length-2];
    }
    if((lastMove === "U" || lastMove === "U2" || lastMove === "U'" )
    && (nextMove === "U" || nextMove === "U2" || nextMove === "U'")){
      return false;
    }
    else if((lastMove === "D" || lastMove === "D2" || lastMove === "D'" )
    && (nextMove === "D" || nextMove === "D2" || nextMove === "D'")){
      return false;
    }
    else if((lastMove === "F" || lastMove === "F2" || lastMove === "F'" )
    && (nextMove === "F" || nextMove === "F2" || nextMove === "F'")){
      return false;
    }
    else if((lastMove === "B" || lastMove === "B2" || lastMove === "B'" )
    && (nextMove === "B" || nextMove === "B2" || nextMove === "B'")){
      return false;
    }
    else if((lastMove === "R" || lastMove === "R2" || lastMove === "R'" )
    && (nextMove === "R" || nextMove === "R2" || nextMove === "R'")){
      return false;
    }
    else if((lastMove === "L" || lastMove === "L2" || lastMove === "L'" )
    && (nextMove === "L" || nextMove === "L2" || nextMove === "L'")){
      return false;
    }
    else if((lastMove2 === "U" || lastMove2 === "U2" || lastMove2 === "U'" ) && (lastMove === "D" || lastMove === "D2" || lastMove === "D'" )
    && (nextMove === "U" || nextMove === "U2" || nextMove === "U'")){
      return false;
    }
    else if((lastMove2 === "D" || lastMove2 === "D2" || lastMove2 === "D'" ) && (lastMove === "U" || lastMove === "U2" || lastMove === "U'" )
    && (nextMove === "D" || nextMove === "D2" || nextMove === "D'")){
      return false;
    }
    else if((lastMove2 === "F" || lastMove2 === "F2" || lastMove2 === "F'" ) && (lastMove === "B" || lastMove === "B2" || lastMove === "B'" )
    && (nextMove === "F" || nextMove === "F2" || nextMove === "F'")){
      return false;
    }
    else if((lastMove2 === "B" || lastMove2 === "B2" || lastMove2 === "B'" ) && (lastMove === "F" || lastMove === "F2" || lastMove === "F'" )
    && (nextMove === "B" || nextMove === "B2" || nextMove === "B'")){
      return false;
    }
    else if((lastMove2 === "R" || lastMove2 === "R2" || lastMove2 === "R'" ) && (lastMove === "L" || lastMove === "L2" || lastMove === "L'" )
    && (nextMove === "R" || nextMove === "R2" || nextMove === "R'")){
      return false;
    }
    else if((lastMove2 === "L" || lastMove2 === "L2" || lastMove2 === "L'" ) && (lastMove === "R" || lastMove === "R2" || lastMove === "R'" )
    && (nextMove === "L" || nextMove === "L2" || nextMove === "L'")){
      return false;
    }
    return true;
  }
}

const solve = (cube) => {
  // const state = initialState(cube);
  const state = F2(B2(U2(D2(R2(L2(goalState))))));
  console.log(state);
  let arrayState = [];
  let arrayMove = [];
  let bound = heuristik(state);

  arrayState.push(state);
  while(true){
    let result = IDAstar(arrayState, arrayMove, 0, bound);
    if(result === true){
      console.log(arrayMove);
      return {
        pathState: arrayState,
        pathMove: arrayMove
      }
    }
    if(result === Number.MAX_SAFE_INTEGER){
      return false;
    }
    bound = result;
  }
}

const IDAstar = (arrayState, arrayMove, g, bound) => {
  if(arrayState instanceof Array && arrayState instanceof Array){
    let state = arrayState[arrayState.length - 1];
    let f = g + heuristik(state);

    console.log(arrayMove);
    
    if(f > bound){
      return f
    }
    if(isGoalState(state)){
      return true
    }

    let prevMove = ""; 
    if(arrayMove.length !== 0){
      prevMove = arrayMove[arrayMove.length - 1];
    }
    let queue = [];
    
    move.forEach(elmt => {
      if(constraintMove(arrayMove, elmt)){
        let tmp = moveTo(elmt, state);
        if(tmp !== null && !isMember(tmp, arrayState)){
          queue.push({
            state: tmp,
            heuristik: heuristik(tmp),
            move: elmt,
          });
        }
      }
    });
   
    let min = Number.MAX_SAFE_INTEGER;
    if(queue.length !== 0){
      queue.sort((elmt1, elmt2) => elmt1.heuristik - elmt2.heuristik);
      for(let i = 0; i < queue.length; i++){
        arrayState.push(queue[i].state);
        arrayMove.push(queue[i].move);
        let found = IDAstar(arrayState, arrayMove, g + 1, bound);
        if(found === true){
          return found;
        }
        if(found < min){
          min = found;
        }
        arrayState.pop();
        arrayMove.pop();
      }
    }
    return min;
  }
}

module.exports = { solve };