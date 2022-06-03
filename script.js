function pilihanComputer() {
	const comp = Math.random();

	if( comp < 0.34 ) return 'gajah';
	if( comp >= 0.34 && comp < 0.67) return 'orang';
	return 'semut';
}

function hasil(comp, player) {
	if( player == comp ) return 'SERI!';
	if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
	if( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
	if( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH!' : 'MENANG!';
}


function putarGambar(){
	const imgComputer = document.querySelector('.img-computer');
	const gambar = ['gajah', 'semut', 'orang'];
	let i = 0;

	const waktuMulai = new Date().getTime();
	setInterval(function() {
		if( new Date().getTime() - waktuMulai > 1000 ) {
			clearInterval;
			return;
		}

		imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
		if( i == gambar.length ) i = 0;

	}, 100);
}




const pilihan = document.querySelectorAll('li img');
let playerScore = 0;
let computerScore = 0;
let nyawa = 5;

// while( nyawa == 0 ) {
// 	alert('Permainan berakhir')
// }

pilihan.forEach(function(pil) {

	// mengambil hasil
	function hasilAkhir() {
		const pComputer = pilihanComputer();
		const pPlayer = pil.className;
		const hasilAkhir = hasil(pComputer, pPlayer);

	// kondisi apabila nyawa sudah habis
		while( nyawa == 0 ) {
			alert('Permainan Berakhir');
			if( playerScore < computerScore ) alert('Maaf anda kalah dengan skor: ( '+ computerScore + ' : ' + playerScore + ' )');
			if( playerScore > computerScore ) alert('Selamat anda berhasil memenangkan permainan dengan skor: ( '+ playerScore + ' : ' + computerScore + ' )');
			if( playerScore == computerScore ) alert('Permainan berakhir imbang');

			// agar keluar dari function hasilAkhir();
			return;
		}

	// seolah2 komputer sedang memilih gambar
		putarGambar();


		setTimeout(function() {

		const imgComputer = document.querySelector('.img-computer');
		imgComputer.setAttribute('src', 'img/' + pComputer + '.png');

	// Info menang / kalah
		const info = document.querySelector('.info');
		info.innerHTML = hasilAkhir;

	// deklarasi variable untuk score
		let cScore = document.querySelector('.cScore');
		let pScore = document.querySelector('.pScore');

		// kondisi untuk menentukan penambahan poin untuk player/ komputer
		if(hasilAkhir == 'MENANG!') playerScore = playerScore + 1;
		pScore.innerHTML = 'Score: ' + playerScore;
		if(hasilAkhir == 'KALAH!') computerScore = computerScore + 1;
		cScore.innerHTML = 'Score: ' + computerScore;
		nyawa--;

		// console.log(pComputer);
		// console.log(pPlayer);
		// console.log(hasilAkhir);
		}, 1000);
		
	}
		pil.addEventListener('click', hasilAkhir);
});