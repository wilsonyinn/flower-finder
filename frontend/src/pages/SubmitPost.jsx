import React from 'react'

const SubmitPost = () => {
  return (
    <div>  
    <header class="post-nav">
      <button class="green-button">Join</button>
    </header>

    <div class="post-background">
      <form id="photo-upload" class="white-box">
        <h1>Upload</h1>
        <p>Share your photos and videos, and let the world love them.</p>
        <input type="file" id="photo" name="photo" accept="image/*" required />
        <button class="green-button" type="submit">Submit</button>
      </form>
    </div></div>
  )
}

export default SubmitPost