import ReactGA from 'react-ga';
ReactGA.initialize(process.env.React_GA = 'A');

const useAnalyticsEventTracker = (category = "Blog category") => {
  const eventTracker = (action = "test action", label = "test label") => {
    ReactGA.event({ category, action, label });
  }
  return eventTracker;
}
export default useAnalyticsEventTracker;
