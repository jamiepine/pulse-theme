const { lighten, darken } = require('polished');

module.exports = ({
  blue,
  green,
  red,
  yellow,
  violet,
  comment,
  cyan,
  magenta,
  foreground,
  background,
}) => ({
  // activity bar
  'activityBar.background': background,
  'activityBar.border': darken(0.01, background),
  'activityBar.dropBackground': darken(0.1, background),
  'activityBar.foreground': comment,
  'activityBarBadge.background': darken(0.2, blue),
  'activityBarBadge.foreground': foreground,
  'editorLineNumber.foreground': darken(0.2, comment),
  'editorLineNumber.activeForeground': foreground,

  // badge
  'badge.background': darken(0.2, blue),
  'badge.foreground': '#fff',

  // button
  'button.background': red,
  'button.foreground': '#fff',
  'button.hoverBackground': darken(0.1, red),

  // contrast
  contrastActiveBorder: null,
  // contrastBorder: foreground,

  // description
  descriptionForeground: comment,

  // diff
  'diffEditor.insertedTextBackground': green + '33',
  'diffEditor.insertedTextBorder': green + '55',
  'diffEditor.removedTextBackground': red + '33',
  'diffEditor.removedTextBorder': red + '55',

  // dropdown
  'dropdown.background': darken(0.025, background),
  'dropdown.listBackground': darken(0.01, background),
  'dropdown.border': darken(0.04, background),
  'dropdown.foreground': foreground,
  'editorWidget.background': darken(0.02, background),
  'editorWidget.border': darken(0.04, background),

  // editor
  foreground,
  'editor.foreground': foreground,
  'editor.background': background,
  'editorIndentGuide.background': lighten(0.05, background),
  'editorIndentGuide.activeBackground': lighten(0.15, background),
  'editorLink.activeForeground': blue,
  'editor.lineHighlightBackground': lighten(0.035, background),
  'editor.lineHighlightBorder': lighten(0.065, background),
  'editor.rangeHighlightBackground': lighten(0.02, background) + '80',
  'editorCodeLens.foreground': comment,
  'editorCursor.foreground': comment,

  // editorGutter
  'editorGutter.addedBackground': green,
  'editorGutter.deletedBackground': red,
  'editorGutter.modifiedBackground': blue,

  // editorGroupHeader
  'editorGroupHeader.noTabsBackground': darken(0.01, background),
  'editorGroupHeader.tabsBackground': darken(0.01, background),
  'editorGroupHeader.tabsBorder': darken(0.0, background),

  // editorSuggestWidget
  'editorSuggestWidget.background': darken(0.03, background),
  'editorSuggestWidget.border': darken(0.05, background),
  'editorSuggestWidget.foreground': comment,
  'editorSuggestWidget.highlightForeground': blue,
  'editorSuggestWidget.selectedBackground': lighten(0.05, background),

  // editorSelection
  'editor.selectionBackground': lighten(0.2, background),
  'editor.selectionHighlightBackground': lighten(0.2, background) + '85',
  'editor.inactiveSelectionBackground': lighten(0.15, background) + '80',
  'editor.wordHighlightStrongBackground': lighten(0.2, background) + '50',
  'editor.wordHighlightBackground': lighten(0.2, background) + '50',
  'editor.findMatchBackground': blue + '80',
  'editor.findMatchHighlightBackground': lighten(0.05, blue) + '25',
  'editor.findRangeHighlightBackground': lighten(0.2, background) + '85',
  'editor.hoverHighlightBackground': lighten(0.15, background) + '70',

  // input
  'input.background': lighten(0.065, background),
  'input.border': lighten(0.1, background),
  'input.foreground': foreground,
  'input.placeholderForeground': comment,
  'inputOption.activeBorder': blue,
  'inputValidation.errorBackground': lighten(0.065, background),
  'inputValidation.errorBorder': red,
  'inputValidation.infoBackground': lighten(0.065, background),
  'inputValidation.infoBorder': blue,
  'inputValidation.warningBackground': lighten(0.065, background),
  'inputValidation.warningBorder': yellow,

  // list
  'list.activeSelectionBackground': lighten(0.075, background),
  'list.activeSelectionForeground': foreground,
  'list.dropBackground': darken(0.03, background),
  'list.focusBackground': darken(0.03, background),
  'list.focusForeground': comment,
  'list.hoverBackground': lighten(0.15, background),
  'list.hoverForeground': foreground,
  'list.inactiveSelectionBackground': lighten(0.075, background),
  'list.inactiveSelectionForeground': foreground,
  'list.highlightForeground': blue,

  // notifications
  'notification.background': darken(0.03, background),
  'notification.border': darken(0.05, background),

  // panel
  'panel.background': background,
  'panelTitle.activeBorder': darken(0.04, blue),
  'panelTitle.activeForeground': foreground,
  'panelTitle.inactiveForeground': comment,

  // peekView
  // 'peekView.border': darken(0.03, background),

  // picker
  'pickerGroup.border': darken(0.05, background),
  'pickerGroup.foreground': comment,

  // scrollbar
  'scrollbar.shadow': '#00000000',
  'scrollbarSlider.background': lighten(0.075, background),
  'scrollbarSlider.activeBackground': darken(0.05, background),
  'scrollbarSlider.hoverBackground': lighten(0.125, background),

  // sidebar
  'sideBar.background': lighten(0.015, background),
  'sideBar.border': darken(0.01, background),
  'sideBar.foreground': comment,
  'sideBarTitle.foreground': comment,

  // status bar
  'statusBar.background': background,
  'statusBar.border': darken(0.01, background),
  'statusBar.foreground': comment,
  'statusBar.noFolderBackground': background,
  'statusBar.noFolderForeground': comment,
  'statusBarItem.hoverBackground': lighten(0.06, background),
  'statusBarItem.activeBackground': lighten(0.03, background),

  // tab
  'tab.activeBackground': darken(0.04, background),
  'tab.activeForeground': foreground,
  'tab.border': darken(0.04, background),
  'tab.activeBorder': darken(0.04, blue),
  'tab.inactiveBackground': lighten(0.015, background),
  'tab.inactiveForeground': comment,
  'tab.unfocusedActiveForeground': comment,
  'tab.unfocusedInactiveForeground': comment,

  // terminal
  'terminal.ansiBlack': '#000000',
  'terminal.ansiRed': red,
  'terminal.ansiGreen': green,
  'terminal.ansiYellow': yellow,
  'terminal.ansiBlue': blue,
  'terminal.ansiMagenta': magenta,
  'terminal.ansiCyan': cyan,
  'terminal.ansiWhite': foreground,
  'terminal.ansiBrightBlack': '#000000',
  'terminal.ansiBrightRed': red,
  'terminal.ansiBrightGreen': green,
  'terminal.ansiBrightYellow': yellow,
  'terminal.ansiBrightBlue': blue,
  'terminal.ansiBrightMagenta': magenta,
  'terminal.ansiBrightCyan': cyan,
  'terminal.ansiBrightWhite': foreground,
  'terminal.background': background,
  'terminal.foreground': foreground,
  'terminalCursor.background': comment,
  'terminalCursor.foreground': comment,

  // title bar
  'titleBar.activeBackground': darken(0.01, background),

  // widgets
  'widget.shadow': darken(0.06, background),
});
