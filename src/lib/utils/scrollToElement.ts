export default function scrollToElement(id: string) {
	if (id !== 'top') {
		const element = document.getElementById(id);
		if (element) {
			window.scrollTo({
				top: element.offsetTop - 20,
				behavior: 'smooth'
			});
		}
	} else {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
}
