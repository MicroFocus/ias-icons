import { deriveCodepointsFromFilenames, generateIconInfoList, generatePackageJson, removeHexNumber } from './font-generator.utils';
import { IconInfo } from '../common/types/icon-info.type';

import * as webfontsGenerator from 'webfonts-generator';
import * as globby from 'globby';
import * as fs from 'fs';

const svgFiles = globby.sync(['**/*.svg'], { cwd: 'icons', absolute: true });
const codepoints = deriveCodepointsFromFilenames(svgFiles);

new Promise((resolve, reject) => {
    webfontsGenerator({
        files: svgFiles,
        rename: removeHexNumber,
        dest: 'dist/generated-font/dist/fonts',
        cssDest: 'dist/generated-font/dist/ias-icons.css',
        cssFontsUrl: './fonts',
        cssTemplate: 'src/font-generator/font-generator.css.template',
        fontName: 'ias-icons',
        types: ['svg', 'ttf', 'woff', 'woff2', 'eot'],
        templateOptions: {
            classPrefix: 'ias-icon-',
            baseSelector: '.ias-icon'
        },
        fontHeight: 1000,
        normalize: true,
        round: 10e4,
        writeFiles: true,
        html: true,
        codepoints
    }, (error) => {
        if (error) {
            reject(error);
        } else {
            resolve(true);
        }
    });
}).then(() => {
    const iconInfo = require('../../icons/icon-info.json');
    const manifest: IconInfo[] = generateIconInfoList(codepoints, iconInfo);
    fs.writeFileSync('dist/generated-font/dist/ias-icons.json', JSON.stringify(manifest, null, 4));
    fs.writeFileSync('dist/generated-font/package.json', JSON.stringify(generatePackageJson(), null, 4));
    fs.copyFileSync('README.md', 'dist/generated-font/README.md');

    console.log('ias-icons font and styles have been successfully built and copied to target/dist/ias-icons');
}).catch((error) => {
    console.log('Fail!', error);
});
