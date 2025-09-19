const expecienciaBtn = document.querySelectorAll('.experiencia-btn');

expecienciaBtn.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const experienciaDetail = document.querySelectorAll('.experiencia-detail');
        
        expecienciaBtn.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        experienciaDetail.forEach(detail => {
            detail.classList.remove('active');
        });
        experienciaDetail[idx].classList.add('active');
    });
});

