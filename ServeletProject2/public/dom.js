/**
 * 
 */


//文字を一文字ずつ表示させるアニメーション。
document.addEventListener('DOMContentLoaded', function() {
	const element = document.querySelector('.animate-title');
	const string = element.innerHTML.trim().split("");

	element.innerHTML = string.reduce((acc, curr) => {
		curr = curr.replace("", '&nbsp;');
		return `${acc}<span class = "char">${curr}</span>`;
	}, "");
	
});