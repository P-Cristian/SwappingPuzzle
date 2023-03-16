  const puzzlePieces = [];
  const correctPieces = [];
  const numRows = 3; 
  const numCols = 3; 
  const pieceWidth = 148; 
  const pieceHeight = 148;
  const imageUrl = 'image.jpeg'; 
  let firstSquare = null;
  let firstPosition = null;
  let tempSquare = null;
  let tempPos = null;
  let firstPos = null;
  let k=0;
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      let piece = document.createElement('div');
      piece.className = 'square';
      piece.myIndex = k;
      k++;
      piece.textContent =  `${piece.myIndex}`;
      piece.style.textAlign = "center";
      piece.style.color = "white";
      piece.style.width = pieceWidth + 'px';
      piece.style.height = pieceHeight + 'px';
      piece.style.backgroundImage = `url(${imageUrl})`;
      piece.style.backgroundSize = `${pieceWidth * numCols}px ${pieceHeight * numRows}px`;
      piece.style.backgroundPosition = `-${j * pieceWidth}px -${i * pieceHeight}px`;
    
     

      piece.addEventListener("click",
                         function(){
                             var newVar = piece.style.backgroundPosition;
                             if(firstPos==null)
                             {
                              firstPos = piece.myIndex;
                              firstSquare = piece;
                              firstPosition = newVar;
                             }
                             else
                             {
                              tempPos = piece.style.backgroundPosition;
                              tempSquare = piece;
                              myFunction(piece);
                              firstSquare.style.backgroundPosition = tempPos;
                              let tempIndex = piece.myIndex;
                              piece.myIndex =  firstPos;
                              firstSquare.myIndex = tempIndex;
                              piece.textContent =  `${piece.myIndex}`;
                              firstSquare.textContent = `${firstSquare.myIndex}`;
                              firstSquare = null;
                              firstPosition = null;
                              firstPos = null;
                              check(puzzlePieces);
                             
                             }
                         },
                         false);
      puzzlePieces.push(piece);
      correctPieces.push(piece);
    }
  }

  function myFunction(piece)
  { 

      piece.style.backgroundPosition = firstPosition; 
  }
  function check(array)
  {
    let flag = true;
    for(let i=0;i<array.length;i++)
    {
      if(array[i].myIndex!=i) flag = false;
    }
    if(flag===true) alert("Puzzle is complete.");
  }
 
  
 
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

  shuffleArray(puzzlePieces);

  const gameBoard = document.querySelector('.game-board');
  puzzlePieces.forEach(piece => gameBoard.appendChild(piece));


  