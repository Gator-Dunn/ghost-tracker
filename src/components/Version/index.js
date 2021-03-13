import React from 'react';
import pkgJson from '../../../package.json';
import './Version.css';

const Version = () => <footer className="version">Beta Version: {pkgJson.version}</footer>

export default Version;
