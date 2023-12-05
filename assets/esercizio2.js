const updateCounter = () => {
    let seconds = sessionStorage.getItem('counter') || 0;

    setInterval(() => {
        seconds++;
        sessionStorage.setItem('counter', seconds);
        mostraContatore();
    }, 1000);
};

const mostraContatore = () => {
    const counterDiv = document.getElementById('counter');
    const seconds = sessionStorage.getItem('counter') || 0;
    counterDiv.innerHTML = `Tempo trascorso: ${seconds} secondi`;
};

updateCounter();
mostraContatore();

