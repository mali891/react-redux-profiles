const scrollToTop = (el) => {
  el.scrollIntoView({
    block: 'center',
    inline: 'center',
  });
}

export default scrollToTop;