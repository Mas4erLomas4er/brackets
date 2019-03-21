module.exports = function check ( str, bracketsConfig ) {
	let splitedStr = str.split( "" );
	let concatedBacketsConfig = bracketsConfig.reduce( ( acc, elem ) => acc.concat( elem ), [] );
	let acceptedBracketsPairs = 0;
	splitedStr.forEach( ( elem, index ) => {
		let elemBracketPair = ( bracketsConfig[ Math.floor( concatedBacketsConfig.indexOf( elem ) / 2 ) ] );
		let skippedCurrentBracketsCount = 0;
		let skippedBracketsCount = 0;
		if ( elem === elemBracketPair[ 0 ] ) {
			for ( let i = index + 1; i < splitedStr.length; i++ ) {
				let currentElem = splitedStr[ i ];
				if (concatedBacketsConfig.indexOf( currentElem ) % 2 === 0 && currentElem !== elemBracketPair[ 0 ]) skippedBracketsCount++;
				if (concatedBacketsConfig.lastIndexOf( currentElem ) % 2 !== 0 && currentElem !== elemBracketPair[ 1 ]) skippedBracketsCount--;
				// console.log(currentElem, concatedBacketsConfig.indexOf( currentElem ) % 2 === 0);
				if ( currentElem === elem && elem !== elemBracketPair[ 1 ] ) skippedCurrentBracketsCount++;
				if ( currentElem === elemBracketPair[ 1 ] ) skippedCurrentBracketsCount--;
				// console.log(currentElem, skippedBracketsCount);
				// if (skippedBracketsCount !== 0) break;
				if ( skippedCurrentBracketsCount === -1 ) break;
			}
		}
		if ( skippedCurrentBracketsCount === -1 && skippedBracketsCount === 0) acceptedBracketsPairs++;
	} );
	return acceptedBracketsPairs === str.length / 2;
};
