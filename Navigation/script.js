document.addEventListener('DOMContentLoaded',function(){
	const navbar=document.querySelector('.navbar');

	 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

	window.addEventListener('scroll',function(){
		if(window.scrolly>50){
			navbar.style.backgroundColor='#222';
		}
		else{
			navbar.style.backgroundColor='#333';
		}
	});
});