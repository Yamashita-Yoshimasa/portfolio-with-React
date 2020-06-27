export const GetCenterPosition: () => number = () => {
  return window.innerHeight / 2;
};

export const GetTitlePosition: () => number = () => {
  const Title = document.getElementById('title');
  const Header = document.getElementById('header');
  let position: number;
  if (Title && Header) {
    position = Title.clientHeight / 2 + Header.clientHeight;

    return position;
  }

  return 0;
};
