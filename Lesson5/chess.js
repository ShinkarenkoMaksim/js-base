function chessBoard() {
	var $container = document.createElement('div');
	$container.classList.add('container');
	var rowCoordKey = true;
	var colCoords = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',];
	var rowCoords = ['', '8', '7', '6', '5', '4', '3', '2', '1',];
	
	var cellColorDark = false;
	
	for (var i = 0; i <= 8; i++) {
		var colCoordKey = true;
		var $row = document.createElement('div');
		$row.classList.add('row');
		$container.appendChild($row);
		
		for (var j = 0; j <= 8; j++) {
			var $cell = document.createElement('div');
			$cell.classList.add('cell');
			
			if (rowCoordKey == true) {
				$cell.classList.add('cell-coord');
				$cell.textContent = colCoords[j];
			}
			
			if (i > 0 && cellColorDark == true) {
				$cell.classList.add('cell-dark');
				cellColorDark = false;
			} else {
				cellColorDark = true;
			}
			
			if (colCoordKey == true) {
				$cell.className = 'cell cell-coord';
				$cell.textContent = rowCoords[i];
			}
			
			$row.appendChild($cell);
			colCoordKey = false;
		}
		
		rowCoordKey = false;
	}
	
	return $container;
}
var $chess = document.getElementById('chess');
$chess.appendChild(chessBoard());