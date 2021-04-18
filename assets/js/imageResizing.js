function setWidth(el, width) {
  width = width > 1100 ? 1100 : width
  $(el).css({width, 'max-width': 'none', 'margin-left': `calc((100% - ${width}px) / 2)`})
}

const mapper = {
  imageSlideBlock: {
    selector: 'figure.imageslideblock.alignCenter',
    width: (el) => {
      return $(el).find('.image-wrap.selected > img').data('origin-width')
    }
  },
  imageBlock: {
    selector: 'figure.imageblock.alignCenter',
    width: (el) => {
      return $(el).data('origin-width') || $(el).attr('width') || $(el).width()
    }
  },
  imageGridBlock: {
    selector: 'figure.imagegridblock',
    width: 1100,
  },
}

export function imageResizing(options) {
  if (options.targets) {
    options.targets.forEach((item) => {
      $(mapper[item].selector).each(function () {
        const width = (typeof mapper[item].width === 'function') ? mapper[item].width(this) : mapper[item].width
        setWidth(this, width)
      })
    })
  }
}
