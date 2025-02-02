import { getBlogPostBySlug } from '@/lib/getBlogPosts';
import { useState, useRef } from 'react';


const BlogPostPage =  ({ params }: { params: { slug: string } }) =>{
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const blogPost = getBlogPostBySlug(params.slug);

  if (!blogPost) {
    return <div>Post not found</div>;
  }


  const handlePlayPause = () => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.pause() : videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div> {/* Added a wrapping div */}
      {/* ... other JSX for blog post details (title, content, date, etc.) */}

      {blogPost.videoUrl && (
        <div className="relative">
          <video
            ref={videoRef}
            src={blogPost.videoUrl}
            controls={!blogPost.coverImage} // Only show controls if there's no cover image
            className="w-full h-auto rounded-lg mb-8"
            poster={blogPost.coverImage} // Use cover image as poster
            onClick={blogPost.coverImage ? handlePlayPause : undefined}
            style = {{cursor: blogPost.coverImage ? 'pointer' : 'default'}}
          />
          {blogPost.coverImage && ( // Overlay play button if cover image exists
            <div className="absolute inset-0 flex items-center justify-center bg-black/50"
            onClick={handlePlayPause}
            style = {{cursor: 'pointer'}}
            >
              <button className="text-white">
                {/* Play/Pause Icon (using SVG) */}
                 {isPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                  </svg>
                )}

              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default BlogPostPage;