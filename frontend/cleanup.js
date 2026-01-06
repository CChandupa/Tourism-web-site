const fs = require('fs');
const path = require('path');

const targetDir = path.join('D:', 'Tourism Website Project', 'Frontend', 'node_modules');

if (fs.existsSync(targetDir)) {
    try {
        fs.rmSync(targetDir, { recursive: true, force: true });
        console.log('Successfully deleted node_modules');
    } catch (err) {
        console.error(`Error deleting node_modules: ${err.message}`);
    }
} else {
    console.log('node_modules does not exist');
}

const lockFile = path.join('D:', 'Tourism Website Project', 'Frontend', 'package-lock.json');
if (fs.existsSync(lockFile)) {
    try {
        fs.unlinkSync(lockFile);
        console.log('Successfully deleted package-lock.json');
    } catch (err) {
        console.error(`Error deleting package-lock.json: ${err.message}`);
    }
}
