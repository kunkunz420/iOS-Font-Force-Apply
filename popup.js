const toggle = document.getElementById('toggle');

// 加载上次状态
chrome.storage.sync.get('fontEnabled', (data) => {
  toggle.checked = data.fontEnabled !== false;
});

// 状态切换时保存
toggle.addEventListener('change', () => {
  chrome.storage.sync.set({ fontEnabled: toggle.checked });
});
