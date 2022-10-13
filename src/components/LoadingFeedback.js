import loadingGif from '../assets/loading.gif';

const LoadingFeedback = () => {
  return (
    <div className='loading-feedback'>
      <img src={loadingGif} className='loading-feedback-gif' alt='loading gif'/>
      <h1>Loading...</h1>
    </div>
  );
};

export default LoadingFeedback;