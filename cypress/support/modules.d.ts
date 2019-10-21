declare module 'cypress-image-snapshot/command' {
    type SnapshotOptions = Partial<
      Cypress.Loggable &
      Cypress.Timeoutable &
      Cypress.ScreenshotOptions &
      import('cypress-image-snapshot/plugin').MatchImageSnapshotOptions
    >;
  
    export const addMatchImageSnapshotCommand: (options?: SnapshotOptions) => void;
  }