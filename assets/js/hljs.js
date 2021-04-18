export default {
  init: function () {
    const pre = $('pre[data-ke-type="codeblock"]')
    pre.removeClass()
    pre.attr('style', '')

    $('pre[data-ke-type="codeblock"] code').each((index, item) => {
      hljs.highlightElement(item)
    })
  }
}
