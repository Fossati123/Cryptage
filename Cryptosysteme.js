alert("Page JS OK");

	function buttonOne(){ 		//bouton + textarea
	
	var nom = document.getElementById("txtAr").value; //var de area

	
	var tab = { //tbl de lettre à chg
		a:"1",
		b:"2",
		c:"3",
		d:"4",
		e:"5",
		f:"6",
		g:"7",
		h:"8",
		i:"9",
		j:"a",
		k:"b",
		l:"c",
		m:"d",
		n:"e",
		o:"f",
		p:"g",
		q:"h",
		r:"i",
		s:"j",
		t:"k",
		u:"l",
		v:"m",
		w:"n",
		x:"o",
		y:"p",
		z:"q"
		
	};
	newNom = nom.replace(/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z/g, function(matched){ //fonction anonyme pour chg global
		return tab[matched];
	});
	document.getElementById("texte").innerHTML=newNom; //écrire le mot

}


	function buttonTwo(){ 		//bouton + textarea déchiffrement
	
	var nom = document.getElementById("dTxtAr").value; //var de area
	
	
	var tab = { //tbl de lettre à chg
		1:"a",
		2:"b",
		3:"c",
		4:"d",
		5:"e",
		6:"f",
		7:"g",
		8:"h",
		9:"i",
		a:"j",
		b:"k",
		c:"l",
		d:"m",
		e:"n",
		f:"o",
		g:"p",
		h:"q",
		i:"r",
		j:"s",
		k:"t",
		l:"u",
		m:"v",
		n:"w",
		o:"x",
		p:"y",
		q:"z"
		
	};
	newNom = nom.replace(/1|2|3|4|5|6|7|8|9|a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q/g, function(matched){ //fonction anonyme pour chg global
		return tab[matched];
	});
	document.getElementById("dTexte").innerHTML=newNom; //écrire le mot
}