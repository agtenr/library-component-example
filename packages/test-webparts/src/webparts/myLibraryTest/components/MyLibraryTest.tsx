import * as React from 'react';
import styles from './MyLibraryTest.module.scss';
import { IMyLibraryTestProps } from './IMyLibraryTestProps';
import { escape } from '@microsoft/sp-lodash-subset';
import * as myLibrary from "test-library";

export default class MyLibraryTest extends React.Component<IMyLibraryTestProps, {}> {
  public render(): React.ReactElement<IMyLibraryTestProps> {
    const myLib = new myLibrary.MyLibraryLibrary();

    return (
      <div className={ styles.myLibraryTest }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(myLib.WhatTimeIsIt())}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

