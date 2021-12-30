export const sendTrackingEvent = (label: string) => {
  window.gtag("event", "click", { event_label: label });
};
