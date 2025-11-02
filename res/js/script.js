async function loadPosts() {
  try {
    const response = await fetch('https://api.npoint.io/790959870578ea4481ce');
    const posts = await response.json();

    const container = document.getElementById('postsContainer');
    container.innerHTML = ''; 

    posts.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.classList.add('post');

      postDiv.innerHTML = `
        <div class="post-header">
          <img src="res/images/default_avatar.jpg" alt="Avatar" class="post-avatar">
          <div class="post-meta">
            <span class="post-author">${post.author}</span><br>
            <span class="post-date">${new Date(post.date).toDateString()}</span>
          </div>
        </div>
        <div class="post-content">
          <img src="${post.image}" alt="Post image" class="post-image">
          <p>${post.content}</p>
        </div>
        <div class="post-footer">
          <img src="res/images/like.png" alt="Like" class="like-icon">
        </div>
      `;

      container.appendChild(postDiv);
    });
  } catch (error) {
    console.error('Error loading posts:', error);
  }
}

function setupDropdown() {
  const avatar = document.getElementById('userAvatar');
  const menu = document.getElementById('userMenu');

  avatar.addEventListener('click', () => {
    menu.classList.toggle('show');
  });

  document.addEventListener('click', (e) => {
    if (!avatar.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('show');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadPosts();
  setupDropdown();
});
