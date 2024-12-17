function toggleEdit() {
  const nameDisplay = document.getElementById('nameDisplay');
  const editButton = document.getElementById('editButton');
  const saveButton = document.getElementById('saveButton');
  let nameInput = document.getElementById('nameInput');

  if (!nameInput) {
    nameInput = document.createElement('input');
    nameInput.id = 'nameInput';
    nameInput.type = 'text';
    nameInput.value = nameDisplay.innerText; 
    document.querySelector('.name').appendChild(nameInput); 
  }

  if (editButton.innerText === 'edit') {
    nameDisplay.style.display = 'none';
    nameInput.style.display = 'inline';
    nameInput.focus(); 
    editButton.style.display = 'none';
    saveButton.style.display = 'inline';
  }
}

function saveName() {
  const nameDisplay = document.getElementById('nameDisplay');
  const nameInput = document.getElementById('nameInput');
  nameDisplay.innerText = nameInput.value; 
  nameDisplay.style.display = 'inline'; 
  nameInput.style.display = 'none'; 
  document.getElementById('editButton').style.display = 'inline';
  document.getElementById('saveButton').style.display = 'none';
}


const addMusicButton = document.getElementById('addMusicButton');
const musicForm = document.getElementById('musicForm');
const submitMusicButton = document.getElementById('submitMusicButton');
const cancelMusicButton = document.getElementById('cancelMusicButton');
const musicGallery = document.getElementById('musicGallery');

addMusicButton.addEventListener('click', function() {
  musicForm.style.display = 'block';
  addMusicButton.style.display = 'none'; 
});

cancelMusicButton.addEventListener('click', function() {
  musicForm.style.display = 'none'; 
  addMusicButton.style.display = 'inline-block'; 
});

submitMusicButton.addEventListener('click', function() {
  const musicLink = document.getElementById('musicLink').value;
  const musicName = document.getElementById('musicName').value;

  if (musicLink && musicName) {
    const musicItem = document.createElement('a');
    musicItem.href = musicLink;
    musicItem.target = '_blank';
    musicItem.classList.add('music-item');
    
    const img = document.createElement('img');
    img.src = 'YouTube_Logo.jpg'; 
    img.alt = musicName;
    
    const p = document.createElement('p');
    p.innerText = musicName;

    musicItem.appendChild(img);
    musicItem.appendChild(p);
    musicGallery.appendChild(musicItem);

    document.getElementById('musicLink').value = '';
    document.getElementById('musicName').value = '';
    musicForm.style.display = 'none';
    addMusicButton.style.display = 'inline-block';
  } else {
    alert('Please fill in both fields.');
  }
});
