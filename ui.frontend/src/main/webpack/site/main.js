// Import global styles
import './main.scss';

// Import global scripts
import './util.js';

try {
    // Import all JS files from components directory
    const requireComponents = require.context(
        // Look in the components directory
        '../../components',  // Updated path
        // Look in subdirectories
        true,
        // Only include .js files
        /\.js$/
    );

    requireComponents.keys().forEach(fileName => {
        // Skip index/main files to avoid circular dependencies
        if (!fileName.includes('index.js') && !fileName.includes('main.js')) {
            requireComponents(fileName);
        }
    });
} catch (error) {
    console.warn('Error loading component scripts:', error);
}