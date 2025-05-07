
function postMessage() {
  const chatBox = document.getElementById('chat-box');
  const input = document.getElementById('chat-input');
  if (input.value.trim()) {
    const msg = document.createElement('div');
    msg.textContent = input.value;
    chatBox.appendChild(msg);
    input.value = '';
  }
}
