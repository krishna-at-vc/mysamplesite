// Import global styles and scripts
import './main.scss';
import './util.js';

// Import components using require.context
try {
    const componentContext = require.context(
        // Starting from site folder, go up one level and into components
        '../../components',
        // Search subdirectories
        true,
        // Only include JavaScript files
        /\.js$/
    );

    // Import each component
    componentContext.keys().forEach(key => {
        // Skip any index or main files
        if (!key.includes('index.js') && !key.includes('main.js')) {
            componentContext(key);
        }
    });
} catch (error) {
    console.warn('No component scripts found:', error);
}