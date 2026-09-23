# AdviceBrands PH - Desktop Client

Custom build of the Mattermost desktop app for AdviceBrands - PH.

## Download

Get the latest installer from the [Releases page](../../releases/tag/latest):

- **Windows:** download the `.msi` file and run it.
- **Mac:** download the `.dmg` file, open it, and drag the app to Applications.

## First launch

These builds aren't code-signed (no Apple/Microsoft developer certificate), so
your OS will warn you the first time you open the app. This is expected -
here's how to proceed:

**Windows:** click "More info", then "Run anyway".

**Mac:** if you see "cannot be opened because it is from an unidentified
developer", right-click (or Control-click) the app in Applications and choose
"Open", then confirm in the dialog that appears. If your Mac still blocks it,
go to System Settings > Privacy & Security, scroll down, and click "Open
Anyway" next to the message about this app.

## Building it yourself

This repo only contains a small config patch and a GitHub Actions workflow
(`.github/workflows/build.yml`) that checks out the official
[mattermost/desktop](https://github.com/mattermost/desktop) source, applies
the patch, and builds installers for Windows and Mac. Run the workflow from
the Actions tab to produce a fresh build.
