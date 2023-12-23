import './App.css';
import BlogPreviewCard, { Author } from './Components/BlogPreviewCard';

function App() {
  const greg: Author = {
    name: "Greg Hooper",
    image: "./images/image-avatar.webp",
  };

  return (
    <div className="App">
      <BlogPreviewCard 
        blogImage='./images/illustration-article.svg'
        blogType='Learning'
        publishDate={new Date()}
        title='HTML & CSS foundations'
        description={`These languages are the backbone of every
          website, defining structure, content and presentation.`}
        author={greg} />
    </div>
  );
}

export default App;
