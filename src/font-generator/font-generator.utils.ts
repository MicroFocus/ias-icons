import * as path from 'path';
import { IconInfo } from '../common/types/icon-info.type';

const CODEPOINT_PREFIX = /^[uU][0-9A-Fa-f]{4}-/;
const ICON_NAME_WITH_CODEPOINT = /^[uU]([0-9A-Fa-f]{4})-(.*)$/;

export function removeHexNumber(svgFile: string): string {
    const basename = path.basename(svgFile, '.svg');
    const iconName = basename.replace(CODEPOINT_PREFIX, '');
    return iconName;
}

export function deriveCodepointsFromFilenames(svgFiles: string[]): any {
    let errorsExist = false;
    const codepoints = {};

    if (svgFiles?.length > 0) {
        svgFiles.forEach((svgFile: string) => {
            const basename = path.basename(svgFile, '.svg');
            const codepointAndName = basename.match(ICON_NAME_WITH_CODEPOINT);

            if (codepointAndName) {
                // Set the icon name key to the codepoint hex value:
                codepoints[codepointAndName[2]] = parseInt(codepointAndName[1], 16);
            } else {
                console.error('Error: File name does not match the expected format (uXXXX-name): ' + basename);
                errorsExist = true;
            }
        });
    }

    if (errorsExist) {
        console.error('\nUnable to continue due to errors\n');
        process.exit(1);
    }

    return codepoints;
}

export function generateIconInfoList(codepoints: any, iconInfo: any): IconInfo[] {
    return Object.keys(codepoints).map((key: string) => {
        const uses = iconInfo[key]?.uses ?? '';
        const notes = iconInfo[key]?.notes ?? '';

        return {
            name: key,
            glyph: '\\' + codepoints[key].toString(16).toUpperCase(),
            className: 'ias-icon-' + key,
            uses,
            notes
        };
    });
}

/**
 * Modifies the existing package.json file by removing the sections for scripts, dependencies, etc., to keep things simple. Consumers
 * won't need to worry about relying on external dependencies.
 */
export function generatePackageJson(): any {
    const packageJson = require('../../package.json');

    delete packageJson.private;
    delete packageJson.scripts;
    delete packageJson.dependencies;
    delete packageJson.devDependencies;

    return packageJson;
}
