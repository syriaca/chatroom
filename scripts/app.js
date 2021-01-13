// DOM queries
const chatList = document.querySelector('.chat-list');
const newChat = document.querySelector('.new-chat');
const newName = document.querySelector('.new-name');
const alertMessage = document.querySelector('.alert-message');

// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('gaming', 'jean-yves');

// Add new chat
newChat.addEventListener('submit', e => {
    e.preventDefault();
    chatroom
        .addChat(e.target.message.value.trim())
        .then(() => newChat.reset())
        .catch(error => console.log(error))    
})

// Change username
newName.addEventListener('submit', e => {
    e.preventDefault();
    const newUserName = e.target.name.value.trim();
    chatroom.updateUsername(newUserName);
    newName.reset();
    alertMessage.innerHTML = `Ok username updated to <strong>${newUserName}</strong>`;
    alertMessage.classList.remove('d-none');
    setTimeout(() => {
        alertMessage.classList.add('d-none');
        alertMessage.innerHTML = ""
    }, 3000);
})

// get chat and render
chatroom.getChats(data => chatUI.render(data));