const avatarImg = document.getElementById('avatar');
const avatarIdInput = document.getElementById('avatarId');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');

generateBtn.addEventListener('click', () => {
    const id = avatarIdInput.value;
    avatarImg.src = `https://api.multiavatar.com/${id}.png`;
});

downloadBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = avatarImg.src;
    link.download = 'my-avatar.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
