const IframeYouTube = ({ url, title }) => {
  return (
    <iframe
      width="100%"
      height="350px"
      className="animate__animated animate__fadeIn"
      src={url}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  );
};

export default IframeYouTube;
