declare interface IMyLibraryTestWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'MyLibraryTestWebPartStrings' {
  const strings: IMyLibraryTestWebPartStrings;
  export = strings;
}
