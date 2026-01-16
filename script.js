const API_URL = 'https://rickandmortyapi.com/api/character/2';

const loading = document.getElementById('loading');
const error = document.getElementById('error');
const characterCard = document.getElementById('characterCard');
const characterImage = document.getElementById('characterImage');
const characterName = document.getElementById('characterName');
const characterStatus = document.getElementById('characterStatus');
const characterSpecies = document.getElementById('characterSpecies');

async function fetchCharacter() {
    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error('Помилка завантаження даних');
        }

        const character = await response.json();
        displayCharacter(character);
    } catch (err) {
        showError('Не вдалося завантажити персонажа. Спробуйте пізніше.');
        console.error('Error:', err);
    }
}

function displayCharacter(character) {
    loading.style.display = 'none';
    characterCard.classList.add('active');

    characterImage.src = character.image;
    characterImage.alt = character.name;
    characterName.textContent = character.name;
    characterStatus.textContent = `Статус: ${character.status}`;
    characterSpecies.textContent = `Вид: ${character.species}`;
}

function showError(message) {
    loading.style.display = 'none';
    error.textContent = message;
    error.style.display = 'block';
}

fetchCharacter();