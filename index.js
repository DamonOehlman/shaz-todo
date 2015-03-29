/**
  # shaz-todo

  A [shazam](https://github.com/DamonOehlman/shazam) plugin for marking a TODO
  slide.

  ## Example Usage

  <<< examples/simple.js

**/
module.exports = function(Slide, opts) {
  Slide.prototype.todo = function(comment) {
    this.h4(comment);
    this.el.style.backgroundColor = 'red';

    return this;
  };
};
