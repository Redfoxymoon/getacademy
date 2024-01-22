function countBlackJackPoints(cards) {
	let points = 0;
	let ess_num = 0;

// assert 4 - cards er satt til null
// null check
	if(cards === null)
		return null;
	for (let card of cards)
	{
		let suitAndRank = card.split(' ');
		let rank = suitAndRank[1];
		// manglende nummer eller ugyldig informasjon
		if(isNaN(rank))
		{
//			let essfound = 0;
//			if(rank.toLowerCase() === "ess")
//			{
//				if(essfound === 0)
//				{
//					if(points < 11)
//					{
//						points += 11;
//						essfound = 1;
//					}
//					else
//						points += 1;
//				}
//				else
//					points += 1;
//			}
			if(rank.toLowerCase() === "ess")
				ess_num += 1;
			else if(rank.toLowerCase() === "dame")
				points += 10;
			else if(rank.toLowerCase() === "knekt")
				points += 10;
			else if(rank.toLowerCase() === "konge")
				points += 10;
		}
		else
		{
			points += parseInt(rank);
		}
	}
//	if(ess_num > 0)
//	{
//		if(points < 10)
//			points += 11;
//		else
//			points += ess_num;
//	}
	while(ess_num--)
	{
		if(points < 10)
			points += 11;
		else
			points += 1;
	}
	return points;
}
