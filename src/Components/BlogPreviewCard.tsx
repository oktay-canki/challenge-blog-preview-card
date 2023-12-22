type Props = {

};

const BlogPreviewCard = (props: Props) => {
   return (
      <div className="blog-preview-card col-3">
         <img className="illustration" src="./images/illustration-article.svg" alt="blog cover image" />
         <span className="pill">Learning</span>
         <span className="publish-date">Published 21 Dec 2023</span>
         <h2 className="title">HTML & CSS foundations</h2>
         <p className="description">
            These languages are the backbone of every
            website, defining structure, content and
            presentation.
         </p>
         <div className="author-container">
            <img src="./images/image-avatar.webp" alt="author image" />
            <span>Greg Hooper</span>
         </div>
      </div>
   );
}

export default BlogPreviewCard;