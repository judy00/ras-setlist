(function () {
  'use strict';

  const listView = document.getElementById('song-list-view');
  const prompterView = document.getElementById('teleprompter-view');
  const lyricsContainer = document.getElementById('lyrics-container');
  const songListEl = document.getElementById('song-list');
  const settingsBtn = document.getElementById('settings-btn');
  const settingsModal = document.getElementById('settings-modal');
  const settingsClose = document.getElementById('settings-close');
  const settingsList = document.getElementById('settings-list');
  const controls = document.getElementById('controls');
  const btnBack = document.getElementById('btn-back');
  const btnPlay = document.getElementById('btn-play');
  const btnSlower = document.getElementById('btn-slower');
  const btnFaster = document.getElementById('btn-faster');
  const speedLabel = document.getElementById('speed-label');
  const btnFontDown = document.getElementById('btn-font-down');
  const btnFontUp = document.getElementById('btn-font-up');
  const btnTheme = document.getElementById('btn-theme');

  let currentSong = null;
  let isPlaying = false;
  let scrollAnimId = null;
  let speedMultiplier = 1.0;
  let fontSize = 1.8;
  let lastTimestamp = null;
  let scrollPosition = 0;
  let manualScrollTimeout = null;
  let controlsVisible = true;
  let controlsTimeout = null;

  // Load settings from localStorage
  function loadSettings() {
    try {
      const saved = localStorage.getItem('teleprompter-settings');
      if (saved) {
        const s = JSON.parse(saved);
        if (s.fontSize) fontSize = s.fontSize;
        if (s.theme === 'light') document.body.classList.add('light');
        if (s.songs) {
          s.songs.forEach(function (ss) {
            const song = songs.find(function (x) { return x.id === ss.id; });
            if (song) {
              if (ss.bpm != null) song.bpm = ss.bpm;
              if (ss.duration != null) song.duration = ss.duration;
            }
          });
        }
      }
    } catch (e) { /* ignore */ }
  }

  function saveSettings() {
    const data = {
      fontSize: fontSize,
      theme: document.body.classList.contains('light') ? 'light' : 'dark',
      songs: songs.map(function (s) {
        return { id: s.id, bpm: s.bpm, duration: s.duration };
      })
    };
    localStorage.setItem('teleprompter-settings', JSON.stringify(data));
  }

  // Render song list
  function renderSongList() {
    songListEl.innerHTML = '';
    songs.forEach(function (song) {
      var li = document.createElement('li');
      var btn = document.createElement('button');
      btn.textContent = song.title;
      btn.addEventListener('click', function () { openSong(song); });
      li.appendChild(btn);
      songListEl.appendChild(li);
    });
  }

  // Open song in teleprompter
  function openSong(song) {
    currentSong = song;
    lyricsContainer.innerHTML = '<h2 class="song-title-display">' + song.title + '</h2>' + song.html;
    lyricsContainer.scrollTop = 0;
    lyricsContainer.style.fontSize = fontSize + 'rem';
    listView.classList.add('hidden');
    prompterView.classList.remove('hidden');
    isPlaying = false;
    btnPlay.textContent = '▶';
    speedMultiplier = 1.0;
    speedLabel.textContent = '1.0x';
    showControls();
  }

  // Close teleprompter
  function closeSong() {
    stopScrolling();
    prompterView.classList.add('hidden');
    listView.classList.remove('hidden');
    currentSong = null;
  }

  // Auto-scroll
  function getScrollSpeed() {
    if (!currentSong || !currentSong.duration) {
      return 50 * speedMultiplier; // default: 50px/s
    }
    var totalHeight = lyricsContainer.scrollHeight - lyricsContainer.clientHeight;
    var pxPerSec = totalHeight / currentSong.duration;
    return pxPerSec * speedMultiplier;
  }

  function scrollStep(timestamp) {
    if (!isPlaying) return;
    if (lastTimestamp === null) lastTimestamp = timestamp;
    var delta = (timestamp - lastTimestamp) / 1000;
    lastTimestamp = timestamp;
    var speed = getScrollSpeed();
    scrollPosition += speed * delta;
    lyricsContainer.scrollTop = Math.round(scrollPosition);
    // Stop at bottom
    var maxScroll = lyricsContainer.scrollHeight - lyricsContainer.clientHeight;
    if (scrollPosition >= maxScroll) {
      stopScrolling();
      return;
    }
    scrollAnimId = requestAnimationFrame(scrollStep);
  }

  function startScrolling() {
    isPlaying = true;
    btnPlay.textContent = '▐▐';
    lastTimestamp = null;
    scrollPosition = lyricsContainer.scrollTop;
    scrollAnimId = requestAnimationFrame(scrollStep);
  }

  function stopScrolling() {
    isPlaying = false;
    btnPlay.textContent = '▶';
    if (scrollAnimId) {
      cancelAnimationFrame(scrollAnimId);
      scrollAnimId = null;
    }
  }

  function togglePlay() {
    if (isPlaying) {
      stopScrolling();
    } else {
      startScrolling();
    }
  }

  // Manual scroll detection
  var isUserScrolling = false;
  lyricsContainer.addEventListener('touchstart', function () {
    isUserScrolling = true;
    if (isPlaying) {
      cancelAnimationFrame(scrollAnimId);
      scrollAnimId = null;
    }
  }, { passive: true });

  lyricsContainer.addEventListener('touchend', function () {
    isUserScrolling = false;
    if (isPlaying) {
      clearTimeout(manualScrollTimeout);
      manualScrollTimeout = setTimeout(function () {
        scrollPosition = lyricsContainer.scrollTop;
        lastTimestamp = null;
        scrollAnimId = requestAnimationFrame(scrollStep);
      }, 2000);
    }
  }, { passive: true });

  // Mouse wheel for desktop
  lyricsContainer.addEventListener('wheel', function () {
    if (isPlaying) {
      cancelAnimationFrame(scrollAnimId);
      scrollAnimId = null;
      clearTimeout(manualScrollTimeout);
      manualScrollTimeout = setTimeout(function () {
        scrollPosition = lyricsContainer.scrollTop;
        lastTimestamp = null;
        scrollAnimId = requestAnimationFrame(scrollStep);
      }, 2000);
    }
  }, { passive: true });

  // Controls visibility
  function showControls() {
    controls.classList.remove('faded');
    controlsVisible = true;
    resetControlsTimeout();
  }

  function hideControls() {
    controls.classList.add('faded');
    controlsVisible = false;
  }

  function resetControlsTimeout() {
    clearTimeout(controlsTimeout);
    if (isPlaying) {
      controlsTimeout = setTimeout(hideControls, 4000);
    }
  }

  lyricsContainer.addEventListener('click', function (e) {
    if (e.target === lyricsContainer || e.target.closest('.section') || e.target.closest('.song-title-display')) {
      if (controlsVisible) {
        hideControls();
      } else {
        showControls();
      }
    }
  });

  // Speed control
  function changeSpeed(delta) {
    speedMultiplier = Math.max(0.3, Math.min(3.0, speedMultiplier + delta));
    speedLabel.textContent = speedMultiplier.toFixed(1) + 'x';
  }

  // Font size
  function changeFontSize(delta) {
    fontSize = Math.max(1.0, Math.min(4.0, fontSize + delta));
    lyricsContainer.style.fontSize = fontSize + 'rem';
    saveSettings();
  }

  // Theme
  function toggleTheme() {
    document.body.classList.toggle('light');
    btnTheme.textContent = document.body.classList.contains('light') ? '☾' : '☀';
    saveSettings();
  }

  // Settings modal
  function openSettings() {
    settingsList.innerHTML = '';
    songs.forEach(function (song) {
      var div = document.createElement('div');
      div.className = 'setting-item';
      div.innerHTML = '<h3>' + song.title + '</h3>' +
        '<label>BPM</label>' +
        '<input type="number" data-id="' + song.id + '" data-field="bpm" value="' + (song.bpm || '') + '" placeholder="例: 180">' +
        '<label>時長（秒）</label>' +
        '<input type="number" data-id="' + song.id + '" data-field="duration" value="' + (song.duration || '') + '" placeholder="例: 240">';
      settingsList.appendChild(div);
    });
    settingsModal.classList.remove('hidden');
  }

  function closeSettings() {
    var inputs = settingsList.querySelectorAll('input');
    inputs.forEach(function (input) {
      var id = input.dataset.id;
      var field = input.dataset.field;
      var val = input.value ? Number(input.value) : null;
      var song = songs.find(function (s) { return s.id === id; });
      if (song) song[field] = val;
    });
    saveSettings();
    settingsModal.classList.add('hidden');
  }

  // Event listeners
  btnBack.addEventListener('click', closeSong);
  btnPlay.addEventListener('click', function () { togglePlay(); resetControlsTimeout(); });
  btnSlower.addEventListener('click', function () { changeSpeed(-0.2); resetControlsTimeout(); });
  btnFaster.addEventListener('click', function () { changeSpeed(0.2); resetControlsTimeout(); });
  btnFontDown.addEventListener('click', function () { changeFontSize(-0.2); resetControlsTimeout(); });
  btnFontUp.addEventListener('click', function () { changeFontSize(0.2); resetControlsTimeout(); });
  btnTheme.addEventListener('click', function () { toggleTheme(); resetControlsTimeout(); });
  settingsBtn.addEventListener('click', openSettings);
  settingsClose.addEventListener('click', closeSettings);

  // Keyboard shortcuts
  document.addEventListener('keydown', function (e) {
    if (!currentSong) return;
    if (e.target.tagName === 'INPUT') return;
    if (e.code === 'Space') { e.preventDefault(); togglePlay(); }
    if (e.code === 'ArrowUp') { changeSpeed(0.2); }
    if (e.code === 'ArrowDown') { changeSpeed(-0.2); }
  });

  // Init
  loadSettings();
  renderSongList();
  btnTheme.textContent = document.body.classList.contains('light') ? '☾' : '☀';

  // Register Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
  }
})();
