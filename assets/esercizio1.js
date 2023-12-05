const salvaNome = () => {
    const nome = document.getElementById('nameInput').value;
    localStorage.setItem('utenteNome', nome);
    mostraValoreSalvato();
}

const rimuoviNome = () => {
    localStorage.removeItem('utenteNome');
    mostraValoreSalvato();
}

const mostraValoreSalvato = () => {
    const savedValue = localStorage.getItem('utenteNome')
    const visualizeName = document.getElementById('valoreSalvato')

    visualizeName.innerHTML = savedValue ? `Valore salvato: ${savedValue}` : ''
}

document.getElementById('saveButton').addEventListener('click', salvaNome)
document.getElementById('removeButton').addEventListener('click', rimuoviNome)

mostraValoreSalvato()