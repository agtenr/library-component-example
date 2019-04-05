# Introduction
This is an example project which uses the Library Component (in preview) of the SPFx 1.8 release. It has one simple web part which displays the UTC time which is loaded from the library component. Instead of using 'npm link', this project uses [Rush](https://rushjs.io) as a repository manager.

# Prerequisites
Before you can test this example you need the following:
 * The latest version of the SharePoint yeoman generator installed (currently 1.8)
 * A globally installed version of Rush (version 5.6.1 or greater)

# Testing the example
1. Clone the repository
2. Run `rush install`
3. Run `rush build`
4. Cd to `packages/test-webparts` and run `gulp serve --nobrowser`
5. Navigate to your SharePoint workbench (e.g. https://tenant.sharepoint.com/_layouts/15/workbench.aspx)
6. Add the MyLibraryTest web part.

It is not possible to test this in the local SP workbench (see [this](https://github.com/SharePoint/sp-dev-docs/issues/3736) GitHub issue) 
