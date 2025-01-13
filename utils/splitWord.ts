function splitWord(inputString: string): string[] {
    const words: string[] = [];
    const regex = /(\S+\s*|\s+)/g; // Match a word (non-whitespace characters) followed by spaces, or just spaces
  
    let match;
    while ((match = regex.exec(inputString)) !== null) {
      words.push(match[0]);
    }
  
    return words;
  }
  
  export default splitWord;
  