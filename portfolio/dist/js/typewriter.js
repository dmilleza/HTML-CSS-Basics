const span = document.querySelector('.txt-type')

const words = span.dataset.words
const wait = span.dataset.wait

function textTyping(text, i = 0) {
  if (i === 0) {
    span.textContent = ''
  }
  span.textContent += text[i]

  if (i === text.length - 1) {
    return
  }

  setTimeout(() => textTyping(text, i + 1), wait)
}

textTyping(words)
