function wordCount(paragraph) {
  return paragraph.trim().split(/\s+/).length;
}

console.log(wordCount("This is a simple paragraph with several words."));