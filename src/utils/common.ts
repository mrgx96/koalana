export const scrollTo = (evt: React.MouseEvent, hash: string) => {
  evt.stopPropagation();
  evt.preventDefault();
  const element = document.getElementById(hash);
  if (history.pushState) {
    history.pushState(null, '', `#${hash}`);
  } else {
    window.location.hash = hash;
  }
  window.scrollTo({
    top: element?.offsetTop,
    behavior: 'smooth',
  });
};
