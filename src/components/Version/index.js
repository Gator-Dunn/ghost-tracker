import React from 'react';
import pkgJson from '../../../package.json';

const Version = ({...props}) => <footer {...props}>Beta Version: {pkgJson.version}</footer>

export default Version;
