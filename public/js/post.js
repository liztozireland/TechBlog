const newFormHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector('#comment-desc').value.trim();
  const postID = document.querySelector('#comment-post-id').value.trim();

  if (comment) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ comment, postID }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace(`/post/${postID}`);
    } else {
      alert('Failed to post comment');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);
