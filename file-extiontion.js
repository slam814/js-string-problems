function getFileExtension(fileName) {
    // Split the file name by '.' and get the last element
    let extension = fileName.split('.').pop();
    return extension;
  }
  
  // Example usage:
  let myFileName = 'example_file.docx';
  let extension = getFileExtension(myFileName);
  console.log('File extension:', extension); // Output: 'docx'
  