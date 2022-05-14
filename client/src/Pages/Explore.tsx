import moment from 'moment';
import { useEffect } from 'react';
import ShowTweet from '../Components/ShowTweet';
import TweetCreate from '../Components/TweetCreate';
import { useDispatchHook, useHookState } from '../hooks/useReduxTools';
import { fetchTweets } from '../redux/tweetSlice';

const Explore = () => {
  const { dispatch } = useDispatchHook();
  const { tweets } = useHookState();
  // Fetch all tweets
  useEffect(() => {
    dispatch(fetchTweets());
  }, []);

  if (tweets.loading) return <div>Loading...</div>;

  return (
    <div className='bg-[#F2F2F2] p-[1.5rem] md:p-[2.4rem]'>
      <div className='min-h-[60vh] max-w-[1076px] m-[0_auto] grid grid-rows-16 items-start gap-[25px]'>
        <TweetCreate />
        {tweets.tweets
          .slice()
          .sort(
            (a, b) =>
              new Date(b?.createdAt)?.getTime() -
              new Date(a?.createdAt)?.getTime()
          )
          .map((tweet) => (
            <ShowTweet
              key={tweet._id}
              content={tweet.content}
              profilePicture={tweet?.userId?.profilePic}
              firstName={tweet?.userId?.firstName}
              lastName={tweet?.userId?.lastName}
              date={tweet.createdAt}
            />
          ))}
      </div>
    </div>
  );
};

export default Explore;
