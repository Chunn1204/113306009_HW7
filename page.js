function toggleEdit() {
  const nameDisplay = document.getElementById('nameDisplay');
  const editButton = document.getElementById('editButton');
  
  // 創建一個隱藏的輸入框來取代名稱顯示
  let nameInput = document.getElementById('nameInput');
  
  // 如果沒有找到輸入框，則動態創建一個
  if (!nameInput) {
    nameInput = document.createElement('input');
    nameInput.id = 'nameInput';
    nameInput.type = 'text';
    nameInput.value = nameDisplay.innerText;
    document.body.appendChild(nameInput); // 將輸入框加入到頁面
  }

  // 切換顯示和編輯狀態
  if (editButton.innerText === 'edit') {
    // 顯示輸入框並隱藏顯示名稱
    nameDisplay.style.display = 'none';
    nameInput.style.display = 'inline';
    
    // 更改按鈕文字
    editButton.innerText = 'save';
  } else {
    // 保存輸入框的內容，更新顯示名稱
    nameDisplay.innerText = nameInput.value;
    
    // 顯示顯示名稱並隱藏輸入框
    nameDisplay.style.display = 'inline';
    nameInput.style.display = 'none';
    
    // 更改按鈕文字
    editButton.innerText = 'edit';
  }
}

// Get elements
const addMusicButton = document.getElementById('addMusicButton');
const musicForm = document.getElementById('musicForm');
const submitMusicButton = document.getElementById('submitMusicButton');
const cancelMusicButton = document.getElementById('cancelMusicButton');
const musicGallery = document.getElementById('musicGallery');

// Show form when "Add" button is clicked
addMusicButton.addEventListener('click', function() {
  musicForm.style.display = 'block'; // Show the form
  addMusicButton.style.display = 'none'; // Hide the "Add" button
});

// Cancel form
cancelMusicButton.addEventListener('click', function() {
  musicForm.style.display = 'none'; // Hide the form
  addMusicButton.style.display = 'inline-block'; // Show the "Add" button again
});

// Submit form
submitMusicButton.addEventListener('click', function() {
  const musicLink = document.getElementById('musicLink').value;
  const musicName = document.getElementById('musicName').value;

  // Validate input
  if (musicLink && musicName) {
    const musicItem = document.createElement('a');
    musicItem.href = musicLink;
    musicItem.target = '_blank';
    musicItem.classList.add('music-item');
    
    const img = document.createElement('img');
    img.src = 'YouTube_Logo.jpg'; // Use a default image or user-provided image
    img.alt = musicName;
    
    const p = document.createElement('p');
    p.innerText = musicName;

    musicItem.appendChild(img);
    musicItem.appendChild(p);
    musicGallery.appendChild(musicItem);

    // Reset form and hide it
    document.getElementById('musicLink').value = '';
    document.getElementById('musicName').value = '';
    musicForm.style.display = 'none';
    addMusicButton.style.display = 'inline-block';
  } else {
    alert('Please fill in both fields.');
  }
});
