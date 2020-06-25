const wait = (ms: number) =>
  new Promise(resolve => setTimeout(() => resolve(), ms));

const StopLoading: () => void = async () => {
  const LoadWindow = document.getElementById('Loading');
  if (LoadWindow) {
    await wait(2000);
    LoadWindow.classList.remove('-is-active');
  }
};

export const LoadComplete: () => void = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  window.addEventListener('load', event => StopLoading());
};
