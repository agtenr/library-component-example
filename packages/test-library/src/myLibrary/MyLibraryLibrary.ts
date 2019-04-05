export default class MyLibraryLibrary {
  public WhatTimeIsIt(): string {
    return `The current UTC time is ${new Date().toUTCString()}`;
  }
}

