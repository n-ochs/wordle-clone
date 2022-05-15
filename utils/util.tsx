export const randomIntFromInterval: (min: number, max: number) => number = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

export const isWordFull: (wordArr: string[]) => boolean = (wordArr: string[]) => {
	if (wordArr.join('').length === 5) {
		return true;
	} else return false;
};
