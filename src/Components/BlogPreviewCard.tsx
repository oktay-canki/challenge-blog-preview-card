type Props = {
   blogImage: string,
   blogType: string,
   publishDate: Date,
   title: string,
   description: string,
   author: Author,
};

export type Author = {
   name: string,
   image: string
}

const BlogPreviewCard = (props: Props) => {
   const formatOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
   const formatDate = (d: Date) => {
      // display based on current locale
      return d.toLocaleDateString(undefined, formatOptions);
   }

   return (
      <div className="blog-preview-card col-3">
         <img className="illustration" src={props.blogImage} alt="blog cover image" />
         <span className="pill">{props.blogType}</span>
         <span className="publish-date">{formatDate(props.publishDate)}</span>
         <h2 className="title">{props.title}</h2>
         <p className="description"> {props.description} </p>
         <div className="author-container">
            <img src={props.author.image} alt="author image" />
            <span>{props.author.name}</span>
         </div>
      </div>
   );
}

export default BlogPreviewCard;